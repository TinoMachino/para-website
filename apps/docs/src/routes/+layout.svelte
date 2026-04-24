<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { openSourceRepos } from '$lib/content/site';
	import '@parasocial/ui/tokens.css';
	import favicon from '$lib/assets/favicon.png';
	import logomark from '$lib/assets/logomark.svg';
	import '$lib/styles/app.css';

	let { children } = $props();

	const topNav = [
		{ href: '/about', label: 'About' },
		{ href: '/docs/product', label: 'Product' },
		{ href: '/trust-and-safety', label: 'Trust and safety' },
		{ href: '/docs', label: 'Docs' },
		{ href: '/try-app', label: 'Try app' }
	] as const;

	const isActive = (href: string) =>
		page.url.pathname === href || (href !== '/' && page.url.pathname.startsWith(`${href}/`));
</script>

<svelte:head>
	<link rel="icon" type="image/png" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="site-shell">
	<header class="site-header">
		<div class="site-header-inner">
			<a class="site-header-mark" href={resolve('/')} aria-label="PARA home">
				<span class="site-header-lockup">
					<span class="site-header-badge">
						<img class="site-header-motif" src={logomark} alt="" />
						<span class="site-header-lockup-text">PARA</span>
					</span>
				</span>
			</a>
			<nav class="site-nav">
				{#each topNav as item (item.href)}
					<a class:active={isActive(item.href)} href={resolve(item.href)}>
						{item.label}
					</a>
				{/each}
			</nav>
		</div>
	</header>

	<main>
		{@render children()}
	</main>

	<footer class="site-footer">
		<div class="site-footer-inner">
			<div>
				<p class="footer-mark">
					<img class="site-mark" src={logomark} alt="" />
					<span class="site-brand-text">PARA</span>
				</p>
				<p class="footer-copy">
					Browse the thesis, product surfaces, trust model, app access, and schema reference from
					any entry point.
				</p>
				<div class="footer-repo-list">
					{#each openSourceRepos as repo (repo.href)}
						<a href={repo.href} target="_blank" rel="noreferrer">{repo.label} repo</a>
					{/each}
				</div>
			</div>
			<div class="footer-links">
				<a href={resolve('/docs')}>Docs</a>
				<a href={resolve('/about')}>About</a>
				<a href={resolve('/trust-and-safety')}>Trust and safety</a>
				<a href={resolve('/try-app')}>Try app</a>
				<a href={resolve('/docs/schemas')}>Schemas</a>
			</div>
		</div>
	</footer>
</div>

<style>
	@font-face {
		font-family: 'PARA Cinzel';
		src: url('/fonts/Cinzel-SemiBold.ttf') format('truetype');
		font-style: normal;
		font-weight: 600;
		font-display: swap;
	}

	:global(body) {
		background:
			radial-gradient(circle at top left, rgba(42, 198, 255, 0.09), transparent 24%),
			radial-gradient(circle at top right, rgba(72, 38, 127, 0.16), transparent 22%), #0d1522 !important;
		color: #ffffff !important;
		font-family: var(--ps-font-body);
	}

	.site-header {
		position: sticky;
		top: 0;
		z-index: 20;
		backdrop-filter: blur(18px);
		background: rgba(11, 18, 31, 0.74);
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	}

	.site-header-inner,
	.site-footer-inner {
		width: min(var(--ps-max-width-docs), calc(100% - 2rem));
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.site-header-inner {
		position: relative;
		min-height: 4rem;
		padding: 0.85rem 0;
	}

	.site-header-mark,
	.site-nav {
		flex: 1 1 0;
	}

	.site-header-mark {
		display: inline-flex;
		align-items: center;
		justify-content: flex-start;
		text-decoration: none;
	}

	.site-header-lockup {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.site-header-badge {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.1rem;
		color: #f3f3ef;
	}

	.site-header-motif {
		display: block;
		width: 1.5rem;
		height: 1.5rem;
		color: #f3f3ef;
		filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.25));
	}

	.site-header-lockup-text {
		font-family: 'PARA Cinzel', serif;
		font-size: 0.84rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		line-height: 1;
		color: #f3f3ef;
		text-indent: 0.14em;
	}

	.footer-mark {
		display: inline-flex;
		align-items: center;
		gap: 0.7rem;
		font-family: 'PARA Cinzel', serif;
		font-size: 1.42rem;
		font-weight: 600;
		letter-spacing: 0.12em;
	}

	.site-brand-text {
		color: #f3f3ef;
		text-indent: 0.12em;
	}

	.site-mark {
		width: 1.4rem;
		height: 1.4rem;
		color: #f3f3ef;
		filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.22));
	}

	.site-nav,
	.footer-links {
		display: flex;
		flex-wrap: wrap;
		gap: 1.2rem;
	}

	.site-nav {
		justify-content: flex-end;
	}

	.site-nav a,
	.footer-links a {
		padding: 0.45rem 0.85rem;
		border-radius: 999px;
		font-weight: 600;
		color: #bac7db;
		transition:
			background 0.2s ease,
			color 0.2s ease,
			transform 0.2s ease;
	}

	.site-nav a.active,
	.site-nav a:hover {
		background: rgba(255, 255, 255, 0.07);
		color: #ffffff;
		transform: translateY(-1px);
	}

	.site-footer {
		padding: 2.4rem 0 2.8rem;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(8, 13, 24, 0.52);
	}

	.site-footer-inner {
		padding-top: 1.2rem;
		border-top: 1px solid rgba(71, 70, 82, 0.14);
		align-items: flex-start;
	}

	.footer-copy {
		margin: 0.45rem 0 0;
		color: #9ba9c1;
		line-height: 1.65;
	}

	.footer-repo-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.85rem;
		margin-top: 0.9rem;
	}

	.footer-repo-list a {
		color: #c7d3e5;
		font-weight: 600;
	}

	.footer-repo-list a:hover {
		color: #ffffff;
	}

	@media (max-width: 960px) {
		.site-header-inner,
		.site-footer-inner {
			width: min(var(--ps-max-width-docs), calc(100% - 1.25rem));
			flex-direction: column;
			align-items: stretch;
		}

		.site-header-mark,
		.site-nav {
			flex: 0 0 auto;
		}

		.site-nav {
			justify-content: flex-start;
		}
	}
</style>
