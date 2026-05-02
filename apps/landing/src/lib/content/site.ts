export const docsBase = '/docs';
export const aboutBase = '/thesis';
export const productTourHref = '/tour';

export const openSourceRepos = [
	{
		label: 'Website',
		href: 'https://github.com/TinoMachino/para-website',
		copy: 'Public docs and website workspace'
	},
	{
		label: 'App',
		href: 'https://github.com/TinoMachino/final',
		copy: 'Public PARA client workspace'
	},
	{
		label: 'Backend',
		href: 'https://github.com/TinoMachino/WhatZatppa',
		copy: 'Public WhatZatppa backend workspace'
	}
] as const;

export const heroPrimaryAction = {
	label: 'Try the app',
	href: '/try-app'
} as const;

export const heroSecondaryAction = {
	label: 'Read the docs',
	href: docsBase
} as const;

export const landingSignals = [
	{
		value: '-3 to +3',
		label: 'policy voting range',
		copy: 'Vote across a full range of agreement, with quadratic voting for intensity.'
	},
	{
		value: '#POLICY||-2',
		label: 'policy + matter flairs',
		copy: 'Structure political expression through dedicated tags, avoiding generic feeds.'
	},
	{
		value: '2nd layer',
		label: 'cross-network civic layer',
		copy: 'PARA acts as a second-layer network on top of FOSS Bluesky infrastructure.'
	}
] as const;

export const landingPillars = [
	{
		title: 'Frictionless Democracy',
		copy: 'Democracy fails when making yourself heard is too slow or opaque. PARA reduces the friction between thought and consequence.'
	},
	{
		title: 'Plural Political Identity',
		copy: 'Locate yourself, disagree selectively, and vote on policies without buying an entire partisan package.'
	},
	{
		title: 'Civic Infrastructure',
		copy: 'Agents, political search, and anonymity tooling built securely on Bluesky-derived infrastructure.'
	}
] as const;

export const landingFeatures = [
	{
		eyebrow: 'Problem',
		title: 'Opinion vs Impact',
		copy: 'Bridge the gap between having an opinion and achieving political consequence.',
		points: [
			'A plural democratic future for Mexico',
			'Focus on reducing friction in political expression'
		],
		href: aboutBase,
		cta: 'Company thesis'
	},
	{
		eyebrow: 'Second layer',
		title: 'Across Networks',
		copy: 'Link identities and publish across networks using shared political tags as context.',
		points: [
			'Lower participation costs without losing audience',
			'Make posts legible as civic speech'
		],
		href: aboutBase,
		cta: 'Second layer model'
	},
	{
		eyebrow: 'Flairs + voting',
		title: 'Policy Voting',
		copy: 'Distinguish policy design from issue attention. Vote policies from -3 to +3.',
		points: [
			'Express subject and degree of support',
			'Build a live political dataset'
		],
		href: aboutBase,
		cta: 'Voting model'
	},
	{
		eyebrow: 'RAQ + communities',
		title: 'Question & Refine',
		copy: 'Use RAQ to place yourself politically. Organize around beliefs instead of an undifferentiated crowd.',
		points: [
			'Make intergroup antagonism visible and useful',
			'Support serious debate and coordination'
		],
		href: aboutBase,
		cta: 'Community model'
	},
	{
		eyebrow: 'AI + search',
		title: 'Agents & Utilities',
		copy: 'Embeddings, search relevance, and classification make the network useful for education and moderation.',
		points: [
			'Classify political content in text and images',
			'Deploy agents for writing and comparison'
		],
		href: aboutBase,
		cta: 'Agent API'
	},
	{
		eyebrow: 'Trust + infra',
		title: 'Real Infrastructure',
		copy: 'Grant anonymity where freedom of thought needs protection, backed by public trust validation.',
		points: [
			'Push parties toward coherence with geographic data',
			'Invest in cryptographic anonymity methods'
		],
		href: aboutBase,
		cta: 'Infrastructure'
	}
] as const;

export const developerPromises = [
	'Docs that explain the democratic-friction thesis, voting, and agents',
	'One origin for the landing page, roadmap, and reference',
	'Contract-facing docs for civic infrastructure and classification APIs'
] as const;

export const architectureNotes = [
	'Policies can be encoded as dedicated flairs and voted on quantitatively.',
	'RAQ and community voting build a dataset that keeps agents evolving.',
	'Bluesky-derived infrastructure lowers distribution costs while ensuring privacy.'
] as const;

