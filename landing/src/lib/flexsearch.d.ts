declare module 'flexsearch/dist/module/document.js' {
	export default class Document<T = unknown> {
		constructor(options?: Record<string, unknown>);
		add(doc: T): this;
		search(query: string, options?: Record<string, unknown>): Array<{
			field: string;
			result: Array<{ id: string; doc: T }>;
		}>;
	}
}
