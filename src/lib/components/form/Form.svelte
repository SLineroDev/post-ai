<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function generate() {
		dispatch('generate');
	}
</script>

<form on:submit|preventDefault>
	<slot />
	<button on:click={generate}>Generate</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
		gap: 2rem;
	}

	button {
		transition: background-color 150ms ease-in-out;
	}

	form > button {
		padding: 1rem 0;
		color: white;
		font-weight: 700;
		background-color: #ff6263;
		border-radius: 30px;
	}

	form > button:hover {
		cursor: pointer;
		background-color: #e04646;
	}
</style>
