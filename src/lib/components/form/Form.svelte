<script lang="ts">
	import { ideasList, error, loading } from '../../../stores/result.store';
	import { customCommand } from '../../services';
	import { addKeywordIfValid } from './form.helper';
	import KeywordsInput from './keywords/KeywordsInput.svelte';

	export let title = 'AI Content Generator';
	export let subtitle = '';

	let keywordsInput: string = '';
	let keywordList: string[] = [];

	function handleClick() {
		loading.set(true);
		error.set(false);
		if (keywordsInput) {
			addKeywordIfValid(keywordsInput, keywordList);
		}
		customCommand(keywordList)
			.then((resp: string[]) => {
				ideasList.set(resp);
			})
			.catch((e) => {
				error.set(true);
			})
			.finally(() => {
				loading.set(false);
			});
	}
</script>

<h2>{title}</h2>
<h3>{subtitle}</h3>
<form on:submit|preventDefault>
	<KeywordsInput bind:keywordsInput bind:keywordList />
	<button on:click={handleClick}>Generate</button>
</form>

<style>
	h2 {
		font-size: 24px;
		font-weight: 700;
		color: #6455a8;
	}
	h3 {
		margin-top: 0.25rem;
		margin-bottom: 2rem;
		color: #6455a8;
		opacity: 0.75;
		font-size: 20px;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
		gap: 1rem;
	}

	button {
		transition: background-color 150ms ease-in-out;
	}

	form > button {
		padding: 0.5rem 0;
		color: white;
		font-weight: 700;
		background-color: #ff6263;
		border-radius: 30px;
	}

	form > button:hover {
		cursor: pointer;
		background-color: #e04646;
	}
</style>
