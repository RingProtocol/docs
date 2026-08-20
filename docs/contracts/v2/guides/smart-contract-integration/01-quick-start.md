---
id: quick-start
title: Smart Contract Quick Start
---

This guide shows a narrow adapter for one allowlisted Ring Swap pair. It fixes the router, factory, FewFactory,
underlying tokens, and FewToken path at deployment so callers cannot redirect funds through an arbitrary contract or
pool.

The example is an integration pattern, not a deployed or audited contract. Add protocol-specific access control,
accounting, emergency behavior, and tests before production use.

## Select and verify a deployment

Start from [Ring Swap deployments](../../deployments), then verify the selected addresses onchain:

1. The RPC chain ID equals the intended network.
2. Router, Ring Swap Factory, FewFactory, FewTokens, and pair all have bytecode.
3. The router's immutable getters return the selected factory and FewFactory.
4. `FewFactory.getWrappedToken(underlying)` returns each FewToken.
5. `Ring Swap Factory.getPair(fewTokenIn, fewTokenOut)` returns the selected pair.

Do not accept these addresses from calldata, token metadata, a pool list, or a quote response.

## Fixed-pair adapter

This example uses OpenZeppelin Contracts 5.x `SafeERC20` and `ReentrancyGuard`:

```solidity
pragma solidity ^0.8.20;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

interface IRingSwapRouter {
    function factory() external view returns (address);
    function fewFactory() external view returns (address);

    function swapExactTokensForTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address recipient,
        uint256 deadline
    ) external returns (uint256[] memory amounts);
}

interface IFewFactory {
    function getWrappedToken(address underlying) external view returns (address);
}

interface IFewWrappedToken {
    function token() external view returns (address);
}

interface IRingSwapFactory {
    function getPair(address tokenA, address tokenB) external view returns (address);
}

contract FixedPairRingSwap is ReentrancyGuard {
    using SafeERC20 for IERC20;

    IRingSwapRouter public immutable router;
    IERC20 public immutable inputToken;
    address public immutable outputToken;
    address public immutable fewTokenIn;
    address public immutable fewTokenOut;
    address public immutable pair;

    constructor(
        address router_,
        address factory_,
        address fewFactory_,
        address inputToken_,
        address outputToken_,
        address fewTokenIn_,
        address fewTokenOut_
    ) {
        require(
            router_.code.length > 0 && factory_.code.length > 0 && fewFactory_.code.length > 0,
            "missing deployment code"
        );
        require(inputToken_.code.length > 0 && outputToken_.code.length > 0, "missing token code");
        require(fewTokenIn_.code.length > 0 && fewTokenOut_.code.length > 0, "missing FewToken code");

        IRingSwapRouter selectedRouter = IRingSwapRouter(router_);
        require(selectedRouter.factory() == factory_, "router factory mismatch");
        require(selectedRouter.fewFactory() == fewFactory_, "router FewFactory mismatch");

        IFewFactory selectedFewFactory = IFewFactory(fewFactory_);
        require(selectedFewFactory.getWrappedToken(inputToken_) == fewTokenIn_, "input wrapper mismatch");
        require(selectedFewFactory.getWrappedToken(outputToken_) == fewTokenOut_, "output wrapper mismatch");
        require(IFewWrappedToken(fewTokenIn_).token() == inputToken_, "input underlying mismatch");
        require(IFewWrappedToken(fewTokenOut_).token() == outputToken_, "output underlying mismatch");

        address selectedPair = IRingSwapFactory(factory_).getPair(fewTokenIn_, fewTokenOut_);
        require(selectedPair != address(0) && selectedPair.code.length > 0, "pair not deployed");

        router = selectedRouter;
        inputToken = IERC20(inputToken_);
        outputToken = outputToken_;
        fewTokenIn = fewTokenIn_;
        fewTokenOut = fewTokenOut_;
        pair = selectedPair;
    }

    function swapExactInput(
        uint256 amountIn,
        uint256 amountOutMin,
        address recipient,
        uint256 deadline
    ) external nonReentrant returns (uint256[] memory amounts) {
        require(amountIn > 0 && amountOutMin > 0, "invalid amount");
        require(recipient != address(0), "invalid recipient");
        require(deadline > block.timestamp, "expired");

        inputToken.safeTransferFrom(msg.sender, address(this), amountIn);
        inputToken.forceApprove(address(router), amountIn);

        address[] memory path = new address[](2);
        path[0] = fewTokenIn;
        path[1] = fewTokenOut;

        amounts = router.swapExactTokensForTokens(amountIn, amountOutMin, path, recipient, deadline);
        inputToken.forceApprove(address(router), 0);
    }
}
```

The caller approves the adapter for the original input token. The adapter approves the selected Ring Swap Router for
the same original token and exact amount. The router wraps it internally. The path itself contains FewToken addresses.

## Production checks

- Calculate `amountOutMin` from a fresh quote plus an independent price policy. The pair reserve ratio is not an oracle.
- Pass a caller-approved future deadline. Do not replace it with `block.timestamp` inside the transaction.
- Support only reviewed ERC-20 behavior. Fee-on-transfer, rebasing, callback, and nonstandard approval tokens need
  dedicated handling and tests.
- Simulate the exact call at the latest block and test revert behavior, allowance cleanup, recipient handling, and both
  token directions.
- If the integration needs multiple assets, extend a governance-controlled allowlist with delayed, reviewable changes.
  Do not accept arbitrary factories, routers, wrappers, pairs, or approval spenders from users.

See [Security and Risk](/security-and-risk) for the complete pre-signing checklist.
