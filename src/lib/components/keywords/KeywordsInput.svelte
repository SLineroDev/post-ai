<script lang="ts">
	import { crossFadeAnimation } from '$lib/utils/animations';
	import { isAlreadyInTheList, isLastCharacterAComma } from './KeywordsInput';
	import KeywordsList from './KeywordsList.svelte';

	export let keywordList: string[];
	let keywordsInput: string = '';

	$: if (isLastCharacterAComma(keywordsInput)) {
		const newKeyword = keywordsInput.slice(0, -1).trim();
		keywordsInput = '';
		if (!isAlreadyInTheList(newKeyword, keywordList)) keywordList = [...keywordList, newKeyword];
	}
</script>

<label>
	<span>
		<span>Keywords</span>
		<span class="secondary-label-text">(Comma sepparated)</span>
	</span>
	<input bind:value={keywordsInput} on:keydown={(e) => e.key === 'Enter'} />
</label>
<KeywordsList bind:keywordList />

<style>
	label {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	label span {
		display: flex;
		flex-direction: column;
	}

	label .secondary-label-text {
		font-size: 11px;
	}

	input {
		border: 1px solid #ccc;
		border-radius: 0.5rem;
		padding: 0.5rem;
	}
</style>
