import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// Root-relative URLs so nav links work from nested routes (e.g. /docs/*).
		// With the default relative URLs, `resolve('/thesis')` becomes `./thesis`, which
		// resolves to /docs/thesis when the current path is under /docs/.
		paths: { relative: false }
	},
	vitePlugin: {
		dynamicCompileOptions: ({ filename }) =>
			filename.includes('node_modules') ? undefined : { runes: true }
	},
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
