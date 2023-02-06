<script lang="ts">
	import { generateIdeas } from '$lib/services';
	import { error, ideasList, loading } from '../../stores/result.store';
	import { addKeywordIfValid } from './form/form.helper';
	import Form from './form/Form.svelte';
	import KeywordsInput from './form/keywords/KeywordsInput.svelte';

	let title = 'Now let\'s start generating the next post!';
	let subtitle = 'For example sport, food or money';
	let keywordsInput: string = '';
	let keywordList: string[] = [];

	function handleGenerate() {
		loading.set(true);
		error.set(false);
		if (keywordsInput) {
			keywordList = addKeywordIfValid(keywordsInput, keywordList);
			keywordsInput = '';
		}
		generateIdeas(keywordList)
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

<svelte:head>
	<title>postai - Ideas Generator</title>
</svelte:head>
<h2>{title}</h2>
<h3>{subtitle}</h3>
<Form on:generate={handleGenerate}>
	<KeywordsInput bind:keywordsInput bind:keywordList />
</Form>

<style>
	h2 {
		font-size: 24px;
		font-weight: 700;
		color: #6455a8;
	}
	h3 {
		margin-top: 0.25rem;
		margin-bottom: 2rem;
		color: #FF6263;
		opacity: 0.75;
		font-size: 20px;
	}
</style>
