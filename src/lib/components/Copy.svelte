<script lang="ts">
	import { fade } from 'svelte/transition';

	import { copy } from 'svelte-copy';
	import Popover from 'svelte-easy-popover';
	import CopyIcon from '$lib/assets/icons/CopyIcon.svelte';

	export let text: string;

	let popoverText = 'Copy';
	let copied: boolean = false;

	let referenceElement;
</script>

<!-- <button bind:this={referenceElement}>Popover is {isPopoverOpen ? "Opened" : "Closed"}</button>
 -->
<span
	use:copy={text}
	on:svelte-copy={(event) => {
		copied = true;
		console.log('copied', copied);
	}}
	bind:this={referenceElement}
>
	<CopyIcon />
</span>
<Popover
	triggerEvents={['hover', 'focus']}
	{referenceElement}
	placement="top"
	spaceAway={16}
	on:change={({ detail: { isOpen } }) => {
		if (!isOpen) {
			copied = false;
		}
	}}
>
	<div transition:fade={{ duration: 250 }}>{copied ? 'Copied ✔️' : 'Copy'}</div>
</Popover>

<style>
	span:hover {
		cursor: pointer;
		opacity: 0.8;
	}
</style>
