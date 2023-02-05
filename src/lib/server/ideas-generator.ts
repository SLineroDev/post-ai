export function getTopicGeneratorPrompt(keywords: string[]): string {
	return `Generate 5 topic ideas for social media posts using the keywords ${keywords
		.map((k) => `"${k}"`)
		.join(', ')}.`;
}

export function splitListResponse(response: string): string[] {
	return response
		.split('\n')
		.filter((item) => item)
		.map((item) => item.trim());
}
