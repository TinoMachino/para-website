<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { goto } from '$app/navigation';
	import { initSearch, search, type SearchResult } from '$lib/search';

	let open = $state(false);
	let query = $state('');
	let results = $state<SearchResult[]>([]);
	let selectedIndex = $state(0);
	let inputRef = $state<HTMLInputElement | null>(null);
	let modifierKey = $state('⌘');

	$effect(() => {
		if (open) {
			initSearch();
			tick().then(() => inputRef?.focus());
		}
	});

	$effect(() => {
		results = query.trim() ? search(query, 8) : [];
		selectedIndex = 0;
	});

	onMount(() => {
		modifierKey = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl';

		function onKeyDown(e: KeyboardEvent) {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				open = !open;
			}
			if (e.key === 'Escape' && open) {
				open = false;
			}
		}

		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	});

	function navigate(url: string) {
		open = false;
		query = '';
		goto(url as any);
	}

	function onKeyDown(e: KeyboardEvent) {
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			selectedIndex = (selectedIndex + 1) % results.length;
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			selectedIndex = (selectedIndex - 1 + results.length) % results.length;
		} else if (e.key === 'Enter') {
			const selected = results[selectedIndex];
			if (selected) {
				e.preventDefault();
				navigate(selected.url);
			}
		}
	}

	function highlight(text: string, q: string) {
		if (!q.trim()) return text;
		const parts = text.split(new RegExp(`(${escapeRegExp(q)})`, 'gi'));
		return parts
			.map((part, i) =>
				part.toLowerCase() === q.toLowerCase()
					? `<mark>${part}</mark>`
					: part
			)
			.join('');
	}

	function escapeRegExp(s: string) {
		return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}
</script>

<!-- Search button -->
<button
	type="button"
	class="search-button"
	onclick={() => (open = true)}
	aria-label="Search"
>
	<svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
		<path
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
		/>
	</svg>
	<span class="search-label">Search</span>
	<kbd class="search-kbd">{modifierKey} K</kbd>
</button>

<!-- Mobile search icon button -->
<button
	type="button"
	class="search-mobile"
	onclick={() => (open = true)}
	aria-label="Search"
>
	<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
		<path
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
		/>
	</svg>
</button>

