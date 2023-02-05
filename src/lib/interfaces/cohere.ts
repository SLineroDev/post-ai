export type Model = 'command-xlarge-nightly' | 'xlarge';

export interface Parameters {
	model?: Model;
	prompt: string;
	maxTokens?: number;
	temperature?: number;
	k?: number;
	p?: number;
	frecquencyPenalty?: number;
	presencePenalty?: number;
	stopSequences?: string[];
	returnLikelihoods?: ReturnLikelihoods;
}

export interface CohereRequestParameters {
	model: Model;
	prompt: string;
	max_tokens?: number;
	temperature?: number;
	k?: number;
	p?: number;
	frequency_penalty?: number;
	presence_penalty?: number;
	stop_sequences?: string[];
	return_likelihoods?: ReturnLikelihoods;
  truncate?: "END"
}

type ReturnLikelihoods = 'GENERATION' | 'NONE';

interface Generation {
	id: 'string';
	text: 'string';
}

export interface GenerateResponse {
	id: 'string';
	generations: Generation[];
	prompt: 'string';
}
