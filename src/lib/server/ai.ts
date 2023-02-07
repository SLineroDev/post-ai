import { SECRET_COHERE_API_KEY } from '$env/static/private';
import type { CohereRequestParameters, GenerateResponse, Parameters } from '../interfaces';

const COHERE_API_GENERATE_URL = 'https://api.cohere.ai/generate';

const headers = {
	accept: 'application/json',
	authorization: `BEARER ${SECRET_COHERE_API_KEY}`,
	'Content-Type': 'application/json',
	'Cohere-Version': '2022-12-06'
};

export function buildData(parameters: Parameters): CohereRequestParameters {
	return {
		model: parameters.model || 'command-xlarge-nightly',
		prompt: parameters.prompt,
		max_tokens: parameters.maxTokens || 300,
		temperature: parameters.temperature || 1.5,
		k: parameters.k || 0,
		p: parameters.p || 0.75,
		frequency_penalty: parameters.frecquencyPenalty || 0.8,
		presence_penalty: parameters.presencePenalty || 0,
		stop_sequences: parameters.stopSequences || [],
		return_likelihoods: parameters.returnLikelihoods || 'NONE'
	};
}

export async function generate(parameters: CohereRequestParameters) {
	const response: GenerateResponse = await fetch(COHERE_API_GENERATE_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify(parameters)
	}).then((res) => res.json());
	console.log({ generations: response.generations, prompt: response.prompt });
	return response;
}
