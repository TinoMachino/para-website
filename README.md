# PARA Website

Open-source repository for the public PARA website and docs experience.

This repository is intended to hold the website code that powers the public-facing PARA presence, including:

- the canonical public site
- product and trust documentation
- schema reference pages
- shared brand and content packages used by the site

Production infrastructure may exist outside this repository. This repo should only contain material that is safe and useful to publish openly.

## Repository Status

This repository has been prepared as the public website codebase and seeded from the internal website workspace.

Current goals:

- keep the public site buildable and reviewable in the open
- document how contributors can run, modify, and deploy the site
- keep operational secrets, private build links, and internal-only runbooks out of the public tree

## What Belongs Here

Include:

- public website source code
- public docs content
- shared design tokens and schema fixtures used by the site
- deployment guidance for the public website
- contributor-facing documentation

Do not include:

- secrets, API keys, tokens, or `.env` files with real values
- private mobile builds or internal demo artifacts
- ngrok links or temporary tunnels meant only for local demos
- private backend credentials or production runbooks

Additional scope notes live in [`docs/OPEN_SOURCE_SCOPE.md`](./docs/OPEN_SOURCE_SCOPE.md).

## Workspace Layout

The repo is a `pnpm` workspace.

```text
.
├── apps/
│   ├── docs/      # canonical public site at /
│   └── landing/   # alternate landing variant
├── packages/
│   ├── content-schema/
│   └── ui/
├── scripts/
└── docs/
```

## Requirements

- Node.js 20+
- `pnpm` 10+

If you use `corepack`, this is enough:

```bash
corepack enable
corepack prepare pnpm@10.32.1 --activate
```

## Local Development

Install dependencies:

```bash
pnpm install
```

Run the canonical public site:

```bash
pnpm dev
```

Run the alternate landing app:

```bash
pnpm dev:landing
```

Useful workspace commands:

```bash
pnpm check
pnpm lint
pnpm test
pnpm build
pnpm build:site
pnpm build:landing
```

## Deployment

The public production site is intended to be deployed from `apps/docs`.

Primary reference:

- [`CLOUDFLARE_PAGES.md`](./CLOUDFLARE_PAGES.md)

Public deploy summary:

- build command: `pnpm build:site`
- output directory: `apps/docs/build`
- production app: `apps/docs`

Additional deployment notes live in [`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md).

## Open-Source Hygiene

Before opening a pull request, make sure:

- no generated local build output is committed
- no internal-only URLs or credentials were added
- docs match the behavior of the code being changed
- contributor-facing instructions still work from a clean clone

## Contributing

Start with [`CONTRIBUTING.md`](./CONTRIBUTING.md).

Also relevant:

- [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md)
- [`SECURITY.md`](./SECURITY.md)

## License

This repository is licensed under the GNU GPL v3. See [`LICENSE`](./LICENSE).
