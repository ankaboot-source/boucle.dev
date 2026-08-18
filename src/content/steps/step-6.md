---
order: 6
title: Approve, it's live
description: Approve the PR (or boucle merges per config). The feature ships to production. It's live.
ariaLabel: "Forge mockup: a merged pull request with a live badge."
url: github.com/my-repo/pull/25
blocks:
  - type: prTitle
    text: Pull request — dark mode
  - type: deploy
  - type: deployLabel
    text: Feature deployed
  - type: verdict
    text: MERGED
    className: mock-verdict--merged
  - type: liveBadge
    text: "● Live in production"
icon: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M12 3v12M7 8l5-5 5 5\" /><path d=\"M4 21h16\" /></svg>"
---
