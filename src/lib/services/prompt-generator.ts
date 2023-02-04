export function getTopicGeneratorPrompt(keywords: string[]): string {
	return `Generate 5 topic ideas for social media posts using the keywords ${keywords
		.map((k) => `"${k}"`)
		.join(' ')}`;
}
