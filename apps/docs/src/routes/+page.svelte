<script lang="ts">
	import { resolve } from '$app/paths';
	import GlobeAnimation from '$lib/components/GlobeAnimation.svelte';
	import {
		architectureLayers,
		architectureNotes,
		developerPromises,
		docsBase,
		landingFeatures,
		landingHeroActions,
		landingHeroMetrics,
		landingPillars,
		openSourceRepos,
		surfaceChecklist
	} from '$lib/content/site';

	const experienceHighlights = [
		{
			eyebrow: 'Structured speech',
			title: 'Flairs make politics legible',
			copy: 'Policies and matters stop dissolving into generic posting and become comparable civic objects.'
		},
		{
			eyebrow: 'Guided positioning',
			title: 'RAQ gives disagreement a shape',
			copy: 'Users can locate themselves, refine their stance, and contribute structured political context.'
		},
		{
			eyebrow: 'Protected participation',
			title: 'Trust is a product surface',
			copy: 'Anonymity, validation, and moderation are treated like infrastructure, not an afterthought.'
		}
	] as const;
</script>

<svelte:head>
	<title>PARA | Civic Product and Docs</title>
	<meta
		name="description"
		content="PARA is a civic social network for plural political identity, policy votes, RAQ flows, collective agents, and protected participation."
	/>
</svelte:head>

