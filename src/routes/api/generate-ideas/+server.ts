import { getTopicGeneratorPrompt, splitListResponse } from '$lib/server';
import { buildData, generate } from '$lib/server/ai';
import type { RequestHandler } from './$types';

export const POST = (async (event) => {
	const body: string[] = await new Response(event.request.body).json();
	const prompt = getTopicGeneratorPrompt(body);
	const data = buildData({ prompt });
	const resp = await generate(data);
	const topicList = splitListResponse(resp.generations[0].text);
	return new Response(JSON.stringify(topicList));
}) satisfies RequestHandler;
