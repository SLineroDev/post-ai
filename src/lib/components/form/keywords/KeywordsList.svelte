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
		justify-content: flex-end;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.keyword {
		border: 1px solid #ccc;
		border-radius: 0.5rem;
		display: flex;
		gap: 0.25rem;
		font-size: 14px;
		padding: 0.25rem;
	}

	.keyword_remove {
		background: transparent;
		border: none;
		border-radius: 0.5rem;
		width: 12px;
		height: 12px;
		align-self: flex-start;
	}

	.keyword_remove:hover {
		cursor: pointer;
		background-color: #eee;
	}
</style>
