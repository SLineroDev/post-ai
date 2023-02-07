<script lang="ts">
	import type { GeneratePostSettings } from '$lib/interfaces/post';
	import { generatePost } from '$lib/services';
	import { errorPost, loadingPost, postResult } from '../../stores/result.store';
	import { ideaToPost } from '../../stores/tab.store';
	import Form from './form/Form.svelte';
	import Select from './form/Select.svelte';

	let title = "Now let's start generating the next post!";

	let postTitle = '';
	ideaToPost.subscribe((value) => {
		postTitle = value;
	});

	let showValidation: boolean = false;

	let toneOptions: string[] = [
		'neutral',
		'formal',
		'informal',
		'fun',
		'romantic',
		'drama',
		'informative'
	];
	let audienceOptions: string[] = [
		'everyone',
		'Z Generation',
		'Millennials',
		'X Generation',
		'Baby Boomers',
		'Silent Gen'
	];
	let socialMediaOptions: string[] = ['Instagram', 'Twitter', 'Facebook', 'LinkedIn'];
	let selectedTone: string = toneOptions[0];
	let selectedAudience: string = audienceOptions[0];
	let selectedSocialMedia: string = socialMediaOptions[0];

	function handleGenerate() {
		if (!postTitle) {
			showValidation = true;
			return;
		}
		showValidation = false;
		loadingPost.set(true);
		errorPost.set(false);
		const postSettings: GeneratePostSettings = {
			title: postTitle,
			tone: selectedTone,
			audience: selectedAudience,
			socialMedia: selectedSocialMedia
		};
		generatePost(postSettings)
			.then((resp: string) => {
				postResult.set(resp);
			})
			.catch((e) => {
				errorPost.set(true);
			})
			.finally(() => {
				loadingPost.set(false);
			});
	}
</script>

<svelte:head>
	<title>postai - Ideas Generator</title>
</svelte:head>
<h2>{title}</h2>
<Form on:generate={handleGenerate}>
	<div class="input">
		<input bind:value={postTitle} placeholder="Insert a title for your post" />
		{#if showValidation}
			<div>The title is mandatory</div>
		{/if}
	</div>
	<div class="select-container">
		<div class="row">
			<Select
				bind:selected={selectedTone}
				label="Tone"
				options={toneOptions}
				leftIconURL="/tone.svg"
			/>
			<Select
				bind:selected={selectedAudience}
				label="Audience"
				options={audienceOptions}
				leftIconURL="/audience.svg"
			/>
		</div>
		<div class="row">
			<Select
				bind:selected={selectedSocialMedia}
				label="Social Media"
				options={socialMediaOptions}
				leftIconURL="/share.svg"
			/>
		</div>
	</div>
</Form>

<style>
	h2 {
		font-size: 24px;
		font-weight: 700;
		color: #6455a8;
	}

	.input > div{
		padding-top: 0.5em;
		color: red;
	}
	input {
		border-bottom: 2px solid #ff6263;
		font-weight: 700;
		width: 100%;
		padding-top: 1.5rem;
		line-height: 1.3;
		color: #ff6263;
		opacity: 0.75;
		font-size: 18px;
	}

	input::placeholder {
		opacity: 0.6;
	}

	.select-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
		flex: 1;
	}

	@media (max-width: 600px) {
		.row {
			flex-direction: column;
		}
		.select-container {
			gap: 1rem;
		}
	}
	.row {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}
</style>