{#if open}
	<div class="search-overlay" role="presentation" onclick={(e) => { if (e.target === e.currentTarget) open = false; }}>
		<div class="search-dialog" role="dialog" aria-modal="true">
			<div class="search-input-wrap">
				<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
					/>
				</svg>
				<input
					bind:this={inputRef}
					type="search"
					class="search-input"
					placeholder="Find something..."
					bind:value={query}
					onkeydown={onKeyDown}
				/>
				{#if query}
					<button type="button" class="search-clear" aria-label="Clear search" onclick={() => { query = ''; inputRef?.focus(); }}>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</button>
				{/if}
			</div>

			<div class="search-results">
				{#if query.trim() && results.length === 0}
					<div class="search-empty">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12.01 12a4.237 4.237 0 0 0 1.24-3c0-.62-.132-1.207-.37-1.738M12.01 12A4.237 4.237 0 0 1 9 13.25c-.635 0-1.237-.14-1.777-.388M12.01 12l3.24 3.25m-3.715-9.661a4.25 4.25 0 0 0-5.975 5.908M4.5 15.5l11-11"
							/>
						</svg>
						<p>Nothing found for <strong>{query}</strong>. Try again.</p>
					</div>
				{:else if results.length > 0}
					<ul class="search-list">
						{#each results as result, i (result.url)}
							<li>
								<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
								<a
									href={result.url}
									class="search-result"
									class:selected={i === selectedIndex}
									onmouseenter={() => (selectedIndex = i)}
									onclick={(e) => { e.preventDefault(); navigate(result.url); }}
								>
									<div class="search-result-title">
										{@html highlight(result.title, query)}
										{#if result.isBlog}
											<span class="search-badge">Blog</span>
										{/if}
									</div>
									{#if result.pageTitle && result.pageTitle !== result.title}
										<div class="search-result-path">
											{@html highlight(result.pageTitle, query)}
										</div>
									{/if}
									{#if result.description}
										<div class="search-result-desc">
											{@html highlight(result.description, query)}
										</div>
									{/if}
								</a>
							</li>
						{/each}
					</ul>
				{:else}
					<div class="search-hint">
						<p>Type to search docs, blog posts, and pages.</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.search-button {
		display: none;
		align-items: center;
		gap: 0.5rem;
		padding: 0.35rem 0.7rem;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(255, 255, 255, 0.04);
		color: #9ba9c1;
		font-size: 0.85rem;
		font-weight: 500;
		cursor: pointer;
		transition: background 0.2s ease, color 0.2s ease;
	}

	.search-button:hover {
		background: rgba(255, 255, 255, 0.08);
		color: #ffffff;
	}

	.search-label {
		display: none;
	}

	.search-kbd {
		display: none;
		font-family: inherit;
		font-size: 0.7rem;
		padding: 0.15rem 0.4rem;
		border-radius: 0.3rem;
		background: rgba(255, 255, 255, 0.08);
		color: #7a8aa8;
	}

	.search-mobile {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border-radius: 0.5rem;
		border: none;
		background: transparent;
		color: #bac7db;
		cursor: pointer;
		transition: background 0.2s ease, color 0.2s ease;
	}

	.search-mobile:hover {
		background: rgba(255, 255, 255, 0.07);
		color: #ffffff;
	}

	@media (min-width: 768px) {
		.search-button {
			display: inline-flex;
		}
		.search-mobile {
			display: none;
		}
		.search-label {
			display: inline;
		}
		.search-kbd {
			display: inline;
		}
	}

	.search-overlay {
		position: fixed;
		inset: 0;
		z-index: 100;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		padding: 1rem;
		padding-top: 15vh;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(4px);
	}

	.search-dialog {
		width: 100%;
		max-width: 36rem;
		background: #0f1724;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 1rem;
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
		overflow: hidden;
	}

	.search-input-wrap {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 1rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
		color: #7a8aa8;
	}

	.search-input {
		flex: 1;
		background: transparent;
		border: none;
		outline: none;
		color: #ffffff;
		font-size: 1rem;
		padding: 0.25rem 0;
	}

	.search-input::placeholder {
		color: #5a6a88;
	}

	.search-clear {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.25rem;
		border-radius: 0.35rem;
		border: none;
		background: transparent;
		color: #7a8aa8;
		cursor: pointer;
	}

	.search-clear:hover {
		background: rgba(255, 255, 255, 0.08);
		color: #ffffff;
	}

	.search-results {
		max-height: 24rem;
		overflow-y: auto;
	}

	.search-list {
		list-style: none;
		margin: 0;
		padding: 0.5rem 0;
	}

	.search-result {
		display: block;
		padding: 0.65rem 1rem;
		margin: 0 0.5rem;
		border-radius: 0.5rem;
		color: inherit;
		text-decoration: none;
		cursor: pointer;
		transition: background 0.15s ease;
	}

	.search-result:hover,
	.search-result.selected {
		background: rgba(255, 255, 255, 0.06);
	}

	.search-result-title {
		font-size: 0.92rem;
		font-weight: 600;
		color: #e2e8f0;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.search-result-title :global(mark) {
		background: transparent;
		color: #2ac6ff;
		text-decoration: underline;
		text-decoration-color: #2ac6ff;
		text-underline-offset: 2px;
		padding: 0;
	}

	.search-result-path {
		font-size: 0.78rem;
		color: #7a8aa8;
		margin-top: 0.15rem;
	}

	.search-result-desc {
		font-size: 0.8rem;
		color: #5a6a88;
		margin-top: 0.25rem;
		line-height: 1.4;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.search-badge {
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		padding: 0.15rem 0.4rem;
		border-radius: 0.25rem;
		background: rgba(255, 255, 255, 0.08);
		color: #9ba9c1;
	}

	.search-empty,
	.search-hint {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		padding: 2rem;
		color: #7a8aa8;
		text-align: center;
	}

	.search-empty strong {
		color: #e2e8f0;
	}

	.search-empty svg {
		stroke: #5a6a88;
	}
</style>
