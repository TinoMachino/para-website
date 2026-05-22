<script lang="ts">
	import { resolve } from '$app/paths';
	import GlobeAnimation from '$lib/components/GlobeAnimation.svelte';
	import { content } from '$lib/content/i18n';

	const chapters = $derived($content.chapters);
	const bottomCta = $derived($content.bottomCta);
	const heroAction = $derived($content.heroSecondaryAction);
</script>

<svelte:head>
	<title>PARA | Civic Product and Docs</title>
	<meta
		name="description"
		content="PARA is a civic social network for plural political identity, policy votes, RAQ flows, and protected participation."
	/>
</svelte:head>

<div class="site-home">
	<section class="hero">
		<div class="container hero-grid">
			<div class="hero-copy">
				<div class="eyebrow">{$content.heroEyebrow}</div>
				<h1 class="hero-title">{$content.heroTitle}</h1>
				<p class="hero-lede">
					{$content.heroLede}
				</p>
				<div class="hero-actions">
					<a class="button button-primary" href={resolve(heroAction.href as any)}>
						{heroAction.label}
					</a>
				</div>
			</div>

			<div class="hero-stage">
				<div class="surface-card stage-card">
					<div class="globe-container">
						<GlobeAnimation lines={38} globeScale={1} textureScale={0.72} />
					</div>
					<div class="glass-orb orb-1"></div>
					<div class="glass-orb orb-2"></div>
				</div>
			</div>
		</div>
	</section>

	{#each chapters as chapter, i (chapter.headline)}
		<section class="chapter" class:chapter-alt={i % 2 === 1}>
			<div class="container chapter-grid">
				<div class="chapter-copy">
					<h2 class="chapter-headline">{chapter.headline}</h2>
					<p class="chapter-body">{chapter.body}</p>
				</div>
			</div>
		</section>
	{/each}

	<section class="bottom-cta">
		<div class="container bottom-cta-inner">
			{#each bottomCta as link (link.href)}
				<a class="button button-secondary" href={resolve(link.href as any)}>{link.label}</a>
			{/each}
		</div>
	</section>
</div>

<style>
	.site-home {
		padding-bottom: 4rem;
	}

	.container {
		width: min(var(--ps-max-width-docs), calc(100% - 2rem));
		margin: 0 auto;
	}

	.hero,
	.chapter,
	.bottom-cta {
		padding-top: 2.5rem;
	}

	.hero-grid,
	.chapter-grid {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: 1.25rem;
		align-items: start;
	}

	.hero-copy {
		grid-column: span 5;
		display: grid;
		gap: 1rem;
		align-content: start;
		padding-top: 1rem;
	}

	.hero-stage {
		grid-column: span 7;
		display: grid;
		gap: 1rem;
	}

	.eyebrow {
		width: fit-content;
		font-family: var(--ps-font-mono);
		font-size: 0.76rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #c8b6ef;
	}

	.hero-title {
		margin: 0;
		font-family: 'PARA Cinzel', var(--ps-font-display), serif;
		font-size: clamp(3rem, 6vw, 5.5rem);
		line-height: 0.94;
		letter-spacing: -0.02em;
		color: #f8fbff;
		max-width: 11ch;
	}

	.hero-lede {
		margin: 0;
		color: #bcc8d9;
		line-height: 1.72;
		max-width: 35rem;
		font-size: 1.12rem;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.85rem;
	}

	.button-primary {
		background: linear-gradient(135deg, #48267f, #474652);
		color: #f6f4fa;
		box-shadow: 0 20px 40px rgba(72, 38, 127, 0.24);
	}

	.button-secondary {
		border: 1px solid rgba(255, 255, 255, 0.12);
		background: rgba(72, 38, 127, 0.12);
		color: #eef5ff;
	}

	.surface-card {
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 1.6rem;
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02)),
			rgba(8, 16, 28, 0.62);
		box-shadow:
			inset 0 1px 0 rgba(255, 255, 255, 0.05),
			0 20px 60px rgba(0, 0, 0, 0.18);
		backdrop-filter: blur(18px);
	}

	.stage-card {
		position: relative;
		overflow: hidden;
		min-height: 34rem;
		padding: 1rem;
		background:
			radial-gradient(circle at top, rgba(72, 38, 127, 0.28), transparent 30%),
			radial-gradient(circle at bottom left, rgba(71, 70, 82, 0.22), transparent 26%),
			linear-gradient(180deg, rgba(12, 23, 40, 0.9), rgba(8, 16, 28, 0.86));
	}

	.globe-container {
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.glass-orb {
		position: absolute;
		border-radius: 999px;
		filter: blur(18px);
		pointer-events: none;
		opacity: 0.45;
	}

	.orb-1 {
		top: 1.75rem;
		right: 1.5rem;
		width: 6.25rem;
		height: 6.25rem;
		background: rgba(99, 102, 241, 0.22);
	}

	.orb-2 {
		bottom: 1.5rem;
		right: 2rem;
		width: 4.5rem;
		height: 4.5rem;
		background: rgba(37, 99, 235, 0.18);
	}

	.globe-container {
		--ps-globe-color: #67c2ff;
		position: absolute;
		inset: 3.75rem 0 0;
		display: flex;
		align-items: center;
		justify-content: center;
		filter: drop-shadow(0 0 70px rgba(72, 38, 127, 0.28));
	}

	:global(.globe-ascii) {
		color: #f2f7ff;
		font-family: var(--ps-font-mono);
		font-weight: 900;
		line-height: 1.08;
		text-shadow: 0 0 18px rgba(72, 38, 127, 0.28);
	}

	.chapter {
		padding-bottom: 2.5rem;
	}

	.chapter-alt {
		background:
			radial-gradient(circle at 80% 50%, rgba(72, 38, 127, 0.08), transparent 50%);
	}

	.chapter-copy {
		grid-column: span 8;
		display: grid;
		gap: 1rem;
		padding: clamp(2rem, 5vw, 4rem) 0;
	}

	.chapter-headline {
		margin: 0;
		font-family: 'PARA Cinzel', var(--ps-font-display), serif;
		font-size: clamp(1.8rem, 3.8vw, 3rem);
		line-height: 1.05;
		letter-spacing: -0.02em;
		color: #f8fbff;
		max-width: 18ch;
	}

	.chapter-body {
		margin: 0;
		color: #bcc8d9;
		line-height: 1.72;
		max-width: 44rem;
		font-size: 1.05rem;
	}

	.bottom-cta {
		padding-bottom: 2.5rem;
	}

	.bottom-cta-inner {
		display: flex;
		flex-wrap: wrap;
		gap: 0.85rem;
		justify-content: center;
	}

	@media (max-width: 1100px) {
		.hero-grid,
		.chapter-grid {
			grid-template-columns: 1fr;
		}

		.hero-copy,
		.hero-stage,
		.chapter-copy {
			grid-column: 1 / -1;
		}

		.hero-stage {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 720px) {
		.container {
			width: min(var(--ps-max-width-docs), calc(100% - 1.25rem));
		}

		.hero-title {
			font-size: clamp(2.6rem, 13vw, 4rem);
		}

		.stage-card {
			min-height: 22rem;
		}

		.globe-container {
			inset: 4rem -1rem 0;
		}
	}
</style>
