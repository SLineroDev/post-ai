<script lang="ts">
	import { customCommand } from '../../services';
	import { addKeywordIfValid } from './form.helper';
	import KeywordsInput from './keywords/KeywordsInput.svelte';

	export let title = 'AI Content Generator';
	export let subtitle = '';

	let keywordsInput: string = '';
	let keywordList: string[] = [];
	let aiResponse: Promise<string[]>;

	function handleClick() {
		if (keywordsInput){
			addKeywordIfValid(keywordsInput, keywordList)
		}
		aiResponse = customCommand(keywordList);
	}
</script>

<h2>{title}</h2>
<h3>{subtitle}</h3>
<form on:submit|preventDefault>
	<KeywordsInput bind:keywordsInput bind:keywordList />
	<button on:click={handleClick}>Generate</button>
</form>

{#if aiResponse != undefined}
	{#await aiResponse}
		<p>...waiting</p>
	{:then ideasList}
		{#each ideasList as idea}
			<div>{idea}</div>
		{/each}
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
