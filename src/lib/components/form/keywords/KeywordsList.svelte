<script lang="ts">
	import CloseIcon from '$lib/assets/icons/CloseIcon.svelte';
	import { crossFadeAnimation } from '$lib/utils/animations';
	export let keywordList: string[];

	const [send, receive] = crossFadeAnimation();

	function removeKeyword(keyword: string) {
		keywordList = keywordList.filter((k) => k !== keyword);
	}
</script>

<div class="keyword-list">
	{#each keywordList as keyword (keyword)}
		<span class="keyword" in:receive|local={{ key: keyword }} out:send|local={{ key: keyword }}>
			<span class="keyword_content">
				{keyword}
			</span>
			<span
				class="keyword_remove"
				on:click={() => removeKeyword(keyword)}
				on:keydown={(e) => console.log(e)}
			>
				<CloseIcon />
			</span>
		</span>
	{/each}
</div>

<style>
	.keyword-list {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-top: 3rem;
	}

	.keyword {
		border-radius: 12px;
		display: flex;
		background-color: #e0e4ff;
		gap: 0.5rem;
		font-size: 14px;
		padding: 0.5rem 1rem;
		color: #6455a8;
		font-weight: 700;
	}

	.keyword_remove {
		background: transparent;
		border: none;
		border-radius: 0.5rem;
		width: 12px;
		height: 12px;
		align-self: center;
	}

	.keyword_remove:hover {
		cursor: pointer;
		color: #463887;
	}
</style>
