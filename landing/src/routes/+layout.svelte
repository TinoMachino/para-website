<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { openSourceRepos } from '$lib/content/site';
	import { content } from '$lib/content/i18n';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';

	import '@parasocial/ui/tokens.css';
	import favicon from '$lib/assets/favicon.png';
	import logomark from '$lib/assets/logomark.png';
	import '$lib/styles/app.css';

	let { children } = $props();

	const topNav = [
		{ href: '/thesis', label: 'Thesis' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/try-app', label: 'Try app' }
	] as const;

	const isActive = (href: string) =>
		page.url.pathname === href || (href !== '/' && page.url.pathname.startsWith(`${href}/`));

	beforeNavigate(() => {
		document.documentElement.style.scrollBehavior = 'auto';
	});

	afterNavigate(() => {
		window.scrollTo(0, 0);
		document.documentElement.style.scrollBehavior = '';
	});
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
			<div class="header-actions">
				<a
					class="github-link"
					href="https://github.com/mexico-parasocial"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
				>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
					</svg>
					<span class="github-label">GitHub</span>
				</a>
				<LanguageSwitcher />
			</div>
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
					{$content.footerCopy}
				</p>
				<div class="footer-repo-list">
					{#each openSourceRepos as repo, i (repo.label)}
						<a href={repo.href} target="_blank" rel="external noreferrer">
							{i === 0
								? $content.footerRepoLabels.website
								: i === 1
									? $content.footerRepoLabels.app
									: $content.footerRepoLabels.backend} repo
						</a>
					{/each}
				</div>
			</div>
			<div class="footer-links">
				<a href={resolve('/thesis')}>Thesis</a>
				<a href={resolve('/blog')}>Blog</a>
				<a href={resolve('/trust-and-safety')}>Trust and safety</a>
				<a href={resolve('/try-app')}>Try app</a>
				<a href={resolve('/support')}>Support</a>
				<a href={resolve('/support/terms-of-service')}>Terms</a>
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

	.site-shell {
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr auto;
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
		min-height: 4.5rem;
		padding: 1rem 0;
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
		gap: 0.2rem;
		color: #f3f3ef;
	}

	.site-header-motif {
		display: block;
		width: 2.4rem;
		height: 2.4rem;
		filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.25));
	}

	.site-header-lockup-text {
		font-family: 'PARA Cinzel', serif;
		font-size: 1.05rem;
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
		font-size: 1.55rem;
		font-weight: 600;
		letter-spacing: 0.12em;
	}

	.site-brand-text {
		color: #f3f3ef;
		text-indent: 0.12em;
	}

	.site-mark {
		width: 1.8rem;
		height: 1.8rem;
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

	.header-actions {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.github-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.35rem 0.7rem;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(255, 255, 255, 0.04);
		color: #9ba9c1;
		font-size: 0.85rem;
		font-weight: 600;
		text-decoration: none;
		transition: background 0.2s ease, color 0.2s ease;
	}

	.github-link:hover {
		background: rgba(255, 255, 255, 0.08);
		color: #ffffff;
	}

	.github-label {
		display: none;
	}

	@media (min-width: 768px) {
		.github-label {
			display: inline;
		}
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
