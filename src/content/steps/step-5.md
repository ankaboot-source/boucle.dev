---
order: 5
title: It's verified
description: The reviewer checks the render, posts a verdict (PASS/FAIL) as a PR comment. If FAIL, it loops. If PASS, the PR is ready.
ariaLabel: "Forge mockup: a pull request with a PASS verdict comment."
url: github.com/my-repo/pull/25
blocks:
  - type: prTitle
    text: Pull request — dark mode
  - type: verdict
    text: PASS
    className: mock-verdict--pass flow-verdict
  - type: comment
    text: "Verified: the render matches the spec. Ready to merge."
icon: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M4 12l5 5L20 6\" /></svg>"
---
