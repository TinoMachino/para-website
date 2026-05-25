import { describe, expect, it } from 'vitest';
import { docsBase } from './site';
import { en } from './i18n/en';

const { landingPillars, landingFeatures, architectureNotes, developerPromises } = en;

describe('site content contract', () => {
	it('points docs CTAs to the docs route', () => {
		expect(docsBase).toBe('/docs');
	});

	it('reflects PARA and WhatZatppa themes', () => {
		expect(landingPillars).toHaveLength(3);
		expect(landingFeatures).toHaveLength(4);
		expect(architectureNotes[0]).toContain('flairs');
		expect(developerPromises[0]).toContain('RAQ');
	});
});
