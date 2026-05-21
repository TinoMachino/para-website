import { getArchitectureNotes } from '@parasocial/content-schema';

export function load() {
	return {
		architectureNotes: getArchitectureNotes()
	};
}
