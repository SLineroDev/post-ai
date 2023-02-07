import type { GeneratePostSettings } from './lib/interfaces/post';
import { getPostGeneratorPrompt, getTopicGeneratorPrompt } from '$lib/server';
import { describe, it, expect } from 'vitest';

describe('ideas promt generator', () => {
	it('creates the correct prompt with the keyword love', () => {

		const keyword: string[] = ['love']

		const expectedPromt = 'Generate 5 topic ideas for social media posts using the keywords "love".'

		expect(getTopicGeneratorPrompt(keyword)).toBe(expectedPromt);
	});
	it('creates the correct prompt with the keywords programming, javascript, node', () => {

		const keyword: string[] = ['programming', 'javascript', 'node']

		const expectedPromt = 'Generate 5 topic ideas for social media posts using the keywords "programming", "javascript", "node".'

		expect(getTopicGeneratorPrompt(keyword)).toBe(expectedPromt);
	});
});

describe('post promt generator', () => {
	it('creates the correct prompt for a tweet', () => {

		const settings: GeneratePostSettings = {
			audience: 'everyone',
			socialMedia: 'Twitter',
			tone: 'Neutral',
			title: 'How to become a better programmer'
		}

		const expectedPromt = 'Write a tweet using a Neutral tone about "How to become a better programmer".'

		expect(getPostGeneratorPrompt(settings)).toBe(expectedPromt);
	});

	it('creates the correct prompt for an Instagram post', () => {

		const settings: GeneratePostSettings = {
			audience: 'everyone',
			socialMedia: 'Instagram',
			tone: 'Formal',
			title: 'How to become a better programmer'
		}

		const expectedPromt = 'Write a Instagram post using a Formal tone about "How to become a better programmer".'

		expect(getPostGeneratorPrompt(settings)).toBe(expectedPromt);
	});
});
