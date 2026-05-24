export const es = {
	heroEyebrow: `PARA • red social cívica`,
	heroTitle: `Solidaridad numérica latente`,
	heroLede: `La democracia no es un voto cada varios años. Es una conversación continua. PARA es donde esa conversación realmente ocurre.`,
	principlesEyebrow: `Tres ideas`,
	principlesTitle: `El sitio solo necesita explicar tres afirmaciones con claridad.`,
	productCuesEyebrow: `Superficie de producto`,
	productCuesTitle: `PARA no es solo una tesis. Tiene acciones cívicas visibles.`,
	productCues: [
		{
			kicker: `Vota`,
			title: `Califica políticas de -3 a +3`,
			copy: `Captura dirección e intensidad en lugar de reducir el input político a likes o preferencia partidista.`,
			href: '/thesis'
		},
		{
			kicker: `Ubícate`,
			title: `Usa RAQ para crear contexto político`,
			copy: `Ayuda a las personas a entender dónde están y da a las comunidades datos cívicos más útiles.`,
			href: '/thesis'
		},
		{
			kicker: `Organiza`,
			title: `Convierte comunidades en superficies cívicas`,
			copy: `Separa debate, coordinación, representación y descubrimiento de un feed genérico.`,
			href: '/thesis'
		},
		{
			kicker: `Verifica`,
			title: `Inspecciona los contratos públicos`,
			copy: `Mantén el lenguaje de producto conectado con referencias explícitas de schema y protocolo.`,
			href: '/thesis'
		}
	],
	pathsEyebrow: `Empieza aquí`,
	pathsTitle: `Elige la ruta que coincide con lo que necesitas.`,
	featuresEyebrow: `Mecánicas centrales`,
	featuresTitle: `Cuatro ideas de producto hacen la mayor parte del trabajo explicativo.`,
	featureWhyItMatters: `Por qué importa`,
	openLabel: `Abrir`,
	heroSecondaryAction: {
		label: `Lee la tesis`,
		href: '/thesis'
	},
	landingHeroMetrics: [
		{ value: '-3 a +3', label: `rango de votación de políticas` },
		{ value: '#POLICY||', label: `flairs políticos estructurados` }
	],
	landingSignals: [
		{
			value: '-3 a +3',
			label: `rango de votación de políticas`,
			copy: `Las políticas pueden votarse en un rango completo de desacuerdo a apoyo, con votación cuadrática para la intensidad.`
		},
		{
			value: '#POLICY||-2',
			label: `flairs de política + asunto`,
			copy: `La expresión política se estructura a través de etiquetas dedicadas #POLICY|| y #MATTER|, incluyendo intensidad de voto, en lugar de desaparecer en publicaciones genéricas.`
		},
		{
			value: '2da capa',
			label: `capa cívica entre redes`,
			copy: `PARA está diseñada como una red social política de segunda capa que puede coexistir con plataformas existentes mientras se construye sobre infraestructura FOSS estilo Bluesky.`
		}
	],
	landingPillars: [
		{
			title: `La democracia insuficiente es un problema de fricción`,
			copy: `PARA parte de una idea simple: la democracia falla cuando hacerse escuchar es demasiado lento, opaco o socialmente riesgoso.`
		},
		{
			title: `La identidad política debería ser más plural que los paquetes partidarios`,
			copy: `Las personas deberían poder ubicarse, discrepar selectivamente y votar políticas sin comprar un paquete partidario completo.`
		},
		{
			title: `Agentes, anonimato e infraestructura cívica van juntos`,
			copy: `Agentes, búsqueda y herramientas de anonimato pertenecen al mismo stack cívico, con la inversión principal en datos e infraestructura de confianza.`
		}
	],
	landingFeatures: [
		{
			eyebrow: `Expresión`,
			title: `De la opinión dispersa a la voz política estructurada`,
			problem: `Hace que el discurso cívico sea tan fácil como publicar, pero tan legible como un voto.`,
			copy: `PARA parte de una premisa simple: la democracia se queda delgada cuando la opinión pública es difícil de expresar claramente y más difícil de convertir en consecuencia. Por eso construimos una nueva gramática para el discurso político — #POLICY|| y #MATTER| — donde cada publicación lleva dirección, intensidad y contexto.`,
			points: [
				`Construida alrededor de un futuro democrático más plural para México, no un feed político más bonito`,
				`#POLICY||-2 captura tanto el tema como el grado de apoyo, convirtiendo publicaciones en datos cívicos vivos en lugar de rituales de un día`
			],
			href: '/blog/from-opinion-to-voice',
			cta: `Lee la historia`
		},
		{
			eyebrow: `Capa de confianza`,
			title: `Una segunda capa construida sobre infraestructura de confianza real`,
			problem: `Permite a las personas participar entre redes sin abandonar su audiencia o su seguridad.`,
			copy: `PARA se asienta sobre las redes que la gente ya usa, agregando contexto político sin forzar la migración. Pero una capa solo es tan buena como la confianza que hay debajo — por eso combinamos anonimato donde la libertad de pensamiento necesita protección con validación donde el poder cívico necesita anclaje.`,
			points: [
				`La publicación entre redes preserva el alcance mientras que las etiquetas políticas compartidas hacen que las publicaciones sean legibles como discurso cívico`,
				`Las tendencias geográficas y herramientas de opinión empujan a los partidos hacia la coherencia, mientras que la tecnología de anonimato protege a los hablantes con valor público-sectorial más amplio`
			],
			href: '/blog/trust-layer-across-networks',
			cta: `Ver explicación`
		},
		{
			eyebrow: `RAQ + comunidades`,
			title: `El RAQ convierte la ideología en contexto estructurado`,
			problem: `Ayuda a las personas a ubicarse políticamente en lugar de publicar ante una multitud indiferenciada.`,
			copy: `El RAQ ayuda a los usuarios a cuestionarse, ubicarse políticamente y generar datos estructurados con los que las comunidades pueden organizarse.`,
			points: [
				`El antagonismo intergrupal se convierte en datos visibles para educación, comparación y comportamiento de agentes`,
				`Las comunidades pueden apoyar debate, memes, coordinación y conflicto sin perder el valor de los datos`
			],
			href: '/blog/raq-and-communities',
			cta: `Encuentra tu lugar`
		},
		{
			eyebrow: `IA`,
			title: `Los agentes son utilidades centrales`,
			problem: `Hace que la red sea útil para lectura, comparación, moderación y herramientas externas.`,
			copy: `PARA está pensada para potenciar más que un feed. Clustering, clasificación y generación convierten datos cívicos en utilidades de producto usables.`,
			points: [
				`La API puede clasificar contenido político, destacar sesgos y generar texto`,
				`Agentes colectivos e individuales pueden apoyar educación, entretenimiento y escritura asistida`
			],
			href: '/blog/agents-and-search',
			cta: `Explora los agentes`
		}
	],
	landingHeroActions: [
		{
			eyebrow: `Acerca de`,
			title: `Lee la tesis política`,
			copy: `Entiende el problema democrático, la idea de segunda capa y por qué existe PARA.`,
			href: '/thesis'
		},
		{
			eyebrow: `Schemas`,
			title: `Explora la referencia de schemas`,
			copy: `Abre la referencia com.para.* cuando quieras ver la capa de contratos.`,
			href: '/thesis'
		}
	],
	chapters: [
		{
			headline: `Deja de animar desde la barrera.`,
			body: `Vota directamente sobre políticas con intensidad real. La prueba RAQ convierte los anuncios gubernamentales en preguntas que puedes responder. Los partidos se ven obligados a mantener coherencia cuando cada posición es calificada, rastreada y comparada. Ya no eres un espectador. Eres participante.`
		},
		{
			headline: `No eres un paquete partidario.`,
			body: `Apoya una reforma de salud. Oponte a un aumento de impuestos. Haz ambos sin escoger un color. #POLICY|| y #MATTER| le dan al discurso político su propia gramática — dirección, intensidad y claridad. Ofrecemos seis agrupaciones predeterminadas de Árboles Cívicos para empezar, pero las comunidades pueden construir sus propios árboles: clusters de políticas personalizados, mapas de problemas regionales, o colecciones temáticas que correspondan a cómo realmente piensan. Cada árbol se convierte en una base de conocimiento viva para explorar la mente de una comunidad — qué valora, cómo evoluciona, dónde discrepa. Impulsado por una integración con Semble.so.`
		},
		{
			headline: `Tu comunidad tiene memoria. Y ahora tiene mente.`,
			body: `Agentes colectivos entrenados sobre árboles cívicos — colecciones de conocimiento vivas que tu comunidad construye y cura. IA que representa tus valores, evoluciona con tus debates, y sirve como educador, interlocutor y archivo. Anclada en datos reales. Gobernada por consenso. Esto es inteligencia cívica, no cultivo de engagement.`
		}
	],
	bottomCta: [
		{ label: `Lee la tesis`, href: '/thesis' }
	],
	footerCopy: `Explora la tesis, superficies de producto, modelo de confianza, acceso a la app y referencia de schemas desde cualquier punto de entrada.`,
	footerRepoLabels: {
		website: `Sitio Web`,
		app: `App`,
		backend: `Backend`
	}
} as const;
