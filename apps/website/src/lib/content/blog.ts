export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	date: string;
	author?: string;
	body?: string[];
}

export const blogPosts: BlogPost[] = [
	{
		slug: 'm8-identity-broker-estado-tecnico',
		title: 'm8: Estado técnico del broker de identidad',
		description:
			'Reporte técnico del estado actual del m8 Identity Broker: arquitectura de pruebas, componentes clave, y cómo encaja en el ecosistema PARA.',
		date: 'May 9, 2026',
		author: 'PARA',
		body: [
			'm8 no es una wallet de identidad. Es un **broker de pruebas**. Esta distinción no es semántica: define toda la arquitectura.',
			'El problema que resuelve m8 es simple de enunciar y complejo de implementar: ¿cómo pruebo algo sobre mí mismo sin revelar quién soy? En un contexto cívico mexicano, esto no es paranoia. Es necesidad. La correlación entre identidad real y opinión política tiene consecuencias.',
			'**Arquitectura de tres capas.**\nLa sesión comienza con ATProto sign-in: el usuario demuestra control sobre un DID. Eso no dice nada sobre su persona física, solo sobre su capacidad de firmar con una clave. Luego entra el proof broker session: un estado intermedio donde el usuario acumula pruebas verificadas. Finalmente, persona/surface/grant management: decidir qué pruebas se exponen en qué superficie, bajo qué condiciones.',
			'**Componentes actuales.**\n- Persona switcher: permite operar con distintas máscaras cívicas sin logout.\n- Custom surface builder: el usuario define qué combinación de pruebas se muestra en cada contexto.\n- INE verification modal: escaneo de credencial de elector con validación cruzada.\n- Biometric gate + AppState auto-lock: si el usuario abandona la app, la sesión de pruebas se bloquea.\n- QR export: compartir un bundle de pruebas verificadas sin canal digital directo.',
			'**MyBase: el canvas de conocimiento.**\nPolicyTreeCanvas con gesture pan/zoom y colores por tipo de nodo. PolicyList como vista mobile alternativa. SpaceShareModal para enviar espacios permissioned. EndorsementPanel como cola de moderación. Los tipos subyacentes — PolicyNode, PolicyEdge, KnowledgeBundle, PermissionedSpace — son la gramática que permite que el mapa cívico personal se convierta en comunitario.',
			'**Stack técnico.**\nReact Native Expo, react-native-gesture-handler, react-native-reanimated, react-native-svg. Todo integrado en ConsoleScreen con navegación por secciones. No usamos WebView para el grafo: SVG nativo con simulación de fuerzas propia (d3-force adaptado) para paridad mobile/web.',
			'**Estado actual.**\nFuncional en dev. La arquitectura de pruebas está completa: puedes crear personas, acumular pruebas, definir superficies, y exportar bundles. Lo que sigue es endurecimiento: más verificadores de prueba (INE es solo el primero), integración con Ozone para decisión de moderación sobre bundles rechazados, y optimización de performance del canvas para >100 nodos.',
			'La pregunta que m8 responde no es "¿quién eres?" sino "¿qué puedes demostrar?". Esa inversión es intencional y es el núcleo del diseño.'
		]
	},
	{
		slug: 'passkit-vs-m8-arquitectura-prueba',
		title: 'PassKit Identity vs m8: traer tu credencial vs construir tu reputación',
		description:
			'Análisis arquitectónico: cómo funciona PassKit Identity de Apple, por qué México no tiene mDL todavía, y cómo m8 ocupa ese vacío con un modelo de prueba distribuida.',
		date: 'May 9, 2026',
		author: 'PARA',
		body: [
			'Apple publicó recientemente la documentación para **requesting identity data from a Wallet pass**: una API que permite a apps de terceros leer credenciales verificadas almacenadas en Apple Wallet. El caso de uso estrella es el Mobile Driving License (mDL), un estándar ISO que varios estados de EE.UU. ya emiten.',
			'**Cómo funciona PassKit Identity.**\nEl flujo es: emisor oficial (gobierno, banco, universidad) genera una credencial criptográficamente firmada → usuario la almacena en Apple Wallet → app de terceros solicita lectura con permiso explícito del usuario → Apple valida la firma contra el emisor antes de entregar los datos. La confianza viene del emisor, no de Apple. Apple es solo el pipe con UI consistente.',
			'**Por qué esto no resuelve el problema cívico mexicano hoy.**\nMéxico no tiene emisor de mDL. El INE no emite credenciales digitales verificables. No hay infraestructura de PKI gubernamental accesible para ciudadanos comunes. PassKit, en este momento, es una especificación sin contenido para el 99% de los mexicanos.',
			'**La diferencia arquitectónica central.**\nPassKit es **trae tu credencial**: el usuario ya tiene una prueba emitida por una autoridad, y la presenta cuando se la piden. m8 es **construye tu reputación**: el usuario genera pruebas progresivamente, cada una verificada por distintos mecanismos, y el agregado es lo que cuenta. No hay emisor único. Hay un broker que orquesta múltiples fuentes de confianza.',
			'**Analogía concreta.**\nPassKit es como mostrar tu pasaporte en la aduana: una credencial única, fuerte, emitida por un estado. m8 es como construir una historia crediticia: muchas transacciones pequeñas, verificadas por distintos actores, que en conjunto generan confianza suficiente para una transacción mayor.',
			'**¿Pueden coexistir? Sí, y deberían.**\nEn un futuro donde México emita mDL o credencial digital INE, m8 podría integrar PassKit como **una fuente más** de prueba. El INE scan actual es un hack necesario; un mDL oficial sería estrictamente mejor. Pero m8 no se vuelve obsoleto: el valor no está en la verificación del INE, está en la **composición de pruebas** y el **control de exposición** que el usuario tiene sobre ellas.',
			'**El vacío que m8 ocupa ahora.**\nMientras no haya infraestructura estatal de identidad verificable, alguien tiene que construir el puente. m8 no finge ser el estado. No emite credenciales oficiales. Lo que hace es: (1) definir un formato de prueba interoperable, (2) permitir múltiples verificadores (INE, biometría, red social, endorsers), (3) dar al usuario control granular sobre qué pruebas se exponen dónde.',
			'**Lección para otros mercados emergentes.**\nLa arquitectura de PassKit asume un emisor confiable. Esa asunción no se sostiene en países donde la institucionalidad es débil o donde la correlación identidad-opinión es peligrosa. m8 es un modelo para esos contextos: distribuido, progresivo, reversible, controlado por el usuario.',
			'PassKit es el futuro que el norte ya está construyendo. m8 es el presente que el sur necesita sobrevivir hasta que ese futuro llegue.'
		]
	},
	{
		slug: 'working-to-decentralize-fedcm',
		title: 'Working to Decentralize FedCM',
		description:
			'Bluesky Social PBC have given a grant to Emelia Smith, an Invited Expert with the FedID Working Group, to work on FedCM with the goal of making FedCM really work for the decentralized web.',
		date: 'March 9, 2026',
		author: 'Emelia Smith'
	},
	{
		slug: 'npmx-alpha-launch',
		title: 'Supporting the npmx Alpha Launch',
		description:
			'The launch of npmx is an incredible showcase for how open source communities can build quickly on top of atproto.',
		date: 'March 3, 2026',
		author: 'Jim Ray'
	},
	{
		slug: 'plc-replicas',
		title: 'PLC Read Replicas',
		description: 'Introducing a self-hostable did:plc read-replica service.',
		date: 'February 18, 2026',
		author: 'David Buchanan'
	},
	{
		slug: 'new-site-2026',
		title: 'Welcome to the New atproto.com',
		description:
			"We've updated just about everything about atproto.com to make it easier for developers to just build things.",
		date: 'February 17, 2026',
		author: 'Alex Garnett'
	},
	{
		slug: 'relay-rollout',
		title: 'Upcoming Relay Transition',
		description: 'What the new relay rollout means for consumers of the firehose.',
		date: 'January 24, 2026',
		author: 'Bryan Newbold'
	},
	{
		slug: 'introducing-tap',
		title: 'Introducing Tap: Repository Synchronization Made Simple',
		description:
			'We recently released Tap, a tool designed to handle the hard parts of repo synchronization, so you can focus on building your application.',
		date: 'December 12, 2025',
		author: 'Jim Ray'
	},
	{
		slug: 'protocol-check-in-fall-2025',
		title: 'Protocol Check-in (Fall 2025)',
		description: "The Atmosphere is thriving, here's a closer look",
		date: 'October 20, 2025',
		author: 'AT Protocol Team'
	},
	{
		slug: 'taking-at-to-the-ietf',
		title: 'Taking AT to the IETF',
		description:
			'We recently posted two drafts to the IETF Data Tracker. This is the first major step towards standardizing parts of AT in an effort to establish long-term governance for the protocol.',
		date: 'September 23, 2025',
		author: 'AT Protocol Team'
	},
	{
		slug: 'plc-directory-org',
		title: 'Creating an Independent Public Ledger of Credentials (PLC) Directory Organization',
		description:
			'As the next step of maturing governance of the PLC identity system, Bluesky Social PBC is supporting the creation of an independent organization to operate the PLC directory.',
		date: 'September 19, 2025',
		author: 'AT Protocol Team'
	},
	{
		slug: 'oauth-improvements',
		title: 'OAuth Improvements',
		description: "We've been making improvements to the end-user and developer experiences with atproto OAuth.",
		date: 'June 12, 2025',
		author: 'AT Protocol Team'
	},
	{
		slug: 'network-account-management',
		title: 'Network Account Management',
		description:
			"We recently shipped new functionality to the PDS reference implementation (and Bluesky's hosting service) which provides a web interface to create and manage accounts directly on the PDS itself.",
		date: 'May 9, 2025',
		author: 'AT Protocol Team'
	},
	{
		slug: 'relay-updates-sync-v1-1',
		title: 'Relay Updates for Sync v1.1',
		description: 'Updates to our reference implementation of the relay support sync version 1.1',
		date: 'May 2, 2025',
		author: 'AT Protocol Team'
	},
	{
		slug: '2025-protocol-roadmap-spring',
		title: '2025 Protocol Roadmap (Spring and Summer)',
		description:
			'Updates to the AT Protocol roadmap, including Sync v1.1, auth scopes, PDS account management, and more.',
		date: 'March 7, 2025',
		author: 'AT Protocol Team'
	},
	{
		slug: 'looking-back-2024',
		title: 'Looking Back At 2024 AT Protocol Development',
		description:
			"A lot of progress was made on the protocol in 2024, here's a look at the big milestones",
		date: 'January 10, 2025',
		author: 'AT Protocol Team'
	},
	{
		slug: 'relay-ops',
		title: 'Relay Operational Updates',
		description: 'Updates on changes to Bluesky relay servers and guidance for firehose consumers.',
		date: 'November 18, 2024',
		author: 'AT Protocol Team'
	},
	{
		slug: 'pinned-posts',
		title: 'Lexicons, Pinned Posts, and Interoperability',
		description:
			'A discussion of Lexicons, schema extensions, and lessons learned from the pinned posts feature collision.',
		date: 'October 16, 2024',
		author: 'AT Protocol Team'
	},
	{
		slug: 'jetstream',
		title: 'Introducing Jetstream',
		description:
			'Introducing Jetstream, an alternative streaming solution with simple JSON encoding and reduced bandwidth.',
		date: 'October 16, 2024',
		author: 'AT Protocol Team'
	},
	{
		slug: 'oauth-atproto',
		title: 'OAuth for AT Protocol',
		description:
			'Releasing the initial specification of OAuth for AT Protocol, the primary authentication and authorization system going forward.',
		date: 'September 25, 2024',
		author: 'AT Protocol Team'
	},
	{
		slug: 'label-grants',
		title: 'Labeling Services Microgrants',
		description: 'Launching microgrants for labeling services on Bluesky to support moderation and community safety.',
		date: 'May 15, 2024',
		author: 'AT Protocol Team'
	},
	{
		slug: '2024-protocol-roadmap',
		title: '2024 Protocol Roadmap',
		description: 'An update on our progress and our general goals and focus for the coming months.',
		date: 'May 6, 2024',
		author: 'AT Protocol Team'
	},
	{
		slug: 'atproto-grants-recipients',
		title: 'Meet the second batch of AT Protocol Grant Recipients',
		description:
			'Announcing the second batch of AT Protocol grant recipients, distributing $4,800 total in grants.',
		date: 'April 23, 2024',
		author: 'AT Protocol Team'
	},
	{
		slug: 'atproto-grants',
		title: 'Announcing AT Protocol Grants',
		description:
			'Announcing the AT Protocol Grants program, aimed at fostering the growth and sustainability of the atproto developer ecosystem.',
		date: 'March 6, 2024',
		author: 'AT Protocol Team'
	},
	{
		slug: 'self-host-federation',
		title: 'Early Access Federation for Self-Hosters',
		description: 'Releasing an early-access version of federation intended for self-hosters and developers.',
		date: 'February 22, 2024',
		author: 'AT Protocol Team'
	},
	{
		slug: 'repo-export',
		title: 'Download and Parse Repository Exports',
		description: 'How to export and parse a data repository as a CAR file.',
		date: 'November 6, 2023',
		author: 'AT Protocol Team'
	},
	{
		slug: 'protocol-roadmap',
		title: '2023 Protocol Roadmap',
		description: 'The current AT Protocol development plan through to a version one release.',
		date: 'October 11, 2023',
		author: 'AT Protocol Team'
	},
	{
		slug: 'building-on-atproto',
		title: 'Building on the AT Protocol',
		description: 'What you can already build on atproto, and what you can expect soon.',
		date: 'October 11, 2023',
		author: 'AT Protocol Team'
	},
	{
		slug: 'bgs-and-did-doc',
		title: 'Bluesky BGS and DID Document Formatting Changes',
		description:
			'Protocol and infrastructure changes including the BGS firehose and DID document formatting updates.',
		date: 'October 6, 2023',
		author: 'AT Protocol Team'
	},
	{
		slug: 'repo-sync-update',
		title: 'Updates to Repository Sync Semantics',
		description:
			'Announcing updates to atproto repositories that remove history and replace it with a logical clock.',
		date: 'August 24, 2023',
		author: 'AT Protocol Team'
	},
	{
		slug: 'create-post',
		title: 'Posting via the Bluesky API',
		description:
			'A guide to creating posts via the Bluesky API, including mentions, links, replies, quote posts, and image embeds.',
		date: 'August 11, 2023',
		author: 'AT Protocol Team'
	},
	{
		slug: 'call-for-developers',
		title: 'Bluesky Call for Developers',
		description:
			"Bluesky is an open social network built on the AT Protocol. If you're a developer interested in building on atproto, we'd love to hear from you.",
		date: 'August 3, 2023',
		author: 'AT Protocol Team'
	},
	{
		slug: 'federation-sandbox',
		title: 'Federation Developer Sandbox Guidelines',
		description: 'Guidelines for the atproto federation developer sandbox environment.',
		date: 'June 20, 2023',
		author: 'AT Protocol Team'
	},
	{
		slug: 'block-implementation',
		title: 'Why are blocks on Bluesky public?',
		description:
			'The technical implementation of public blocks and some possibilities for more privacy preserving block implementations.',
		date: 'June 8, 2023',
		author: 'AT Protocol Team'
	}
];
