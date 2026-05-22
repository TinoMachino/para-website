import Document from 'flexsearch/dist/module/document.js';

export interface SearchResult {
	url: string;
	title: string;
	pageTitle: string;
	description: string;
	isBlog: boolean;
}

let index: InstanceType<typeof Document> | null = null;
let documents: SearchResult[] = [];
let ready = false;

export async function initSearch(): Promise<void> {
	if (ready) return;

	const res = await fetch('/search-index.json');
	const data: Array<{
		id: string;
		url: string;
		title: string;
		pageTitle: string;
		description: string;
		content: string;
		isBlog: boolean;
	}> = await res.json();

	documents = data.map((d) => ({
		url: d.url,
		title: d.title,
		pageTitle: d.pageTitle,
		description: d.description,
		isBlog: d.isBlog
	}));

	index = new Document({
		document: {
			id: 'id',
			index: ['title', 'content'],
			store: ['url', 'title', 'pageTitle', 'description', 'isBlog']
		},
		tokenize: 'forward'
	});

	for (const doc of data) {
		index.add(doc);
	}

	ready = true;
}

export function search(query: string, limit = 8): SearchResult[] {
	if (!index || !query.trim()) return [];

	const results = index.search(query, {
		enrich: true,
		limit: limit * 2
	});

	const seen = new Map<string, { item: SearchResult; score: number }>();

	for (const fieldResult of results) {
		const boost = fieldResult.field === 'title' ? 0 : 100;
		for (let i = 0; i < fieldResult.result.length; i++) {
			const r = fieldResult.result[i];
			if (!r) continue;
			const doc = r.doc as SearchResult;
			const id = doc.url;
			const score = boost + i + (doc.isBlog ? 50 : 0);

			if (!seen.has(id) || seen.get(id)!.score > score) {
				seen.set(id, { item: doc, score });
			}
		}
	}

	return Array.from(seen.values())
		.sort((a, b) => a.score - b.score)
		.map((v) => v.item)
		.slice(0, limit);
}
