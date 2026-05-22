import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(308, '/docs/how-it-works/messages');
}
