<script lang="ts">
	import IdeasAnimation from '$lib/assets/animations/IdeasAnimation.svelte';
	import ThinkAnimation from '$lib/assets/animations/ThinkAnimation.svelte';
	import { fade } from 'svelte/transition';
	import { errorPost, loadingPost, postResult } from '../../stores/result.store';

	let postValue: string;
	let loadingValue: boolean;
	let errorValue: boolean;

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

<div class="results-title"><span>Results</span></div>

<div class="result custom-scroll">
	{#if loadingValue}
		<div class="animation" in:fade>
			<ThinkAnimation />
		</div>
	{:else if !loadingValue && !errorValue && postValue.length > 0}
		<div class="post_result">{postValue}</div>
	{:else if !loadingValue && errorValue}
		<div in:fade>There was an error, pls try again</div>
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
	}
	.results-title {
		display: flex;
		font-size: 20px;
		justify-content: center;
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
		margin-left: 1rem;
		padding-right: 1rem;
		margin-bottom: 2rem;
		max-height: 450px;
		overflow-y: scroll;
	}
	.post_result {
		padding-inline: 1rem;
		white-space: pre-line;
	}

	@media (max-height: 1000px) {
		.result {
			max-height: unset;
		}
	}
</style>
