<script lang="ts">
	import IdeasAnimation from '$lib/assets/animations/IdeasAnimation.svelte';
	import ThinkAnimation from '$lib/assets/animations/ThinkAnimation.svelte';
	import { fade } from 'svelte/transition';
	import { errorIdeas, ideasList, loadingIdeas } from '../../stores/result.store';
	import IdeasList from './IdeasList.svelte';

	let ideasListValue: string[];
	let loadingValue: boolean;
	let errorValue: boolean;

	ideasList.subscribe((value) => {
		ideasListValue = value;
	});
	loadingIdeas.subscribe((value) => {
		loadingValue = value;
	});
	errorIdeas.subscribe((value) => {
		errorValue = value;
	});
</script>

<div class="results-title"><span>Results</span></div>

<div class="result custom-scroll" in:fade>
	{#if loadingValue}
		<div class="animation" in:fade>
			<ThinkAnimation />
		</div>
	{:else if !loadingValue && !errorValue && ideasListValue.length > 0}
		<IdeasList ideasList={ideasListValue} />
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
		min-height: 60px;
		border-bottom: 2px solid #6455a88b;
		color: #6455a8;
		font-weight: 700;
	}
	.results-title span {
		padding-bottom: 10px;
	}

	.result {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		max-height: 450px;
		overflow-y: scroll;
	}


</style>
