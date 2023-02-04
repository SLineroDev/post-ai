<script lang="ts">
	import { Model } from '../interfaces/cohere';
	import { customCommand, getTopicGeneratorPrompt } from '../services';
	import KeywordsInput from './keywords/KeywordsInput.svelte';

	export let title = 'AI Content Generator';
	export let subtitle = '';

	let keywordList: string[] = [];
	let aiResponse: Promise<string>;

	async function handleClick() {
		aiResponse = customCommand({
			model: Model.COMMAND_XLARGE_NIGHTLY,
			prompt: getTopicGeneratorPrompt(keywordList),
			maxTokens: 200
		});
	}
</script>

<h2>{title}</h2>
<h3>{subtitle}</h3>
<form on:submit|preventDefault>
	<KeywordsInput bind:keywordList />
	<button on:click={handleClick}>Generate</button>
</form>

{#if aiResponse != undefined}
	{#await aiResponse}
		<p>...waiting</p>
	{:then resp}
		<p>{resp}</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
{/if}

<style>
	h3 {
		margin-block: 1rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	button {
		transition: background-color 100ms ease-in-out;
	}

	form > button {
		padding: 1rem 0;
		background: transparent;
		border: 1px solid #ccc;
		border-radius: 0.5rem;
	}

	form > button:hover {
		cursor: pointer;
		background-color: #eee;
		border: 1px solid #333;
	}
</style>
