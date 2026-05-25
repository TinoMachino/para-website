export const siteUrl = 'https://paramx.social';
export const siteName = 'PARA';

export const docsBase = '/docs';
export const aboutBase = '/thesis';

/** Replace with live operational inboxes before launch. */
export const contactEmails = {
	support: 'support@paramx.social',
	legal: 'legal@paramx.social',
	regulatory: 'regulatory@paramx.social',
	euDsa: 'dsa@paramx.social'
} as const;

export const openSourceRepos = [
	{
		label: `App`,
		href: 'https://github.com/mexico-parasocial/para-app',
		copy: `Public PARA client workspace`
	}
] as const;

export const productTourHref = '/tour';

export const surfaceChecklist = [
	`A problem statement centered on democratic friction`,
	`Second-layer publishing and cross-network political context`,
	`#POLICY|| and #MATTER| flairs`,
	`Policy voting from -3 to +3 with RAQ flows`,
	`Belief-based communities and collective agents`,
	`Anonymity, validation, and fair visibility`,
	`Search, API services, and schema docs under \`/docs\``
] as const;

export const architectureLayers = [
	{
		eyebrow: `Product layer`,
		title: `Visible civic product surfaces`,
		copy: `The app exposes communities, participation routes, trust settings, and communication tools that should be legible before anyone opens the schema browser.`
	},
	{
		eyebrow: `Protocol layer`,
		title: `WhatZatppa contracts underneath`,
		copy: `Lexicons, records, xrpc methods, service boundaries, and repository semantics describe how those surfaces are stored and moved through the stack.`
	},
	{
		eyebrow: `Reference layer`,
		title: `Docs that connect both views`,
		copy: `The public site should bridge product language and protocol language so the docs read like a coherent system rather than disconnected notes.`
	}
] as const;
