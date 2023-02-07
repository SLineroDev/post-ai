<script lang="ts">
	import { addKeywordIfValid, isLastCharacterAComma } from '../form.helper';
	import KeywordsList from './KeywordsList.svelte';

	export let keywordList: string[];
	export let keywordsInput: string;

	$: if (isLastCharacterAComma(keywordsInput)) {
		keywordList = addKeywordIfValid(keywordsInput.slice(0, -1), keywordList);
		keywordsInput = '';
	}

	function addKeyword() {
		keywordsInput += ',';
	}
</script>

<div>
	<label>
		<input
			bind:value={keywordsInput}
			on:keydown={(e) => e.key === 'Enter' && addKeyword()}
			placeholder="Insert your keywords. Ex: sport, food, money"
		/>
	</label>
	<KeywordsList bind:keywordList />
</div>

<style>
	label {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	input::placeholder {
		color: #cecece;
	}
	input:hover {
		cursor: text;
	}

	input {
		border-bottom: 2px solid #ff6263;
		line-height: 1.3;
		font-size: 18px;
		color: #6455a8;
		font-weight: 700;
		width: 100%;
		padding: 0.125rem 0.5rem;
		caret-color: #ff6263;
	}
</style>
