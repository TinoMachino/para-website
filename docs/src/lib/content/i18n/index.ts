import { derived } from 'svelte/store';
import { language } from '../../stores/language';
import { en } from './en';
import { es } from './es';

export const content = derived(language, ($lang) => ($lang === 'es' ? es : en), en);

export { en, es };
