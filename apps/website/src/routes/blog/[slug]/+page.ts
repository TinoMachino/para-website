import type { PageLoad } from './$types';
import type { Component } from 'svelte';
import { error } from '@sveltejs/kit';
import { blogPosts } from '$lib/content/blog';

type BlogPostModule = {
	default: Component;
	metadata: {
		slug: string;
		title: string;
		description: string;
		date: string;
		author?: string;
	};
};

export const load: PageLoad = async ({ params }) => {
	const modules = import.meta.glob<BlogPostModule>('/src/routes/blog/_posts/*.svx');
	const match = Object.entries(modules).find(([path]) => path.endsWith(`${params.slug}.svx`));
	if (!match) error(404, 'Not found');

	const mod = await match[1]();
	const meta = blogPosts.find((p) => p.slug === params.slug);

	return {
		component: mod.default,
		metadata: mod.metadata,
		readingTime: meta?.readingTime ?? 1
	};
};
