<script lang="ts">
	import ErrorAnimation from '$lib/assets/animations/ErrorAnimation.svelte';
	import IdeasAnimation from '$lib/assets/animations/IdeasAnimation.svelte';
	import PostAnimation from '$lib/assets/animations/PostAnimation.svelte';
	import { fade } from 'svelte/transition';
	import { errorPost, loadingPost, postResult } from '../../../stores/result.store';
	import Copy from '../Copy.svelte';

	let postValue: string;
	let loadingValue: boolean;
	let errorValue: boolean;

	function showPost() {
		return !loadingValue && !errorValue && postValue.length > 0;
	}

	postResult.subscribe((value) => {
		postValue = value;
	});
	loadingPost.subscribe((value) => {
		loadingValue = value;
	});
	errorPost.subscribe((value) => {
		errorValue = value;
	});
</script>

<div class="results-title">
	{#if showPost()}
		<span class="spacer" />
	{/if}
	<span>Results</span>
	{#if showPost()}
		<span>
			<Copy text={postValue} spaceAway={6} />
		</span>
	{/if}
</div>

<div class="result custom-scroll">
	{#if loadingValue}
		<div class="animation" in:fade>
			<PostAnimation />
		</div>
	{:else if showPost()}
		<div class="post_result" in:fade>{postValue}</div>
	{:else if !loadingValue && errorValue}
		<div class="animation" in:fade>
			<ErrorAnimation />
		</div>
	{:else}
		<div class="animation" in:fade>
			<IdeasAnimation />
		</div>
	{/if}
</div>

<style>
	.animation {
		display: flex;
		justify-content: center;
		margin: 2px;
	}
	.results-title {
		display: flex;
		font-size: 20px;
		justify-content: space-around;
		align-items: flex-end;
		height: 60px;
		border-bottom: 2px solid #6455a88b;
		color: #6455a8;
		font-weight: 700;
	}
	.results-title span {
		padding-bottom: 10px;
	}

	.result {
		flex: 1;
		margin-top: 1rem;
		padding-left: 1rem;
		padding-right: 1rem;
		margin-bottom: 1rem;
		max-height: 450px;
		overflow-y: scroll;
	}
	.post_result {
		padding-inline: 1rem;
		white-space: pre-line;
		line-height: 1.5;
	}

	@media (max-height: 1000px) {
		.result {
			max-height: unset;
		}
	}
</style>
