import type { GeneratePostSettings } from '$lib/interfaces/post';
import { buildData, generate, getPostGeneratorPrompt, parseResponse } from '$lib/server';
import type { RequestHandler } from './$types';

export const POST = (async (event) => {
	const body: GeneratePostSettings = await new Response(event.request.body).json();
	const prompt = getPostGeneratorPrompt(body);
	console.log(prompt);

	const data = buildData({ prompt });
	const resp = await generate(data);
	return new Response(JSON.stringify(parseResponse(resp)));
}) satisfies RequestHandler;