<div class="site-home">
	<section class="hero">
		<div class="container hero-grid">
			<div class="hero-copy">
				<div class="eyebrow">PARA • civic social network</div>
				<h1 class="hero-title">
					A political network for people who refuse the party package deal.
				</h1>
				<p class="hero-lede">
					PARA turns plural identity, policy votes, RAQ flows, collective agents, and protected
					participation into a civic product people can actually use.
				</p>
				<div class="hero-actions">
					<a class="button button-primary" href={resolve(docsBase)}>Browse docs</a>
					<a class="button button-secondary" href={resolve('/try-app')}>Try the app</a>
				</div>
				<p class="hero-note">
					Read it product-first or protocol-first. The public site now ties the thesis, the visible
					app surface, and the schema reference into one path.
				</p>
				<div class="metric-grid">
					{#each landingHeroMetrics as metric (metric.label)}
						<article class="metric-card">
							<p class="metric-value">{metric.value}</p>
							<p class="metric-label">{metric.label}</p>
						</article>
					{/each}
				</div>
			</div>

			<div class="hero-stage">
				<div class="stage-panel stage-globe-panel">
					<div class="stage-pill-row">
						<span>#POLICY||</span>
						<span>RAQ</span>
						<span>Agents</span>
						<span>Anonymity</span>
					</div>
					<div class="globe-wrap">
						<GlobeAnimation lines={35} textureScale={0.86} />
					</div>
				</div>
				<div class="stage-stack">
					{#each experienceHighlights as highlight (highlight.title)}
						<article class="stage-panel stage-note">
							<p class="stage-note-eyebrow">{highlight.eyebrow}</p>
							<h2>{highlight.title}</h2>
							<p>{highlight.copy}</p>
						</article>
					{/each}
				</div>
			</div>
		</div>

		<div class="container quick-link-grid">
			{#each landingHeroActions as action (action.title)}
				<a class="quick-link-card" href={resolve(action.href)}>
					<p class="quick-link-eyebrow">{action.eyebrow}</p>
					<h2>{action.title}</h2>
					<p>{action.copy}</p>
					<span class="quick-link-cta">Open path</span>
				</a>
			{/each}
		</div>
	</section>

	<section class="story-section">
		<div class="container story-intro">
			<div class="section-copy-block">
				<div class="eyebrow">Why PARA exists</div>
				<h2 class="section-title">
					The website should explain the democratic problem before it asks people to learn the
					stack.
				</h2>
				<p class="section-copy">
					PARA starts from democratic frustration in Mexico, but the product argument is broader:
					people need a civic layer where disagreement, political identity, and policy preference
					are more expressive than party labels and more actionable than generic feeds.
				</p>
			</div>

			<aside class="story-card">
				<p class="story-card-eyebrow">What the homepage covers</p>
				<ul class="story-checklist">
					{#each surfaceChecklist as item (item)}
						<li>{item}</li>
					{/each}
				</ul>
			</aside>
		</div>

		<div class="container pillar-grid">
			{#each landingPillars as pillar (pillar.title)}
				<article class="home-card pillar-card">
					<h3>{pillar.title}</h3>
					<p>{pillar.copy}</p>
				</article>
			{/each}
		</div>
	</section>

	<section class="feature-section" id="features">
		<div class="container feature-section-head">
			<div class="section-copy-block">
				<div class="eyebrow">Product map</div>
				<h2 class="section-title">The civic mechanics are visible now, not buried behind docs.</h2>
				<p class="section-copy">
					Each feature card ties a user-facing behavior to the friction it reduces, so the site
					feels closer to the actual product and less like a generic social platform pitch.
				</p>
			</div>

			<aside class="home-card promise-card">
				<p class="story-card-eyebrow">For builders</p>
				<ul class="promise-list">
					{#each developerPromises as promise (promise)}
						<li>{promise}</li>
					{/each}
				</ul>
			</aside>
		</div>

		<div class="container feature-grid">
			{#each landingFeatures as feature (feature.title)}
				<article class="home-card feature-card">
					<p class="feature-eyebrow">{feature.eyebrow}</p>
					<h3>{feature.title}</h3>
					<div class="feature-problem">
						<span>Reduces</span>
						<p>{feature.problem}</p>
					</div>
					<p class="feature-copy">{feature.copy}</p>
					<ul class="feature-points">
						{#each feature.points as point (point)}
							<li>{point}</li>
						{/each}
					</ul>
					<a class="feature-link" href={resolve(feature.href)}>{feature.cta}</a>
				</article>
			{/each}
		</div>
	</section>

	<section class="architecture-section">
		<div class="container architecture-grid">
			<div class="section-copy-block architecture-copy">
				<div class="eyebrow">From product to protocol</div>
				<h2 class="section-title">
					The site now reads like one system instead of a landing page taped onto a reference
					browser.
				</h2>
				<p class="section-copy">
					PARA should make sense in both directions. Someone learning the product should find the
					thesis, surfaces, and trust model fast. Someone evaluating the stack should be able to
					jump straight into contracts, services, and schema docs without losing the product
					context.
				</p>
				<a
					class="button button-secondary architecture-button"
					href={resolve(`${docsBase}/schemas`)}
				>
					Browse schema reference
				</a>
			</div>

			<div class="architecture-stack">
				{#each architectureLayers as layer (layer.title)}
					<article class="home-card architecture-card">
						<p class="architecture-eyebrow">{layer.eyebrow}</p>
						<h3>{layer.title}</h3>
						<p>{layer.copy}</p>
					</article>
				{/each}
			</div>
		</div>

		<div class="container architecture-notes">
			{#each architectureNotes as note (note)}
				<article class="home-card note-card">
					<p>{note}</p>
				</article>
			{/each}
		</div>
	</section>

	<section class="repo-section">
		<div class="container repo-section-head">
			<div class="section-copy-block">
				<div class="eyebrow">Open work</div>
				<h2 class="section-title">The website now points clearly to the real work behind it.</h2>
				<p class="section-copy">
					Product framing, code, and backend contracts all stay visible from the homepage, so people
					can move from narrative to implementation without hitting a dead end.
				</p>
			</div>
		</div>

		<div class="container repo-grid">
			{#each openSourceRepos as repo (repo.href)}
				<a class="home-card repo-card" href={repo.href} rel="noreferrer" target="_blank">
					<p class="repo-label">{repo.label}</p>
					<h3>{repo.copy}</h3>
					<span class="repo-link">View repository</span>
				</a>
			{/each}
		</div>

		<div class="container final-cta">
			<div>
				<div class="eyebrow">Next step</div>
				<h2 class="section-title">
					Start with the docs, then move straight into trust, product, or app access.
				</h2>
			</div>
			<div class="final-cta-actions">
				<a class="button button-primary" href={resolve(docsBase)}>Read the docs</a>
				<a class="button button-secondary" href={resolve('/about')}>Read the thesis</a>
			</div>
		</div>
	</section>
</div>

<style>
	.site-home {
		padding-bottom: 4.5rem;
	}

	.container {
		width: min(var(--ps-max-width-docs), calc(100% - 2rem));
		margin: 0 auto;
	}

	.hero,
	.story-section,
	.feature-section,
	.architecture-section,
	.repo-section {
		padding-top: 2.5rem;
	}

	.hero-grid,
	.story-intro,
	.feature-section-head,
	.architecture-grid,
	.final-cta {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: 1.25rem;
	}

	.hero-copy,
	.section-copy-block,
	.architecture-copy {
		display: grid;
		align-content: start;
		gap: 1rem;
	}

	.hero-copy {
		grid-column: span 5;
		padding: 2.25rem 0 0.5rem;
	}

	.hero-stage {
		grid-column: span 7;
		display: grid;
		grid-template-columns: minmax(0, 1.3fr) minmax(15rem, 0.85fr);
		gap: 1rem;
		align-items: stretch;
	}

	.eyebrow {
		width: fit-content;
		font-family: var(--ps-font-mono);
		font-weight: 700;
		letter-spacing: 0.08em;
	}

	.hero-title,
	.section-title,
	.quick-link-card h2,
	.feature-card h3,
	.pillar-card h3,
	.architecture-card h3,
	.repo-card h3,
	.stage-note h2 {
		margin: 0;
		font-family: var(--ps-font-display);
		letter-spacing: -0.04em;
		color: #f8fbff;
	}

	.hero-title {
		font-size: clamp(3.1rem, 6vw, 6rem);
		line-height: 0.94;
		max-width: 11ch;
	}

	.hero-lede,
	.section-copy,
	.quick-link-card p,
	.metric-label,
	.feature-copy,
	.feature-points li,
	.pillar-card p,
	.architecture-card p,
	.note-card p,
	.repo-card .repo-link,
	.stage-note p,
	.story-checklist li,
	.promise-list li,
	.hero-note {
		margin: 0;
		color: #b8c6d8;
		line-height: 1.72;
	}

	.hero-lede {
		max-width: 36rem;
		font-size: 1.14rem;
	}

	.hero-actions,
	.final-cta-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.85rem;
	}

	.button-primary {
		background: linear-gradient(135deg, #f1eee6, #ffbd70);
		color: #142033;
		box-shadow: 0 20px 40px rgba(255, 182, 93, 0.18);
	}

	.button-secondary {
		border: 1px solid rgba(255, 255, 255, 0.12);
		background: rgba(255, 255, 255, 0.04);
		color: #eef5ff;
	}

	.hero-note {
		max-width: 38rem;
		font-size: 0.97rem;
	}

	.metric-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.9rem;
		padding-top: 0.5rem;
	}

	.metric-card,
	.home-card,
	.quick-link-card,
	.stage-panel {
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 1.5rem;
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02)),
			rgba(8, 16, 28, 0.62);
		box-shadow:
			inset 0 1px 0 rgba(255, 255, 255, 0.05),
			0 20px 60px rgba(0, 0, 0, 0.18);
		backdrop-filter: blur(18px);
	}

	.metric-card {
		padding: 1rem 1.05rem;
	}

	.metric-value {
		margin: 0;
		font-family: var(--ps-font-display);
		font-size: clamp(1.7rem, 3.2vw, 2.35rem);
		line-height: 0.94;
		letter-spacing: -0.04em;
		color: #f8fbff;
	}

	.metric-label {
		padding-top: 0.35rem;
		font-family: var(--ps-font-mono);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.stage-globe-panel {
		position: relative;
		overflow: hidden;
		padding: 1rem;
		min-height: 36rem;
		background:
			radial-gradient(circle at top, rgba(103, 194, 255, 0.2), transparent 30%),
			radial-gradient(circle at bottom left, rgba(255, 182, 93, 0.16), transparent 26%),
			linear-gradient(180deg, rgba(12, 23, 40, 0.9), rgba(8, 16, 28, 0.86));
	}

	.stage-pill-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		position: relative;
		z-index: 1;
	}

	.stage-pill-row span {
		padding: 0.45rem 0.75rem;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.08);
		font-family: var(--ps-font-mono);
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #dfe8f5;
	}

	.globe-wrap {
		--ps-globe-color: #67c2ff;
		position: absolute;
		inset: 4rem 0 0;
		display: flex;
		align-items: center;
		justify-content: center;
		filter: drop-shadow(0 0 70px rgba(103, 194, 255, 0.2));
	}

	:global(.globe-ascii) {
		color: #f2f7ff;
		font-family: var(--ps-font-mono);
		font-weight: 900;
		line-height: 1.08;
		text-shadow: 0 0 18px rgba(103, 194, 255, 0.18);
	}

	.stage-stack {
		display: grid;
		gap: 1rem;
	}

	.stage-note {
		padding: 1.1rem 1.15rem;
		align-content: start;
	}

	.stage-note-eyebrow,
	.quick-link-eyebrow,
	.feature-eyebrow,
	.story-card-eyebrow,
	.architecture-eyebrow,
	.repo-label {
		margin: 0;
		font-family: var(--ps-font-mono);
		font-size: 0.74rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #88d7cb;
	}

	.stage-note h2 {
		font-size: 1.45rem;
		line-height: 0.98;
		padding: 0.1rem 0 0.35rem;
	}

	.quick-link-grid,
	.pillar-grid,
	.feature-grid,
	.architecture-notes,
	.repo-grid {
		display: grid;
		gap: 1rem;
		margin-top: 1.25rem;
	}

	.quick-link-grid {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.quick-link-card,
	.repo-card {
		display: grid;
		gap: 0.7rem;
		padding: 1.25rem;
		transition:
			transform 0.18s ease,
			border-color 0.18s ease;
	}

	.quick-link-card:hover,
	.repo-card:hover,
	.feature-card:hover {
		transform: translateY(-2px);
		border-color: rgba(255, 255, 255, 0.18);
	}

	.quick-link-card h2,
	.repo-card h3 {
		font-size: 1.75rem;
		line-height: 0.98;
	}

	.quick-link-cta,
	.feature-link,
	.repo-link {
		font-weight: 700;
		color: #f6fbff;
	}

	.story-intro {
		align-items: start;
	}

	.section-copy-block {
		grid-column: span 7;
	}

	.story-card,
	.promise-card {
		grid-column: span 5;
		padding: 1.3rem;
	}

	.story-checklist,
	.promise-list,
	.feature-points {
		display: grid;
		gap: 0.7rem;
		margin: 0;
		padding-left: 1rem;
	}

	.pillar-grid {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.home-card {
		padding: 1.35rem;
	}

	.pillar-card h3,
	.architecture-card h3,
	.feature-card h3 {
		font-size: 1.6rem;
		line-height: 0.98;
	}

	.pillar-card p {
		padding-top: 0.5rem;
	}

	.feature-section-head {
		align-items: start;
	}

	.feature-grid {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.feature-card {
		display: grid;
		align-content: start;
		gap: 0.95rem;
		transition:
			transform 0.18s ease,
			border-color 0.18s ease;
	}

	.feature-problem {
		display: grid;
		gap: 0.3rem;
		padding: 0.9rem 0.95rem;
		border-radius: 1rem;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.08);
	}

	.feature-problem span {
		font-family: var(--ps-font-mono);
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #67c2ff;
	}

	.feature-problem p {
		margin: 0;
		color: #eef5ff;
		line-height: 1.58;
	}

	.architecture-copy {
		grid-column: span 5;
	}

	.architecture-stack {
		grid-column: span 7;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
	}

	.architecture-button {
		width: fit-content;
		margin-top: 0.3rem;
	}

	.architecture-notes,
	.repo-grid {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.note-card p {
		color: #d8e2f1;
	}

	.repo-card {
		min-height: 14rem;
		align-content: start;
	}

	.repo-label {
		color: #ffbd70;
	}

	.repo-link {
		padding-top: 0.35rem;
	}

	.final-cta {
		margin-top: 1.25rem;
		padding: 1.5rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 1.75rem;
		background:
			radial-gradient(circle at left top, rgba(255, 182, 93, 0.14), transparent 24%),
			radial-gradient(circle at right bottom, rgba(103, 194, 255, 0.12), transparent 26%),
			rgba(9, 16, 28, 0.72);
		align-items: center;
	}

	.final-cta > :first-child {
		grid-column: span 8;
		display: grid;
		gap: 0.8rem;
	}

	.final-cta-actions {
		grid-column: span 4;
		justify-content: flex-end;
	}

	@media (max-width: 1100px) {
		.hero-grid,
		.story-intro,
		.feature-section-head,
		.architecture-grid,
		.final-cta,
		.quick-link-grid,
		.pillar-grid,
		.feature-grid,
		.architecture-notes,
		.repo-grid {
			grid-template-columns: 1fr;
		}

		.hero-copy,
		.hero-stage,
		.section-copy-block,
		.story-card,
		.promise-card,
		.architecture-copy,
		.architecture-stack,
		.final-cta > :first-child,
		.final-cta-actions {
			grid-column: 1 / -1;
		}

		.hero-stage {
			grid-template-columns: 1fr;
		}

		.architecture-stack {
			grid-template-columns: 1fr;
		}

		.final-cta-actions {
			justify-content: flex-start;
		}
	}

	@media (max-width: 720px) {
		.container {
			width: min(var(--ps-max-width-docs), calc(100% - 1.25rem));
		}

		.site-home {
			padding-bottom: 3rem;
		}

		.hero-title {
			font-size: clamp(2.65rem, 13vw, 4rem);
		}

		.metric-grid {
			grid-template-columns: 1fr;
		}

		.stage-globe-panel {
			min-height: 28rem;
		}

		.globe-wrap {
			inset: 4.5rem -1rem 0;
		}
	}
</style>
