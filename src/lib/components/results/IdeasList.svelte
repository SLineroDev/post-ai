<script lang="ts">
	import Copy from '../Copy.svelte';
	import PostFromIcon from '../PostFromIcon.svelte';
	export let ideasList: string[];

	function removeIdeasNumber(idea: string): string {
		const dotIndex = idea.indexOf('.');
		if (dotIndex <= 2) idea = idea.slice(dotIndex + 1); //1. 2. ... 12.
		return idea.trim();
	}
</script>

<div class="ideas-container">
	{#each ideasList as idea, i}
		<div class="idea">
			<span class="order">{i + 1}.</span>
			<div class="idea_content">
				<span>{removeIdeasNumber(idea)}</span>
				<div class="idea_buttons">
					<Copy text={removeIdeasNumber(idea)} />
					<PostFromIcon idea={removeIdeasNumber(idea)} />
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.ideas-container {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		min-height: 100%;
		width: 100%;
	}

	.idea {
		display: flex;
		gap: 1em;
		align-items: center;
	}

	.order {
		color: #6455a8;
		width: 14px;
		font-weight: 700;
	}

	.idea_content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1em;
		color: #6455a8;
		font-size: 14px;
		background-color: white;
		border-radius: 1rem;
		flex: 1;
		padding: 1em;
	}
	.idea_buttons {
		display: flex;
		gap: 0.5em;
		fill: #6455a8;
	}

	@media (max-height: 1000px) {
		.ideas-container {
			min-height: 400px;
		}
	}
</style>
