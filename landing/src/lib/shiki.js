import { createHighlighter } from 'shiki';

/** @type {import('shiki').Highlighter | undefined} */
let highlighter;
/** @type {Promise<void> | undefined} */
let readyPromise;

export function ensureHighlighter() {
	if (!readyPromise) {
		readyPromise = createHighlighter({
			themes: ['github-dark'],
			langs: [
				'json',
				'typescript',
				'javascript',
				'bash',
				'shell',
				'markdown',
				'html',
				'css',
				'yaml',
				'svelte'
			]
		}).then((h) => {
			highlighter = h;
		});
	}
	return readyPromise;
}

/**
 * @param {string} code
 * @param {string} [lang]
 */
export function highlightCodeSync(code, lang = 'text') {
	if (!highlighter) {
		console.warn('Shiki not initialized yet');
		return `<pre><code>${escapeHtml(code)}</code></pre>`;
	}
	try {
		return escapeSvelte(
			highlighter.codeToHtml(code, {
				lang: lang === 'svelte' ? 'html' : lang,
				theme: 'github-dark'
			})
		);
	} catch {
		return `<pre><code>${escapeHtml(code)}</code></pre>`;
	}
}

/** @param {string} text */
function escapeHtml(text) {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}

/** @param {string} html */
function escapeSvelte(html) {
	return html
		.replace(/ tabindex="0"/g, '')
		.replace(/\{/g, '&#123;')
		.replace(/\}/g, '&#125;');
}
