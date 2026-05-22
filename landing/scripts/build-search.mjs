#!/usr/bin/env node
/**
 * Build-time search index generator.
 * Walks all .svx content files, extracts searchable text,
 * and writes a FlexSearch-compatible document index to static/search-index.json
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROUTES_DIR = path.resolve(__dirname, '../src/routes');
const OUTPUT_FILE = path.resolve(__dirname, '../static/search-index.json');

/**
 * Convert a file path to a URL path.
 */
function fileToUrl(filePath) {
	const relative = path.relative(ROUTES_DIR, filePath);
	let url = relative
		.replace(/\+page\.svx$/, '')
		.replace(/\+page\.svelte$/, '')
		.replace(/\/+$/, '');

	// Blog posts: blog/_posts/slug.svx -> blog/slug
	if (url.startsWith('blog/_posts/')) {
		url = url.replace('blog/_posts/', 'blog/');
	}

	return '/' + url.replace(/\/+$/, '');
}

/**
 * Extract searchable content from an .svx or .svelte file.
 */
function extractContent(source) {
	// Remove <script> and <style> blocks
	let body = source.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ');

	// Extract title from <title>...</title>
	const titleMatch = body.match(/<title[^>]*>(.*?)<\/title>/i);
	let title = '';
	if (titleMatch) {
		title = titleMatch[1]
			.replace(/\{`|\`\}/g, '')
			.replace(/\$\{[^}]+\}/g, '')
			.replace(/\{[^}]+\}/g, '')
			.trim();
	}

	// Extract description from <meta name="description" content="...">
	const descMatch =
		body.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) ||
		body.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i);
	const description = descMatch ? descMatch[1] : '';

	// Remove <svelte:head> blocks
	body = body.replace(/<svelte:head>[\s\S]*?<\/svelte:head>/gi, ' ');

	// Remove remaining HTML tags
	body = body.replace(/<[^>]+>/g, ' ');

	// Extract headings
	const sections = [];
	const headingRegex = /^(#{1,3})\s+(.+)$/gm;
	let match;
	while ((match = headingRegex.exec(body)) !== null) {
		const level = match[1].length;
		const headingText = match[2].trim();
		const slug = headingText
			.toLowerCase()
			.replace(/[^\w\s-]/g, '')
			.replace(/\s+/g, '-');
		sections.push({
			title: headingText,
			hash: level > 1 ? slug : null,
			level
		});
	}

	// Clean up body text
	const content = body
		.replace(/#{1,3}\s+/g, ' ')
		.replace(/\{[^{}]*\}/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();

	return { title, description, content, sections };
}

/**
 * Recursively find all content files.
 */
function findContentFiles(dir) {
	const files = [];
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			// Skip SvelteKit param routes and private dirs
			if (entry.name.startsWith('_') || entry.name.startsWith('[')) continue;
			files.push(...findContentFiles(fullPath));
		} else if (entry.isFile() && entry.name.endsWith('.svx')) {
			files.push(fullPath);
		} else if (entry.isFile() && entry.name === '+page.svelte') {
			// Only index actual page components, not layouts or errors
			files.push(fullPath);
		}
	}
	return files;
}

function main() {
	const files = findContentFiles(ROUTES_DIR);
	const documents = [];

	for (const file of files) {
		const source = fs.readFileSync(file, 'utf-8');
		const { title, description, content, sections } = extractContent(source);
		const url = fileToUrl(file);

		// Skip if no meaningful content
		if (!title && !description && content.length < 50) continue;

		// Add a document for the page itself
		documents.push({
			id: url,
			url,
			title: title || url,
			pageTitle: title || url,
			description: description || '',
			content: content.slice(0, 5000),
			isBlog: url.startsWith('/blog/') && url !== '/blog'
		});

		// Add individual sections as separate searchable documents
		for (const section of sections) {
			if (!section.title) continue;
			const sectionUrl = section.hash ? `${url}#${section.hash}` : url;
			documents.push({
				id: sectionUrl,
				url: sectionUrl,
				title: section.title,
				pageTitle: title || url,
				description: '',
				content: section.title,
				isBlog: url.startsWith('/blog/') && url !== '/blog'
			});
		}
	}

	// Add hardcoded navigation pages that might not have .svx files
	const navigation = [
		{ url: '/blog', title: 'Blog', description: 'Technical reports, architectural notes, and product thinking from the team building PARA.' },
	];

	for (const item of navigation) {
		if (!documents.some((d) => d.url === item.url)) {
			documents.push({
				id: item.url,
				url: item.url,
				title: item.title,
				pageTitle: item.title,
				description: item.description,
				content: item.description,
				isBlog: false
			});
		}
	}

	fs.writeFileSync(OUTPUT_FILE, JSON.stringify(documents, null, 2));
	console.log(
		`Search index built: ${documents.length} documents -> ${path.relative(process.cwd(), OUTPUT_FILE)}`
	);
}

main();
