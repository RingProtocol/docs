---
id: dapp-integration-with-skills
title: DApp Integration with Skills
sidebar_position: 3
---

This guide shows the fastest way to integrate your DApp with Ring Wallet using Skills.

## 1. Add Ring AI Skills

Run:

```bash
npx skills add ringprotocol/ring-ai
```

## 2. Select and Install the Skill

Choose the skill:

```text
dapp-to-ringwallet
```

```text
Recommend: Install in .agents dir for current Projects.
```

Then complete the install flow in the prompt.

![Add skill and select dapp-to-ringwallet](/img/skill/add_skill_and_select%20dapp_to_ringwallet.png)

## 3. Tell Your AI Agent to Use the Skill

After installation, the skill will be available locally (commonly under a folder like `.skill/`).

In your AI tool, explicitly tell the model where the skill lives and what you want it to do. For example:

```text
Prompt:
Follow .agents/.skill/dapp-to-ringwallet to modify this dapp project.
```

## 4. Verify the Integration

After applying the skill:
- [Register DApp with Ring Wallet](/wallet/integrate-dapp/register-your-dapp) with the deployed DApp URL.
- [Test DApp with Ring Wallet](/wallet/integrate-dapp/test-your-dapp)
