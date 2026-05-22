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
			href: '/docs/product'
		},
		{
			kicker: `Ubícate`,
			title: `Usa RAQ para crear contexto político`,
			copy: `Ayuda a las personas a entender dónde están y da a las comunidades datos cívicos más útiles.`,
			href: '/docs/how-it-works'
		},
		{
			kicker: `Organiza`,
			title: `Convierte comunidades en superficies cívicas`,
			copy: `Separa debate, coordinación, representación y descubrimiento de un feed genérico.`,
			href: '/docs/how-it-works'
		},
		{
			kicker: `Verifica`,
			title: `Inspecciona los contratos públicos`,
			copy: `Mantén el lenguaje de producto conectado con referencias explícitas de schema y protocolo.`,
			href: '/docs/schemas'
		}
	],
	pathsEyebrow: `Empieza aquí`,
	pathsTitle: `Elige la ruta que coincide con lo que necesitas.`,
	featuresEyebrow: `Mecánicas centrales`,
	featuresTitle: `Cuatro ideas de producto hacen la mayor parte del trabajo explicativo.`,
	featureWhyItMatters: `Por qué importa`,
	openLabel: `Abrir`,
	heroPrimaryAction: {
		label: `Prueba la app`,
		href: '/try-app'
	},
	heroSecondaryAction: {
		label: `Lee la documentación`,
		href: '/docs'
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
			eyebrow: `Problema`,
			title: `De la opinión al impacto político`,
			problem: `Hace que las posiciones políticas sean visibles, comparables y más fáciles de actuar.`,
			copy: `PARA parte de una premisa simple: la democracia se queda delgada cuando la opinión pública es difícil de expresar claramente y difícil de convertir en consecuencia cívica.`,
			points: [
				`Construida alrededor de un futuro democrático más plural para México, no un feed político más bonito`,
				`Diseñada para reducir la fricción entre pensamiento, expresión y consecuencia política`
			],
			href: '/thesis',
			cta: `Lee la tesis`
		},
		{
			eyebrow: `Segunda capa`,
			title: `Una segunda capa sobre redes existentes`,
			problem: `Reduce el costo de participación sin pedirles a los usuarios que abandonen su audiencia.`,
			copy: `PARA puede vincular identidades, publicar entre redes y llevar contexto político dondequiera que ya esté ocurriendo discusión pública.`,
			points: [
				`La publicación entre redes preserva el alcance mientras agrega contexto cívico`,
				`Las etiquetas políticas compartidas hacen que las publicaciones sean legibles como discurso político en lugar de contenido genérico`
			],
			href: '/thesis',
			cta: `Lee el modelo de segunda capa`
		},
		{
			eyebrow: `Flairs + votación`,
			title: `Las políticas y asuntos tienen su propio formato`,
			problem: `Convierte la publicación genérica en input político estructurado.`,
			copy: `PARA introduce #POLICY|| y #MATTER| para que los usuarios puedan separar el diseño de políticas de la atención a asuntos, y luego votar con dirección e intensidad.`,
			points: [
				`#POLICY||-2 captura tanto el tema como el grado de apoyo o desacuerdo`,
				`La votación de políticas se convierte en un dataset político vivo en lugar de un ritual de un día`
			],
			href: '/thesis',
			cta: `Lee el modelo de votación`
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
			href: '/thesis',
			cta: `Lee el modelo RAQ`
		},
		{
			eyebrow: `IA + búsqueda`,
			title: `Agentes y búsqueda son utilidades centrales`,
			problem: `Hace que la red sea útil para lectura, comparación, moderación y herramientas externas.`,
			copy: `PARA está pensada para potenciar más que un feed. Búsqueda, clustering, clasificación y generación convierten datos cívicos en utilidades de producto usables.`,
			points: [
				`La API puede clasificar contenido político, destacar sesgos y generar texto`,
				`Agentes colectivos e individuales pueden apoyar educación, entretenimiento y escritura asistida`
			],
			href: '/thesis',
			cta: `Lee el modelo de agentes`
		},
		{
			eyebrow: `Confianza + infra`,
			title: `La confianza necesita infraestructura real`,
			problem: `Balancea la participación protegida con la confianza pública.`,
			copy: `PARA combina anonimato donde la libertad de pensamiento necesita protección con validación donde la participación cívica necesita anclaje.`,
			points: [
				`Las tendencias geográficas y herramientas de opinión pueden empujar a los partidos hacia mayor coherencia`,
				`La inversión diferenciada principal es tecnología de anonimato con valor público-sectorial más amplio`
			],
			href: '/thesis',
			cta: `Lee el modelo de confianza`
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
			eyebrow: `Prueba la app`,
			title: `Encuentra la app o ejecútala localmente`,
			copy: `Usa Android para acceso normal, o GitHub cuando quieras configuración local.`,
			href: '/try-app'
		},
		{
			eyebrow: `Schemas`,
			title: `Explora la referencia de schemas`,
			copy: `Abre la referencia com.para.* cuando quieras ver la capa de contratos.`,
			href: '/docs/schemas'
		}
	],
	chapters: [
		{
			headline: `Deja de animar desde la barrera.`,
			body: `Vota directamente sobre políticas con intensidad real. La prueba RAQ convierte los anuncios gubernamentales en preguntas que puedes responder. Los partidos se ven obligados a mantener coherencia cuando cada posición es calificada, rastreada y comparada. Ya no eres un espectador. Eres participante.`
		},
		{
			headline: `No eres un paquete partidario.`,
			body: `Apoya una reforma de salud. Oponte a un aumento de impuestos. Haz ambos sin escoger un color. #POLICY|| y #MATTER| le dan al discurso político su propia gramática — dirección, intensidad y claridad. Las comunidades se forman por creencia y región de brújula. El debate se convierte en datos. El desacuerdo se vuelve accionable.`
		},
		{
			headline: `Tu comunidad tiene memoria. Y ahora tiene mente.`,
			body: `Agentes colectivos entrenados sobre árboles cívicos — colecciones de conocimiento vivas que tu comunidad construye y cura. IA que representa tus valores, evoluciona con tus debates, y sirve como educador, interlocutor y archivo. Anclada en datos reales. Gobernada por consenso. Esto es inteligencia cívica, no cultivo de engagement.`
		}
	],
	bottomCta: [
		{ label: `Lee la tesis`, href: '/thesis' },
		{ label: `Explora la documentación`, href: '/docs' }
	],
	footerCopy: `Explora la tesis, superficies de producto, modelo de confianza, acceso a la app y referencia de schemas desde cualquier punto de entrada.`,
	footerRepoLabels: {
		website: `Sitio Web`,
		app: `App`,
		backend: `Backend`
	}
} as const;
