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

Then complete the install flow in the prompt.

![Add skill and select dapp-to-ringwallet](/img/skill/add_skill_and_select%20dapp_to_ringwallet.png)

## 3. Tell Your AI Agent to Use the Skill

After installation, the skill will be available locally (commonly under a folder like `.skill/`).

In your AI tool, explicitly tell the model where the skill lives and what you want it to do. For example:

```text
I have installed the Ring Wallet integration skill. The skill is located at:
.skill/dapp-to-ringwallet

Please read the skill instructions in that folder and then:
1) Ask me for any required inputs (project type, framework, wallet connect flow, etc.)
2) Apply the integration steps to my current codebase
3) Show me exactly what files were changed and how to verify the integration
```

If your AI tool supports selecting skills directly, choose the installed skill and run it, then follow its prompts.

## 4. Verify the Integration

After applying the skill:
- [Register DApp with Ring Wallet](/wallet/integrate-dapp/register-your-dapp) with the deployed DApp URL.
- [Test DApp with Ring Wallet](/wallet/integrate-dapp/test-your-dapp)
