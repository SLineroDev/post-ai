<script lang="ts">
	import { addKeywordIfValid, isLastCharacterAComma } from '../form.helper';
	import KeywordsList from './KeywordsList.svelte';

	export let keywordList: string[];
	export let keywordsInput: string;

	$: if (isLastCharacterAComma(keywordsInput)) {
		keywordList = addKeywordIfValid(keywordsInput, keywordList);
		keywordsInput = '';
	}

	function addKeyword() {
		keywordsInput += ',';
	}
</script>

<label>
	<span>
		<span>Keywords</span>
		<span class="secondary-label-text">(Comma sepparated)</span>
	</span>
	<input bind:value={keywordsInput} on:keydown={(e) => e.key === 'Enter' && addKeyword()} />
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
