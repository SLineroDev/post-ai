export enum Model {
  COMMAND_XLARGE_NIGHTLY,
  COMMAND_XLARGE,
  XLARGE,
  COMMAND_MEDIUM_NIGHTLY,
  MEDIUM
}

export interface Parameters {
  model: Model
  prompt: string
  maxTokens: number
  temperature?: number
  k?: number
  p?: number
  frecPenalty?: number
  presencePenalty?: number
  stopSequences?: string[]
  returnLikelihoods?: boolean
}

interface Generation {
  id: 'string'
  text: 'string'
}

export interface GenerateResponse {
  id: 'string'
  generations: Generation[]
  prompt: 'string'
}
