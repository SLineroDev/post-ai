<script lang="ts">
	import NewPostIcon from '$lib/assets/icons/NewPostIcon.svelte';
	import Popover from 'svelte-easy-popover';
	import { fade } from 'svelte/transition';
	import { activeTab, ideaToPost } from '../../stores/tab.store';

	export let idea: string;
	let referenceElement: HTMLSpanElement;

	function handleClick() {
		activeTab.set('Posts');
		ideaToPost.set(idea);
	}
</script>

<button bind:this={referenceElement} on:click={handleClick}><NewPostIcon fill="#ff6263" /></button>

<Popover triggerEvents={['hover', 'focus']} {referenceElement} placement="top" spaceAway={16}>
	<div transition:fade={{ duration: 250 }}>New Post with this Idea</div>
</Popover>

<style>
	div {
		font-weight: 400;
		color: #ff6263;
	}

	button:hover {
		cursor: pointer;
		opacity: 0.8;
	}

  button:focus-within{
    outline: none;
    opacity: 0.8;
  }
</style>
