# Deployment

This repository is intended to deploy the public PARA website from `apps/docs`.

## Cloudflare Pages

Recommended settings:

- framework preset: `None`
- build command: `pnpm build:site`
- build output directory: `apps/docs/build`

If this repo is connected directly to Cloudflare Pages as a standalone repository, the repository root is the project root. No extra `cd website` step is needed.

## Production Surface

- canonical site app: `apps/docs`
- optional alternate landing app: `apps/landing`

## First Deploy Checklist

1. Install dependencies with `pnpm install`.
2. Verify the build locally with `pnpm build:site`.
3. Connect the GitHub repository to Cloudflare Pages.
4. Set the build command to `pnpm build:site`.
5. Set the output directory to `apps/docs/build`.
6. Verify the deployed routes:
   - `/`
   - `/about`
   - `/docs`
   - `/docs/product`
   - `/try-app`

## Notes

- Keep secrets in the deployment platform, not in the repo.
- If APK download hosting is used, store the artifact outside Pages and inject the public URL at build time.
- See [`../CLOUDFLARE_PAGES.md`](../CLOUDFLARE_PAGES.md) for the fuller Pages and asset-hosting notes.
