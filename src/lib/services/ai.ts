import type { GenerateResponse, Parameters } from 'src/interfaces/cohere'

const COHERE_API_KEY = 'AcyitJaQynnxhLqxuTNhGAaDY5TR3TvTzWPmaY3c'
const COHERE_API_GENERATE_URL = 'https://api.cohere.ai/generate'
const COHERE_API_DETECT_LANGUAGE_URL = 'https://api.cohere.ai/detect-language'

function buildData(parameters: Parameters ) {
    return {
        model: parameters.model || 'command-xlarge-nightly',
        prompt: parameters.prompt,
        max_tokens: parameters.maxTokens || 220,
        temperature: parameters.temperature || 1,
        k: parameters.k || 0,
        p: parameters.p || 0.75,
        frequency_penalty: parameters.frecPenalty || 0,
        presence_penalty: parameters.presencePenalty || 0,
        stop_sequences: parameters.stopSequences || [],
        return_likelihoods: parameters.returnLikelihoods ||  'NONE'
    }
}

const headers = {
    Authorization: `BEARER ${COHERE_API_KEY}`,
    'Content-Type': 'application/json',
    'Cohere-Version': '2022-12-06'
}

export async function isEnglish(input: string) {
    const data = {
        texts: [input]
    }

    const { results } = await fetch(COHERE_API_DETECT_LANGUAGE_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    }).then((res) => res.json())

    const [{ language_code }] = results
    return language_code === 'en'
}

export async function customCommand(parameters: Parameters) {
    const data = buildData(parameters)
    const response: GenerateResponse = await fetch(COHERE_API_GENERATE_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    }).then(res => res.json())
    return response.generations[0].text
}
