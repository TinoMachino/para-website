<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { getArchitectureNotes, getSchemaIndex } from '@parasocial/content-schema';
	import { flowNav, primaryNav, readerNav } from '$lib/content/navigation';
	import { openSourceRepos } from '$lib/content/site';
	import { siteUrl, siteName } from '$lib/content/site';

	let { children, data } = $props();

	const SVG_NS = 'http://www.w3.org/2000/svg';

	function isSectionActive(href: string) {
		if (href === '/docs') {
			return page.url.pathname === href;
		}
		return page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);
	}

	let sidebarOpen = $state(false);

	const ogTitle = $derived(page.data.title ?? 'Docs');
	const ogDescription = $derived(page.data.description ?? 'Technical documentation for PARA.');
	const canonical = $derived(`${siteUrl}${page.url.pathname}`);
	const ogImage = $derived(`${siteUrl}/product/social-card-default.png`);
	const visiblePrimaryNav = $derived(data?.primaryNav ?? primaryNav);
	const visibleReaderNav = $derived(data?.readerNav ?? readerNav);
	const visibleFlowNav = $derived(data?.flowNav ?? flowNav);
	const visibleSchemaIndex = $derived(data?.schemaIndex ?? getSchemaIndex());
	const visibleArchitectureNotes = $derived(data?.architectureNotes ?? getArchitectureNotes());

	function createSvgIcon(kind: 'copy' | 'check') {
		const svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttribute('width', '14');
		svg.setAttribute('height', '14');
		svg.setAttribute('viewBox', '0 0 24 24');
		svg.setAttribute('fill', 'none');
		svg.setAttribute('stroke', 'currentColor');
		svg.setAttribute('stroke-width', kind === 'copy' ? '2' : '2.5');
		svg.setAttribute('stroke-linecap', 'round');
		svg.setAttribute('stroke-linejoin', 'round');

		if (kind === 'copy') {
			const rect = document.createElementNS(SVG_NS, 'rect');
			rect.setAttribute('x', '9');
			rect.setAttribute('y', '9');
			rect.setAttribute('width', '13');
			rect.setAttribute('height', '13');
			rect.setAttribute('rx', '2');
			rect.setAttribute('ry', '2');
			svg.append(rect);

			const path = document.createElementNS(SVG_NS, 'path');
			path.setAttribute('d', 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1');
			svg.append(path);
		} else {
			const polyline = document.createElementNS(SVG_NS, 'polyline');
			polyline.setAttribute('points', '20 6 9 17 4 12');
			svg.append(polyline);
		}

		return svg;
	}

	function setCopyButtonState(button: HTMLButtonElement, copied = false) {
		button.classList.toggle('copied', copied);
		button.replaceChildren(
			createSvgIcon(copied ? 'check' : 'copy'),
			document.createTextNode(copied ? 'Copied' : 'Copy')
		);
	}

	function copyCodeButtons(node: HTMLElement) {
		function enhance() {
			node.querySelectorAll('pre').forEach((pre) => {
				if (pre.closest('.code-block')) return;

				const wrapper = document.createElement('div');
				wrapper.className = 'code-block';

				const button = document.createElement('button');
				button.type = 'button';
				button.className = 'copy-btn';
				button.setAttribute('aria-label', 'Copy code');
				setCopyButtonState(button);

				button.addEventListener('click', () => {
					void navigator.clipboard.writeText(pre.textContent || '');
					setCopyButtonState(button, true);
					setTimeout(() => {
						setCopyButtonState(button);
					}, 2000);
				});

				pre.parentNode?.insertBefore(wrapper, pre);
				wrapper.appendChild(pre);
				wrapper.appendChild(button);
			});
		}

		enhance();

		const observer = new MutationObserver(enhance);
		observer.observe(node, { childList: true, subtree: true });

		return {
			destroy() {
				observer.disconnect();
			}
		};
	}
</script>

<svelte:head>
	<title>{ogTitle} | {siteName} Docs</title>
	<meta name="description" content={ogDescription} />

	<!-- Open Graph -->
	<meta property="og:title" content={ogTitle} />
	<meta property="og:description" content={ogDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:site_name" content={siteName} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={ogTitle} />
	<meta name="twitter:description" content={ogDescription} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="docs-shell">
	<div class="docs-layout">
		<aside class="docs-panel sidebar">
			<button
				type="button"
				class="sidebar-toggle"
				aria-expanded={sidebarOpen}
				aria-controls="sidebar-nav"
				onclick={() => (sidebarOpen = !sidebarOpen)}
			>
				<span>Menu</span>
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					{#if sidebarOpen}
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					{:else}
						<line x1="3" y1="12" x2="21" y2="12" />
						<line x1="3" y1="6" x2="21" y2="6" />
						<line x1="3" y1="18" x2="21" y2="18" />
					{/if}
				</svg>
			</button>
			<div id="sidebar-nav" class="sidebar-nav" class:open={sidebarOpen}>
				<div class="sidebar-block sidebar-start">
					<p class="sidebar-kicker">Docs</p>
					<a class="brand" href={resolve('/docs')}>PARA Docs</a>
					<p class="sidebar-copy">
						Product context first, protocol detail nearby, and clear exits into trust, app access,
						and the open repos.
					</p>
				</div>

				<nav class="sidebar-block">
					<p class="sidebar-title">Core docs</p>
					<div class="nav-list">
						{#each visiblePrimaryNav as item (item.href)}
							<a class:active={isSectionActive(item.href)} href={resolve(item.href as any)}>
								{item.label}
							</a>
						{/each}
					</div>
				</nav>

				<div class="sidebar-block">
					<p class="sidebar-title">Route families</p>
					<div class="nav-list compact">
						{#each visibleFlowNav as item (item.href)}
							<a class:active={isSectionActive(item.href)} href={resolve(item.href as any)}>
								{item.label}
							</a>
						{/each}
					</div>
				</div>

				<div class="sidebar-block">
					<p class="sidebar-title">Schemas</p>
					<div class="nav-list compact schema-list">
						{#each visibleSchemaIndex as schema (schema.id)}
							{@const suffix = schema.title.startsWith('com.para.')
								? schema.title.slice('com.para.'.length)
								: schema.title}
							<a
								class:active={page.url.pathname === `/docs/schemas/${schema.id}`}
								href={resolve(`/docs/schemas/${schema.id}`)}
								class="schema-link"
							>
								{suffix}
							</a>
						{/each}
					</div>
				</div>

				<div class="sidebar-block architecture-notes">
					<p class="sidebar-title">Implementation notes</p>
					{#each visibleArchitectureNotes as note (note.id)}
						<div class="note-row">
							<strong>{note.title}</strong>
							<p>{note.summary}</p>
						</div>
					{/each}
				</div>

				<div class="sidebar-block">
					<p class="sidebar-title">Open source repos</p>
					<div class="nav-list compact">
						{#each openSourceRepos as repo (repo.href)}
							<a href={repo.href} target="_blank" rel="external noreferrer">{repo.label}</a>
						{/each}
					</div>
				</div>

				<div class="sidebar-block">
					<p class="sidebar-title">Also on this site</p>
					<div class="nav-list compact">
						{#each visibleReaderNav as item (item.href)}
							<a href={resolve(item.href as any)}>{item.label}</a>
						{/each}
					</div>
				</div>
			</div>
		</aside>

		<main class="docs-content" use:copyCodeButtons>
			<div class="docs-prose">
				{@render children()}
			</div>
		</main>
	</div>
</div>

<style>
	.docs-layout {
		width: min(var(--ps-max-width-docs), calc(100% - 2rem));
		margin: 0 auto;
		display: grid;
		grid-template-columns: 290px minmax(0, 1fr);
		gap: 1.75rem;
		padding: 1.5rem 0 2.5rem;
	}

	.sidebar {
		padding: 1.25rem;
		position: sticky;
		top: 5.4rem;
		align-self: start;
		max-height: calc(100vh - 6.5rem);
		overflow: auto;
	}

	.sidebar-toggle {
		display: none;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		padding: 0.75rem 1rem;
		margin-bottom: 0.5rem;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 0.75rem;
		color: #ffffff;
		font-size: 0.9rem;
		font-weight: 700;
		cursor: pointer;
	}

	.sidebar-toggle:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	.sidebar-nav {
		display: contents;
	}

	.sidebar-start {
		display: grid;
		gap: 0.9rem;
	}

	.sidebar-block + .sidebar-block {
		margin-top: 1.05rem;
		padding-top: 1rem;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
	}

	.sidebar-kicker {
		margin: 0 0 0.55rem;
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--para-accent-text);
	}

	.brand {
		font-family: var(--ps-font-body);
		font-size: 1.85rem;
		letter-spacing: -0.02em;
		color: #ffffff;
	}

	.sidebar-copy,
	.note-row p {
		margin: 0.55rem 0 0;
		color: #b9b3c6;
		line-height: 1.58;
	}

	.sidebar-title {
		margin: 0 0 0.85rem;
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #918ba0;
	}

	.nav-list {
		display: grid;
		gap: 0.18rem;
	}

	.nav-list a {
		padding: 0.55rem 0.7rem;
		border-left: 2px solid transparent;
		border-radius: 0.55rem;
		font-weight: 600;
		color: #d6d0df;
		background: transparent;
		border: 1px solid transparent;
	}

	.nav-list a.active,
	.nav-list a:hover {
		background: rgba(255, 255, 255, 0.055);
		border-color: transparent;
		border-left-color: var(--para-primary-300);
		color: #ffffff;
	}

	.compact a {
		font-size: 0.92rem;
		min-width: 0;
		overflow-wrap: break-word;
	}

	.schema-link {
		font-family: var(--ps-font-mono);
		font-size: 0.82rem;
	}

	.schema-list {
		max-height: 18rem;
		overflow: auto;
		padding-right: 0.2rem;
	}

	.architecture-notes {
		display: grid;
		gap: 0.8rem;
	}

	.note-row {
		display: grid;
		gap: 0.35rem;
		padding: 0.2rem 0.1rem;
	}

	.note-row strong {
		font-size: 0.96rem;
		color: #ffffff;
	}

	/* Progressive-enhancement copy buttons for plain <pre> blocks */
	:global(.docs-content .code-block) {
		position: relative;
		margin: 1.2rem 0;
	}

	:global(.docs-content .code-block pre) {
		overflow-x: auto;
		padding: 1.15rem 1.2rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 1rem;
		background: #0d1117;
		font-size: 0.9rem;
		line-height: 1.65;
	}

	:global(.docs-content .code-block pre code) {
		font-family: var(--ps-font-mono);
		background: transparent;
		padding: 0;
		box-shadow: none;
	}

	:global(.docs-content .copy-btn) {
		position: absolute;
		top: 0.6rem;
		right: 0.6rem;
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.35rem 0.65rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 0.55rem;
		background: rgba(255, 255, 255, 0.06);
		color: #a49fb8;
		font-size: 0.75rem;
		font-weight: 600;
		font-family: var(--ps-font-mono);
		cursor: pointer;
		opacity: 0;
		transition:
			opacity 0.2s ease,
			background 0.2s ease,
			color 0.2s ease;
	}

	:global(.docs-content .code-block:hover .copy-btn) {
		opacity: 1;
	}

	:global(.docs-content .copy-btn:hover) {
		background: rgba(255, 255, 255, 0.12);
		color: #ffffff;
	}

	:global(.docs-content .copy-btn.copied) {
		opacity: 1;
		background: rgba(42, 198, 255, 0.12);
		color: #2ac6ff;
		border-color: rgba(42, 198, 255, 0.25);
	}

	@media (max-width: 960px) {
		.docs-layout {
			grid-template-columns: 1fr;
			width: min(var(--ps-max-width-docs), calc(100% - 1.25rem));
		}

		.sidebar {
			position: static;
			padding: 1rem;
			max-height: none;
		}

		.sidebar-toggle {
			display: flex;
		}

		.sidebar-nav {
			display: none;
			padding-top: 0.5rem;
		}

		.sidebar-nav.open {
			display: block;
		}
	}
</style>
