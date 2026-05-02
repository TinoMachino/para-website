import { blogPosts } from '$lib/content/blog';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const post = blogPosts.find((p) => p.slug === params.slug);

	if (!post) {
		error(404, 'Post not found');
	}

	return {
		post
	};
};
