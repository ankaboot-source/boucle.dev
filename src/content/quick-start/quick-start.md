---
title: Quick start
sub: One command, and boucles takes over.
tablistAriaLabel: Install method
onelinerTab: Oneliner
promptTab: Prompt
onelinerCode: curl -fsSL https://boucle.dev/install.sh | bash
promptCode: |-
  Install boucle on this GitLab/GitHub repository. Execute these steps and report
  back what you did:

  1. If you are not already inside the target repository — the one whose
     origin remote points to your GitLab host — ask the user for its URL,
     clone it, and work from the clone.
  2. git submodule add https://github.com/ankaboot-source/boucle .boucle
  3. Run setup in non-interactive mode. It auto-detects the GitLab host and
     project from `git remote get-url origin`, so no value needs to be
     replaced: .boucle/bin/setup --non-interactive
  4. Do NOT include an API key anywhere. The API key must never appear in
     this conversation. If setup tells you the key is missing, that's
     expected — it is configured manually in the GitLab UI afterwards.
  5. git add .gitmodules .boucle .gitlab-ci.yml && git commit -m "chore: install boucle engine"
  6. Show me the URL bin/setup printed for configuring the masked API key,
     and any next steps it listed.
copyLabel: Copy
copiedLabel: Copied!
failedLabel: Failed
transitionNum: Next
transitionPrefix: Create an issue in your forge and tag it
transitionTag: boucle:triage
transitionSuffix: → boucle starts.
docsLabel: View the docs →
docsHref: https://github.com/ankaboot-source/boucle/blob/main/README.md
---
