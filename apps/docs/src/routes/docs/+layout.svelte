<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import StatusPill from '$lib/components/StatusPill.svelte';
	import { openSourceRepos } from '$lib/content/site';

	let { children, data } = $props();

	function isSectionActive(href: string) {
		if (href === '/docs') {
			return page.url.pathname === href;
		}
		return page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);
	}
</script>

<div class="docs-shell">
	<div class="docs-layout">
		<aside class="docs-panel sidebar">
			<div class="sidebar-block sidebar-start">
				<p class="sidebar-kicker">Docs</p>
				<a class="brand" href={resolve('/docs')}>PARA Docs</a>
				<p class="sidebar-copy">
					Product context first, protocol detail nearby, and clear exits into trust, app access, and
					the open repos.
				</p>
				<div class="sidebar-shortcuts">
					<a href={resolve('/docs')}>Guide</a>
					<a href={resolve('/docs/schemas')}>Schemas</a>
					<a href={resolve('/try-app')}>Try app</a>
				</div>
			</div>

			<div class="sidebar-block sidebar-highlight">
				<p class="sidebar-title">Recommended path</p>
				<div class="highlight-card">
					<strong>Start with the guide, then branch.</strong>
					<p>
						Read the docs overview, jump into product flows, and open schema reference only when you
						want contract detail.
					</p>
				</div>
			</div>

			<nav class="sidebar-block">
				<p class="sidebar-title">Core docs</p>
				<div class="nav-list">
					{#each data.primaryNav as item (item.href)}
						<a class:active={isSectionActive(item.href)} href={resolve(item.href)}>
							{item.label}
						</a>
					{/each}
				</div>
			</nav>

			<div class="sidebar-block">
				<p class="sidebar-title">Cross-site paths</p>
				<div class="nav-list compact">
					{#each data.readerNav as item (item.href)}
						<a class:active={page.url.pathname === item.href} href={resolve(item.href)}>
							{item.label}
						</a>
					{/each}
				</div>
			</div>

			<div class="sidebar-block">
				<p class="sidebar-title">Route families</p>
				<div class="nav-list compact">
					{#each data.flowNav as item (item.href)}
						<a class:active={isSectionActive(item.href)} href={resolve(item.href)}>
							{item.label}
						</a>
					{/each}
				</div>
			</div>

			<div class="sidebar-block">
				<p class="sidebar-title">Schemas</p>
				<div class="nav-list compact schema-list">
					{#each data.schemaIndex as schema (schema.id)}
						<a
							class:active={page.url.pathname === `/docs/schemas/${schema.id}`}
							href={resolve(`/docs/schemas/${schema.id}`)}
						>
							{schema.title}
						</a>
					{/each}
				</div>
			</div>

			<div class="sidebar-block architecture-notes">
				<p class="sidebar-title">Implementation notes</p>
				{#each data.architectureNotes as note (note.id)}
					<div class="note-row">
						<div>
							<strong>{note.title}</strong>
							<p>{note.summary}</p>
						</div>
						<StatusPill status={note.status} />
					</div>
				{/each}
			</div>

			<div class="sidebar-block">
				<p class="sidebar-title">Open source repos</p>
				<div class="nav-list compact">
					{#each openSourceRepos as repo (repo.href)}
						<a href={repo.href} target="_blank" rel="noreferrer">{repo.label}</a>
					{/each}
				</div>
			</div>
		</aside>

		<main class="docs-panel docs-content">
			<div class="docs-prose">
				{@render children()}
			</div>
		</main>
	</div>
</div>

<style>
	.sidebar {
		padding: 1.55rem;
		position: sticky;
		top: 5.4rem;
		align-self: start;
	}

	.sidebar-start {
		display: grid;
		gap: 0.9rem;
	}

	.sidebar-block + .sidebar-block {
		margin-top: 1.45rem;
		padding-top: 1.2rem;
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
		font-family: var(--ps-font-display);
		font-size: 1.85rem;
		letter-spacing: -0.03em;
		color: #ffffff;
	}

	.sidebar-copy,
	.note-row p {
		margin: 0.55rem 0 0;
		color: #c6c0d2;
		line-height: 1.72;
	}

	.sidebar-shortcuts {
		display: flex;
		flex-wrap: wrap;
		gap: 0.55rem;
	}

	.sidebar-shortcuts a {
		padding: 0.5rem 0.75rem;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(255, 255, 255, 0.09);
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: #f0f6ff;
	}

	.sidebar-shortcuts a:hover {
		background: rgba(255, 255, 255, 0.1);
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
		gap: 0.45rem;
	}

	.highlight-card {
		display: grid;
		gap: 0.45rem;
		padding: 1rem;
		border-radius: 1rem;
		background:
			radial-gradient(circle at top right, rgba(127, 214, 255, 0.16), transparent 35%),
			rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.09);
	}

	.highlight-card strong,
	.highlight-card p {
		margin: 0;
	}

	.highlight-card strong {
		color: #ffffff;
	}

	.highlight-card p {
		color: #d4ddeb;
		line-height: 1.7;
	}

	.nav-list a {
		padding: 0.7rem 0.8rem;
		border-radius: 0.9rem;
		font-weight: 600;
		color: #d6d0df;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid transparent;
	}

	.nav-list a.active,
	.nav-list a:hover {
		background: rgba(255, 255, 255, 0.08);
		border-color: var(--para-primary-300);
		color: #ffffff;
	}

	.compact a {
		font-size: 0.92rem;
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
		gap: 0.6rem;
		padding: 0.95rem;
		border-radius: 1rem;
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03)),
			rgba(255, 255, 255, 0.025);
		border: 1px solid rgba(255, 255, 255, 0.08);
	}

	.note-row strong {
		font-size: 0.96rem;
		color: #ffffff;
	}

	@media (max-width: 960px) {
		.sidebar {
			position: static;
		}
	}
</style>
