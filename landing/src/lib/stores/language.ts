import { writable } from 'svelte/store';

export type Language = 'en' | 'es';

const STORAGE_KEY = 'para-language';

function getStoredLanguage(): Language {
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored === 'es' || stored === 'en') return stored;
	}
	return 'en';
}

function createLanguageStore() {
	const store = writable<Language>(getStoredLanguage());

	store.subscribe((value) => {
		if (typeof window !== 'undefined') {
			localStorage.setItem(STORAGE_KEY, value);
		}
	});

	return store;
}

export const language = createLanguageStore();
