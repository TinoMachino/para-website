<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();

	function splitPrefix(title: string) {
		if (title.startsWith('com.para.identity.')) {
			return { prefix: 'com.para.identity.', name: title.slice('com.para.identity.'.length) };
		}
		if (title.startsWith('com.para.social.')) {
			return { prefix: 'com.para.social.', name: title.slice('com.para.social.'.length) };
		}
		if (title.startsWith('com.para.')) {
			return { prefix: 'com.para.', name: title.slice('com.para.'.length) };
		}
		return { prefix: '', name: title };
	}

	function categoryOf(schema: (typeof data.schemas)[0]) {
		const id = schema.id;
		if (id.includes('.identity.')) return 'Identity';
		if (id.endsWith('.defs')) return 'Views';
		if (id.startsWith('com.para.social.')) return 'Metadata overlays';
		if (schema.tags.includes('queries') || id.includes('.get') || id.includes('.list'))
			return 'Queries';
		return 'Records';
	}

	const grouped = $derived(() => {
		const buckets: Record<string, typeof data.schemas> = {};
		const order = ['Records', 'Metadata overlays', 'Views', 'Queries', 'Identity'];
		for (const schema of data.schemas) {
			const cat = categoryOf(schema);
			buckets[cat] ??= [];
			buckets[cat].push(schema);
		}
		return order
			.map((cat) => ({ category: cat, items: buckets[cat] ?? [] }))
			.filter((g) => g.items.length > 0);
	});
</script>

<svelte:head>
	<title>Schemas • PARA Docs</title>
</svelte:head>

<section class="docs-panel schema-intro">
	<div class="docs-prose">
		<p class="intro-kicker">Schemas</p>
		<h1>Schema reference</h1>
		<p>
			Technical shape behind PARA's civic surfaces. These <code>com.para.*</code> lexicons describe records,
			views, queries, and metadata overlays in WhatZatppa and m8.
		</p>
	</div>
</section>

<div class="schema-index">
	{#each grouped() as group (group.category)}
		<section class="schema-group">
			<h2 class="group-heading">{group.category}</h2>
			<div class="schema-list">
				{#each group.items as schema (schema.id)}
					{@const parts = splitPrefix(schema.title)}
					<a class="schema-row" href={resolve(`/docs/schemas/${schema.id}`)}>
						<div class="schema-name">
							<code class="prefix">{parts.prefix}</code>
							<span class="suffix">{parts.name}</span>
						</div>
						<p class="schema-summary">{schema.summary}</p>
						<div class="schema-tags">
							{#each schema.tags as tag (tag)}
								<span class="tag">{tag}</span>
							{/each}
						</div>
					</a>
				{/each}
			</div>
		</section>
	{/each}
</div>

<style>
	.schema-intro {
		margin-bottom: 2rem;
		padding: 1.4rem 1.55rem;
	}

	.intro-kicker {
		margin: 0 0 0.55rem;
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--para-accent-text);
	}

	.schema-index {
		display: grid;
		gap: 2.5rem;
	}

	.schema-group {
		padding: 0;
	}

	.group-heading {
		margin: 0 0 0.6rem;
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #918ba0;
	}

	.schema-list {
		display: grid;
		gap: 0;
	}

	.schema-row {
		display: grid;
		gap: 0.35rem;
		padding: 1rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.07);
		color: inherit;
		text-decoration: none;
		transition: background 0.15s ease;
	}

	.schema-row:first-child {
		border-top: 1px solid rgba(255, 255, 255, 0.07);
	}

	.schema-row:hover {
		background: rgba(255, 255, 255, 0.025);
		margin: 0 -0.85rem;
		padding-left: 0.85rem;
		padding-right: 0.85rem;
		border-radius: 0.6rem;
		border-color: transparent;
	}

	.schema-row:hover + .schema-row {
		border-top-color: transparent;
	}

	.schema-name {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0;
		font-family: var(--ps-font-mono);
		font-size: 1.05rem;
		font-weight: 600;
		line-height: 1.4;
	}

	.prefix {
		color: #6b6580;
		font-size: 0.9em;
		background: none;
		padding: 0;
	}

	.suffix {
		color: #ffffff;
	}

	.schema-summary {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.65;
		color: #b0a8c4;
		max-width: 52rem;
	}

	.schema-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin-top: 0.15rem;
	}

	.tag {
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: #7a7391;
	}

	.tag::before {
		content: '•';
		margin-right: 0.35rem;
		color: #4a4560;
	}

	.tag:first-child::before {
		content: none;
	}

	@media (max-width: 600px) {
		.schema-name {
			font-size: 0.92rem;
		}
	}
</style>
