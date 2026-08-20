---
order: 6
title: Approve, it's live
description: Approve the PR (or boucle merges per config). The feature ships to production. It's live.
ariaLabel: "Forge mockup: a merged pull request with a live badge."
url: github.com/my-repo/pull/25
blocks:
  - type: prTitle
    text: Pull request — responsive mobile
  - type: e2e
    text: End-to-end tests pass
  - type: deploy
  - type: deployLabel
    text: Feature deployed
  - type: verdict
    text: MERGED
    className: mock-verdict--merged
  - type: liveBadge
    text: "● Live in production"
icon: "/icons/step-6.svg"
---
