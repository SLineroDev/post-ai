import type { GeneratePostSettings } from './../../../lib/interfaces/post';
import { buildData, generate } from '$lib/server/ai';
import type { RequestHandler } from './$types';
import { getPostGeneratorPrompt } from '$lib/server/post-generator';

export const POST = (async (event) => {
	const body: GeneratePostSettings = await new Response(event.request.body).json();
	const prompt = getPostGeneratorPrompt(body);
	console.log(prompt);
	
	const data = buildData({ prompt });
 	const resp = await generate(data);
	console.log(resp.generations[0].text);
	return new Response(JSON.stringify(resp));
}) satisfies RequestHandler;
