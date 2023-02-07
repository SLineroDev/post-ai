import type { GeneratePostSettings } from '$lib/interfaces/post';

const GENERATE_IDEAS_URL = '/api/generate-ideas';
const GENERATE_POST_URL = '/api/generate-post';

export async function generateIdeas(keywords: string[]) {
	const response = await fetch(GENERATE_IDEAS_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(keywords)
	}).then((resp) => resp.json());
	return response;
}

export async function generatePost(settings: GeneratePostSettings) {
	const response = await fetch(GENERATE_POST_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(settings)
	}).then((resp) => resp.json());
	return response;
}
