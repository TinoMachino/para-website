<script lang="ts">
	import { resolve } from '$app/paths';
	import { contactEmails } from '$lib/content/site';

	const policies = [
		{
			href: resolve('/about/support/community-guidelines'),
			title: 'Community guidelines',
			description: 'Rules for safe, respectful, and authentic participation on PARA.'
		},
		{
			href: resolve('/trust-and-safety'),
			title: 'Trust and safety',
			description: 'How identity, moderation, verification, and account control work in the product.'
		},
		{
			href: resolve('/tos'),
			title: 'Terms of service',
			description: 'Rules for using PARA sites, apps, and related services we operate.'
		},
		{
			href: resolve('/legal/privacy'),
			title: 'Privacy policy',
			description: 'How we handle information for this website, the PARA app, and related services.'
		},
		{
			href: `${resolve('/legal/privacy')}#protocol-and-federation`,
			title: 'Protocol and network data',
			description: 'High-level note on AT Protocol–style federation and what that can mean for data.'
		},
		{
			href: `${resolve('/tos')}#copyright`,
			title: 'Copyright policy',
			description: 'Reporting copyright concerns about content shared through PARA.'
		}
	] as const;
</script>

<svelte:head>
	<title>Support • PARA</title>
	<meta
		name="description"
		content="Contact PARA for help, read policies and legal information, and find channels for regulatory and law-enforcement requests."
	/>
</svelte:head>

<div class="docs-page support-page">
	<section class="support-hero">
		<p class="docs-hero-kicker">Support</p>
		<h1>Help, policies, and legal channels</h1>
		<p class="support-lead">
			If you need help using PARA or this site, email us with a short description of the issue and
			what outcome you are looking for. For legal and safety topics, use the policy links below or
			the dedicated request paths further down.
		</p>
		<p>
			<a class="support-mailto" href="mailto:{contactEmails.support}">{contactEmails.support}</a>
		</p>
	</section>

	<section class="docs-section-card">
		<p class="docs-section-kicker">Policies and legal</p>
		<h2>Documents that govern participation</h2>
		<p>
			These pages are written for PARA’s civic network, public documentation site, and open repos—not
			for any unrelated product. Replace placeholder contact addresses with operational inboxes before
			you rely on them for production support.
		</p>
		<ul class="support-policy-list">
			{#each policies as item (item.title)}
				<li>
					<a href={item.href}>{item.title}</a>
					<span class="support-policy-desc">{item.description}</span>
				</li>
			{/each}
		</ul>
	</section>

	<section class="docs-section-card">
		<p class="docs-section-kicker">Legal requests</p>
		<h2>Regulatory, official, and other legal contact</h2>
		<p>
			Use the channel that matches your role. We handle requests in English unless we agree otherwise
			in writing. Include enough detail for us to locate the relevant material without speculative
			fishing expeditions.
		</p>

		<ul class="support-legal-tree">
			<li>
				<strong>Regulatory and local-law reports</strong>
				<span>
					For members of the public reporting content under a specific national or regional framework,
					email
					<a href="mailto:{contactEmails.regulatory}">{contactEmails.regulatory}</a>
					with jurisdiction, statutory basis, links or identifiers, and the remedy you seek.
				</span>
			</li>
			<li>
				<strong>Official requests (law enforcement and agencies)</strong>
				<span>
					Law enforcement, government agencies, regulators, and counsel representing them should use
					<a href="mailto:{contactEmails.legal}">{contactEmails.legal}</a>. Include authority,
					contact verification, narrow scope, and legal process where applicable. We do not operate a
					separate self-serve portal yet; describe what you need in the first message.
				</span>
			</li>
			<li>
				<strong>EU Digital Services Act contact</strong>
				<span>
					For requests that must reach a designated DSA contact point, write to
					<a href="mailto:{contactEmails.euDsa}">{contactEmails.euDsa}</a>. Requests should be in
					English unless applicable law requires another language we can reasonably accommodate.
				</span>
			</li>
			<li>
				<strong>Everything else legal</strong>
				<span>
					If your request does not fit the categories above, email
					<a href="mailto:{contactEmails.legal}">{contactEmails.legal}</a>
					with a clear subject line and enough context to route the message.
				</span>
			</li>
		</ul>
	</section>

	<section class="docs-section-card">
		<p class="docs-section-kicker">Also useful</p>
		<div class="docs-link-grid">
			<a class="docs-link-card" href={resolve('/docs')}>
				<strong>Documentation</strong>
				<span>Product and protocol reference for builders and contributors.</span>
			</a>
			<a class="docs-link-card" href={resolve('/try-app')}>
				<strong>Try app</strong>
				<span>Distribution and local setup paths for the client.</span>
			</a>
		</div>
	</section>
</div>

<style>
	.support-page {
		display: grid;
		gap: 1.5rem;
	}

	.support-hero {
		padding: clamp(1.6rem, 2vw, 2.2rem) 0 0.25rem;
		max-width: 40rem;
	}

	.support-hero h1 {
		margin: 0.35rem 0 0.85rem;
		font-family: var(--ps-font-display);
		font-size: clamp(2.2rem, 4.5vw, 3.4rem);
		line-height: 1.05;
		letter-spacing: -0.03em;
		color: #ffffff;
	}

	.support-lead {
		margin: 0 0 1rem;
		color: #d8d2e6;
		line-height: 1.75;
		font-size: 1.05rem;
	}

	.support-mailto {
		font-weight: 700;
		color: var(--para-accent-text);
		text-decoration: underline;
		text-underline-offset: 0.15em;
	}

	.support-policy-list {
		list-style: none;
		margin: 1.25rem 0 0;
		padding: 0;
		display: grid;
		gap: 1rem;
	}

	.support-policy-list li {
		display: grid;
		gap: 0.35rem;
		padding: 1rem 1.1rem;
		border-radius: 1rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(255, 255, 255, 0.03);
	}

	.support-policy-list a {
		font-weight: 700;
		color: #f4f7ff;
		text-decoration: none;
	}

	.support-policy-list a:hover {
		color: var(--para-accent-text);
	}

	.support-policy-desc {
		color: #b9b3c9;
		line-height: 1.65;
		font-size: 0.95rem;
	}

	.support-legal-tree {
		margin: 1.25rem 0 0;
		padding-left: 1.2rem;
		display: grid;
		gap: 1.15rem;
		color: #cdc8d8;
		line-height: 1.72;
	}

	.support-legal-tree li {
		display: grid;
		gap: 0.4rem;
	}

	.support-legal-tree strong {
		color: #f0f4ff;
	}

	.support-legal-tree a {
		color: var(--para-accent-text);
		font-weight: 600;
	}
</style>
