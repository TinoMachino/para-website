export const en = {
	heroEyebrow: `PARA • civic social network`,
	heroTitle: `Latent Numerical Solidarity`,
	heroLede: `Democracy is not a vote every few years. It is a continuous conversation. PARA is where that conversation actually happens.`,
	principlesEyebrow: `Three ideas`,
	principlesTitle: `The website only needs to make three claims clearly.`,
	productCuesEyebrow: `Product surface`,
	productCuesTitle: `PARA is not only a thesis. It has visible civic actions.`,
	productCues: [
		{
			kicker: `Vote`,
			title: `Score policies from -3 to +3`,
			copy: `Capture direction and intensity instead of reducing political input to likes or party preference.`,
			href: '/docs/product'
		},
		{
			kicker: `Locate`,
			title: `Use RAQ to build political context`,
			copy: `Help people understand where they stand and give communities more useful civic data.`,
			href: '/docs/how-it-works'
		},
		{
			kicker: `Organize`,
			title: `Turn communities into civic surfaces`,
			copy: `Separate debate, coordination, representation, and discovery from one generic feed.`,
			href: '/docs/how-it-works'
		},
		{
			kicker: `Verify`,
			title: `Inspect the public contracts`,
			copy: `Keep the product language connected to explicit schema and protocol references.`,
			href: '/docs/schemas'
		}
	],
	pathsEyebrow: `Start here`,
	pathsTitle: `Choose the path that matches what you need.`,
	featuresEyebrow: `Core mechanics`,
	featuresTitle: `Four product ideas do most of the explanatory work.`,
	featureWhyItMatters: `Why it matters`,
	openLabel: `Open`,
	heroPrimaryAction: {
		label: `Try the app`,
		href: '/try-app'
	},
	heroSecondaryAction: {
		label: `Read the docs`,
		href: '/docs'
	},
	landingHeroMetrics: [
		{ value: '-3 to +3', label: `policy vote range` },
		{ value: '#POLICY||', label: `structured political flairs` }
	],
	landingSignals: [
		{
			value: '-3 to +3',
			label: `policy voting range`,
			copy: `Policies can be voted across a full disagreement-to-support range, with quadratic voting layered on top.`
		},
		{
			value: '#POLICY||-2',
			label: `policy + matter flairs`,
			copy: `Political expression is structured through dedicated #POLICY|| and #MATTER| tags, including vote intensity, instead of disappearing into generic posting.`
		},
		{
			value: '2nd layer',
			label: `cross-network civic layer`,
			copy: `PARA is designed as a second-layer political social network that can sit on top of existing platforms while being built on FOSS Bluesky-style infrastructure.`
		}
	],
	landingPillars: [
		{
			title: `Insufficient democracy is a friction problem`,
			copy: `PARA starts from a simple idea: democracy fails when making yourself heard is too slow, too opaque, or too socially risky.`
		},
		{
			title: `Political identity should be more plural than party packages`,
			copy: `People should be able to locate themselves, disagree selectively, and vote on policies without buying an entire partisan package.`
		},
		{
			title: `Agents, anonymity, and civic infrastructure belong together`,
			copy: `Agents, search, and anonymity tooling belong in the same civic stack, with the main investment going into data and trust infrastructure.`
		}
	],
	landingFeatures: [
		{
			eyebrow: `Problem`,
			title: `From opinion to political impact`,
			problem: `Makes political positions visible, comparable, and easier to act on.`,
			copy: `PARA starts from a simple premise: democracy stays thin when public opinion is hard to express clearly and hard to turn into civic consequence.`,
			points: [
				`Built around a more plural democratic future for Mexico, not a prettier political feed`,
				`Designed to reduce the friction between thought, expression, and political consequence`
			],
			href: '/thesis',
			cta: `Read the thesis`
		},
		{
			eyebrow: `Second layer`,
			title: `A second layer across existing networks`,
			problem: `Lowers the cost of participation without asking users to abandon their audience.`,
			copy: `PARA can link identities, publish across networks, and carry political context wherever public discussion is already happening.`,
			points: [
				`Cross-network publishing preserves reach while adding civic context`,
				`Shared political tags make posts legible as political speech instead of generic content`
			],
			href: '/thesis',
			cta: `Read the second-layer model`
		},
		{
			eyebrow: `Flairs + voting`,
			title: `Policies and matters get their own format`,
			problem: `Turns generic posting into structured political input.`,
			copy: `PARA introduces #POLICY|| and #MATTER| so users can separate policy design from issue attention, then vote with both direction and intensity.`,
			points: [
				`#POLICY||-2 captures both subject and degree of support or disagreement`,
				`Policy voting becomes a live political dataset rather than a one-day ritual`
			],
			href: '/thesis',
			cta: `Read the voting model`
		},
		{
			eyebrow: `RAQ + communities`,
			title: `RAQ turns ideology into structured context`,
			problem: `Helps people locate themselves politically instead of posting into one undifferentiated crowd.`,
			copy: `The RAQ helps users question themselves, place themselves politically, and generate structured data that communities can organize around.`,
			points: [
				`Intergroup antagonism becomes visible data for education, comparison, and agent behavior`,
				`Communities can support debate, memes, coordination, and conflict without losing the data value`
			],
			href: '/thesis',
			cta: `Read the RAQ model`
		},
		{
			eyebrow: `AI + search`,
			title: `Agents and search are core utilities`,
			problem: `Makes the network useful for reading, comparison, moderation, and external tools.`,
			copy: `PARA is meant to power more than a feed. Search, clustering, classification, and generation turn civic data into usable product utilities.`,
			points: [
				`The API can classify political content, highlight bias, and generate text`,
				`Collective and individual agents can support education, entertainment, and assisted writing`
			],
			href: '/thesis',
			cta: `Read the agent model`
		},
		{
			eyebrow: `Trust + infra`,
			title: `Trust needs real infrastructure`,
			problem: `Balances protected participation with public trust.`,
			copy: `PARA combines anonymity where freedom of thought needs protection with validation where civic participation needs grounding.`,
			points: [
				`Geographic trends and opinion tooling can push parties toward greater coherence`,
				`The main differentiated investment is anonymity technology with broader public-sector value`
			],
			href: '/thesis',
			cta: `Read the trust model`
		}
	],
	landingHeroActions: [
		{
			eyebrow: `About`,
			title: `Read the political thesis`,
			copy: `Understand the democratic problem, the second-layer idea, and why PARA exists.`,
			href: '/thesis'
		},
		{
			eyebrow: `Try app`,
			title: `Find the app or run it locally`,
			copy: `Use Android for normal access, or GitHub when you want local setup.`,
			href: '/try-app'
		},
		{
			eyebrow: `Schemas`,
			title: `Browse the schema reference`,
			copy: `Open the com.para.* reference when you want the contract layer.`,
			href: '/docs/schemas'
		}
	],
	chapters: [
		{
			headline: `Stop cheering from the sidelines.`,
			body: `Vote directly on policies with real intensity. The RAQ test turns government announcements into questions you can answer. Parties are forced to stay coherent when every position is scored, tracked, and compared. You are no longer a spectator. You are a participant.`
		},
		{
			headline: `You are not a party package.`,
			body: `Support a healthcare reform. Oppose a tax hike. Do both without picking a color. #POLICY|| and #MATTER| give political speech its own grammar — direction, intensity, and clarity. Communities form by belief and compass region. Debate becomes data. Disagreement becomes actionable.`
		},
		{
			headline: `Your community has a memory. And now it has a mind.`,
			body: `Collective agents trained on civic trees — living knowledge collections your community builds and curates. AI that represents your values, evolves with your debates, and serves as educator, interlocutor, and archive. Grounded in real data. Governed by consensus. This is civic intelligence, not engagement farming.`
		}
	],
	bottomCta: [
		{ label: `Read the thesis`, href: '/thesis' },
		{ label: `Browse the docs`, href: '/docs' }
	],
	footerCopy: `Browse the thesis, product surfaces, trust model, app access, and schema reference from any entry point.`,
	footerRepoLabels: {
		website: `Website`,
		app: `App`,
		backend: `Backend`
	}
} as const;
