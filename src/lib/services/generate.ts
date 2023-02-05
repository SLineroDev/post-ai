const GENERATE_URL = '/api/generate';

export async function customCommand(keywords: string[]) {
	const response = await fetch(GENERATE_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(keywords)
	}).then((resp) => resp.json());
	return response;
}
