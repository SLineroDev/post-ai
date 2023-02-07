<script lang="ts">
	import CopyIcon from '$lib/assets/icons/CopyIcon.svelte';
	import { copy } from 'svelte-copy';
	import Popover from 'svelte-easy-popover';
	import { fade } from 'svelte/transition';

	export let text: string;
	export let spaceAway = 16;
	let copied = false;

	let referenceElement;
</script>

<!-- <button bind:this={referenceElement}>Popover is {isPopoverOpen ? "Opened" : "Closed"}</button>
 -->
<button
	use:copy={text}
	on:svelte-copy={() => {
		copied = true;
		console.log('copied', copied);
	}}
	bind:this={referenceElement}
>
	<CopyIcon />
</button>
<Popover
	triggerEvents={['hover', 'focus']}
	{referenceElement}
	placement="top"
	{spaceAway}
	on:change={({ detail: { isOpen } }) => {
		if (!isOpen) {
			copied = false;
		}
	}}
>
	<div class="popover" in:fade={{ duration: 250 }}>{copied ? 'Copied ✔️' : 'Copy'}</div>
</Popover>

<style>
	.popover {
		font-size: 16px;
		font-weight: 400;
	}

	button:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	button:focus-within {
		outline: none;
		opacity: 0.8;
	}
</style>
