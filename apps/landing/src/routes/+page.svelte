<script lang="ts">
	import { resolve } from '$app/paths';
	import GlobeAnimation from '$lib/components/GlobeAnimation.svelte';
	import {
		aboutBase,
		docsBase,
		developerPromises,
		heroPrimaryAction,
		heroSecondaryAction,
		landingFeatures,
		landingPillars,
		landingSignals,
		openSourceRepos
	} from '$lib/content/site';
</script>

<svelte:head>
	<title>PARA | Civic Product and Docs</title>
	<meta
		name="description"
		content="PARA is a political social network for democratic friction reduction, plural identity, policy flairs, RAQ, voting, agents, anonymity, and Bluesky-based civic infrastructure."
	/>
</svelte:head>

<div class="landing-shell dark-theme">
	<div class="ambient-glow bg-blur"></div>
	<div class="ambient-glow bg-blur2"></div>
	<div class="ambient-glow bg-blur3"></div>

	<section class="hero">
		<div class="container hero-grid">
			<div class="hero-copy">
				<div class="eyebrow fade-in">
					<span class="eyebrow-dot"></span> PARA OS
				</div>
				<h1 class="section-title slide-up">
					The network for
					<span class="gradient-text">plural democracy.</span>
				</h1>
				<p class="section-copy hero-text fade-in-delay">
					Move beyond generic feeds and partisan packages. PARA turns political identity, policies, voting, and agents into a unified civic layer.
				</p>
				<div class="cta-row fade-in-delay-2">
					<a class="button button-primary" href={resolve(heroPrimaryAction.href)}>
						{heroPrimaryAction.label}
					</a>
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a class="button button-secondary" href={heroSecondaryAction.href} rel="external">
						{heroSecondaryAction.label}
					</a>
				</div>
				<div class="signal-grid fade-in-delay-3">
					{#each landingSignals as signal (signal.label)}
						<article class="signal-card hover-lift">
							<p class="signal-value">{signal.value}</p>
							<h2>{signal.label}</h2>
							<p>{signal.copy}</p>
						</article>
					{/each}
				</div>
			</div>

			<div class="hero-panel glass-card slide-left">
				<div class="globe-container">
					<GlobeAnimation lines={36} globeScale={0.88} textureScale={0.72} />
				</div>
				<div class="glass-orb orb-1"></div>
				<div class="glass-orb orb-2"></div>
			</div>
		</div>
	</section>

	<section class="company-thesis">
		<div class="container section-stack">
			<div class="eyebrow">The Vision</div>
			<h2 class="section-title">
				A civic layer for serious democratic action.
			</h2>
			<div class="card-grid pillar-grid">
				{#each landingPillars as pillar (pillar.title)}
					<article class="glass-card pillar-card hover-lift">
						<h3>{pillar.title}</h3>
						<p>{pillar.copy}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section class="feature-map" id="features">
		<div class="container section-stack">
			<div class="eyebrow">Mechanics</div>
			<h2 class="section-title">
				Everything you need to locate, refine, and act.
			</h2>
			<div class="feature-grid">
				{#each landingFeatures as feature (feature.title)}
					<article class="glass-card feature-card hover-lift">
						<p class="feature-eyebrow">{feature.eyebrow}</p>
						<h3>{feature.title}</h3>
						<p>{feature.copy}</p>
						<ul class="feature-points">
							{#each feature.points as point (point)}
								<li><span class="bullet"></span>{point}</li>
							{/each}
						</ul>
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
						<a class="feature-link" href={feature.href} rel="external">{feature.cta} &rarr;</a>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section class="developers" id="join">
		<div class="container developer-grid">
			<div class="glass-card developer-card hover-lift">
				<div class="eyebrow">Developers</div>
				<h2>Build on civic infra.</h2>
				<ul class="developer-list">
					{#each developerPromises as promise (promise)}
						<li>{promise}</li>
					{/each}
				</ul>
			</div>
			<div class="glass-card developer-card accent-card hover-lift">
				<p class="panel-label">Start building</p>
				<h3>Deep dive into schemas and roadmaps.</h3>
				<p>
					Understand the data structures powering the PARA civic layer and start building agents and clients.
				</p>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a class="button button-primary" href={`${docsBase}/schemas`} rel="external">
					Browse Schemas
				</a>
			</div>
		</div>
	</section>

	<footer class="footer">
		<div class="container footer-row">
			<div>
				<p class="footer-mark gradient-text">PARA</p>
				<p class="footer-copy">
					One same-origin path into product framing, roadmap, and schema docs.
				</p>
				<div class="repo-links">
					{#each openSourceRepos as repo (repo.href)}
						<a href={repo.href} class="hover-link" target="_blank" rel="noreferrer">
							{repo.label}
						</a>
					{/each}
				</div>
			</div>
			<div class="footer-links">
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href={docsBase} class="hover-link" rel="external">Docs</a>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href={aboutBase} class="hover-link" rel="external">About</a>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href={`${docsBase}/schemas`} class="hover-link" rel="external">Schemas</a>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href={`${docsBase}/roadmap`} class="hover-link" rel="external">Roadmap</a>
			</div>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		background-color: #05020a;
		color: #ffffff;
		font-family: var(--ps-font-body), system-ui, sans-serif;
		overflow-x: hidden;
		margin: 0;
	}

	.dark-theme {
		--bg-color: #05020a;
		--text-main: #fcfcfc;
		--text-muted: #a1a1aa;
		--accent-1: #9333ea;
		--accent-2: #db2777;
		--accent-3: #0284c7;
		--glass-bg: rgba(255, 255, 255, 0.02);
		--glass-border: rgba(255, 255, 255, 0.08);
		--glass-hover: rgba(255, 255, 255, 0.05);

		background-color: var(--bg-color);
		position: relative;
		overflow: hidden;
		min-height: 100vh;
	}

	.ambient-glow {
		position: absolute;
		border-radius: 50%;
		filter: blur(140px);
		z-index: 0;
		opacity: 0.35;
		animation: float 12s ease-in-out infinite alternate;
	}

	.bg-blur {
		background: var(--accent-1);
		width: 700px;
		height: 700px;
		top: -250px;
		right: -150px;
	}

	.bg-blur2 {
		background: var(--accent-2);
		width: 600px;
		height: 600px;
		bottom: 50px;
		left: -250px;
		animation-delay: -4s;
	}

	.bg-blur3 {
		background: var(--accent-3);
		width: 500px;
		height: 500px;
		top: 40%;
		right: 20%;
		opacity: 0.2;
		animation-delay: -7s;
	}

	@keyframes float {
		0% { transform: translate(0, 0) scale(1); }
		100% { transform: translate(-40px, 60px) scale(1.1); }
	}

	.container {
		width: min(1280px, calc(100% - 3rem));
		margin: 0 auto;
		position: relative;
		z-index: 10;
	}

	.hero, .company-thesis, .feature-map, .developers {
		padding: 6rem 0;
	}

	.hero-grid, .developer-grid {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: 2rem;
		align-items: center;
	}

	.hero-copy {
		grid-column: span 7;
		display: grid;
		gap: 1.8rem;
		align-content: start;
	}

	.hero-panel {
		grid-column: span 5;
		min-height: 600px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: radial-gradient(circle at center, rgba(147, 51, 234, 0.1) 0%, transparent 70%);
		border: none;
		box-shadow: none;
	}

	.eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.5rem 1.2rem;
		border: 1px solid var(--glass-border);
		border-radius: 999px;
		background: var(--glass-bg);
		backdrop-filter: blur(16px);
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--text-muted);
		width: fit-content;
	}

	.eyebrow-dot {
		width: 8px;
		height: 8px;
		background: var(--accent-1);
		border-radius: 50%;
		box-shadow: 0 0 12px var(--accent-1);
	}

	.section-title {
		margin: 0;
		font-family: var(--ps-font-display), system-ui;
		font-size: clamp(3rem, 6vw, 5.5rem);
		line-height: 1.05;
		letter-spacing: -0.05em;
		color: var(--text-main);
	}

	.section-copy {
		margin: 0;
		max-width: 38rem;
		font-size: 1.2rem;
		line-height: 1.7;
		color: var(--text-muted);
	}

	.gradient-text {
		background: linear-gradient(135deg, #ffffff, #d8b4fe, #f472b6);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		color: transparent;
	}

	.cta-row, .footer-links, .repo-links {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 1.1rem 1.8rem;
		border-radius: 999px;
		font-weight: 700;
		font-size: 1.05rem;
		text-decoration: none;
		transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
	}

	.button:hover, .hover-lift:hover {
		transform: translateY(-4px);
	}

	.button-primary {
		background: #ffffff;
		color: #05020a;
		box-shadow: 0 12px 30px rgba(255, 255, 255, 0.2);
	}

	.button-primary:hover {
		box-shadow: 0 16px 40px rgba(255, 255, 255, 0.3);
	}

	.button-secondary {
		background: var(--glass-bg);
		border: 1px solid rgba(255, 255, 255, 0.15);
		color: var(--text-main);
		backdrop-filter: blur(12px);
	}

	.button-secondary:hover {
		background: var(--glass-hover);
		border-color: rgba(255, 255, 255, 0.25);
	}

	.signal-grid, .card-grid {
		display: grid;
		gap: 1.2rem;
	}

	.signal-grid {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		margin-top: 1rem;
	}

	.glass-card, .signal-card {
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
		border-radius: 24px;
		backdrop-filter: blur(24px);
		box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
		transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
	}

	.hover-lift:hover {
		border-color: rgba(255, 255, 255, 0.15);
	}

	.signal-card {
		padding: 1.5rem;
	}

	.signal-value {
		margin: 0;
		font-family: var(--ps-font-display), system-ui;
		font-size: 2rem;
		letter-spacing: -0.04em;
		color: #ffffff;
	}

	.signal-card h2 {
		margin: 0.5rem 0;
		font-size: 0.85rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #d8b4fe;
	}

	.signal-card p, .feature-card p, .pillar-card p, .developer-card p, .footer-copy {
		margin: 0;
		color: var(--text-muted);
		line-height: 1.6;
		font-size: 1.05rem;
	}

	.globe-container {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		filter: drop-shadow(0 0 60px rgba(147, 51, 234, 0.4));
	}

	:global(.globe-ascii) {
		color: rgba(255, 255, 255, 0.9) !important;
		text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
	}

	.glass-orb {
		position: absolute;
		border-radius: 50%;
		background: linear-gradient(135deg, rgba(255,255,255, 0.05), rgba(255,255,255, 0.01));
		border: 1px solid rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(16px);
		box-shadow: 0 10px 30px rgba(0,0,0,0.5);
	}

	.orb-1 {
		width: 120px;
		height: 120px;
		top: -10px;
		right: 20px;
		animation: float 5s ease-in-out infinite;
	}

	.orb-2 {
		width: 70px;
		height: 70px;
		bottom: 60px;
		left: 10px;
		animation: float 7s ease-in-out infinite reverse;
	}

	.section-stack {
		display: grid;
		gap: 1.5rem;
		justify-items: center;
		text-align: center;
	}

	.section-stack .section-title {
		max-width: 800px;
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
		width: 100%;
		text-align: left;
	}

	.card-grid {
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		margin-top: 2rem;
		width: 100%;
		text-align: left;
	}

	.feature-card, .pillar-card, .developer-card {
		padding: 2rem;
		display: grid;
		gap: 1.2rem;
		align-content: start;
	}

	.feature-eyebrow, .panel-label {
		margin: 0;
		font-size: 0.85rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #f472b6;
	}

	.feature-card h3, .pillar-card h3, .developer-card h2, .developer-card h3 {
		margin: 0;
		font-family: var(--ps-font-display), system-ui;
		font-size: 1.8rem;
		letter-spacing: -0.04em;
		color: #ffffff;
		line-height: 1.2;
	}

	.feature-points {
		display: grid;
		gap: 0.8rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.feature-points li {
		color: var(--text-muted);
		display: flex;
		align-items: flex-start;
		gap: 0.6rem;
		line-height: 1.5;
	}

	.bullet {
		margin-top: 0.4rem;
		min-width: 6px;
		height: 6px;
		background: var(--accent-3);
		border-radius: 50%;
	}

	.developer-list {
		display: grid;
		gap: 0.8rem;
		padding-left: 1.5rem;
		margin: 0;
		color: var(--text-muted);
		font-size: 1.05rem;
	}

	.feature-link, .hover-link {
		display: inline-flex;
		align-items: center;
		font-weight: 700;
		color: #ffffff;
		text-decoration: none;
		transition: transform 0.2s ease, color 0.2s ease;
		margin-top: auto;
		padding-top: 1rem;
	}

	.feature-link:hover, .hover-link:hover {
		color: #f472b6;
		transform: translateX(4px);
	}

	.developer-card {
		grid-column: span 6;
	}

	.accent-card {
		background: linear-gradient(145deg, rgba(147, 51, 234, 0.08), rgba(219, 39, 119, 0.05));
		border-color: rgba(147, 51, 234, 0.3);
	}

	.footer {
		border-top: 1px solid var(--glass-border);
		padding: 4rem 0;
		background: rgba(5, 2, 10, 0.8);
		backdrop-filter: blur(30px);
	}

	.footer-row {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 2rem;
	}

	.footer-mark {
		margin: 0 0 1rem;
		font-family: var(--ps-font-display), system-ui;
		font-size: 2.5rem;
		font-weight: 800;
		letter-spacing: -0.05em;
	}

	.repo-links {
		margin-top: 1.5rem;
	}

	.fade-in { animation: fadeIn 0.8s ease forwards; opacity: 0; }
	.slide-up { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; transform: translateY(40px); }
	.slide-left { animation: slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; transform: translateX(40px); }
	.fade-in-delay { animation: fadeIn 0.8s ease 0.15s forwards; opacity: 0; }
	.fade-in-delay-2 { animation: fadeIn 0.8s ease 0.3s forwards; opacity: 0; }
	.fade-in-delay-3 { animation: fadeIn 0.8s ease 0.45s forwards; opacity: 0; }

	@keyframes fadeIn { to { opacity: 1; } }
	@keyframes slideUp { to { opacity: 1; transform: translateY(0); } }
	@keyframes slideLeft { to { opacity: 1; transform: translateX(0); } }

	@media (max-width: 960px) {
		.hero-grid, .developer-grid {
			grid-template-columns: 1fr;
		}
		.hero-copy, .hero-panel, .developer-card {
			grid-column: 1 / -1;
		}
		.hero-panel {
			min-height: 400px;
			margin-top: 2rem;
		}
		.footer-row {
			flex-direction: column;
		}
	}
</style>
