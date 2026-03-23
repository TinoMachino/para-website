# Contributing

## Scope

This repository is for the public PARA website and docs. Contributions should improve the public site, shared website packages, documentation quality, accessibility, developer experience, or deployment clarity.

If a change depends on private infrastructure, private mobile builds, or unpublished backend behavior, document the boundary clearly and keep sensitive details out of the diff.

## Local Setup

```bash
pnpm install
pnpm dev
```

Before submitting a pull request, run:

```bash
pnpm check
pnpm lint
pnpm test
pnpm build
```

## Pull Request Expectations

Keep pull requests focused and easy to review.

Include:

- a clear description of the problem
- the concrete change made
- screenshots for visible UI changes
- notes about any deployment or content implications

Avoid mixing unrelated cleanup into feature work.

## Content and Docs Standards

- Prefer direct, concrete language.
- Keep product claims aligned with what the code or public release actually supports.
- Mark experimental or partial surfaces clearly.
- If you add new terminology, update the relevant docs or glossary content in the site.

## Open-Source Boundaries

Do not commit:

- secrets or tokens
- production credentials
- private operational instructions
- temporary demo tunnels
- proprietary assets you do not have the right to publish

## Reporting Issues

- Use GitHub issues for bugs, gaps in documentation, and feature proposals.
- Use the security policy in [`SECURITY.md`](./SECURITY.md) for sensitive disclosures.

## Review Standards

Changes may be rejected if they:

- weaken clarity or accuracy
- introduce private-only operational details into the public repo
- add unnecessary dependencies
- make deployment or onboarding harder without a strong reason
