<script lang="ts">
	import { onMount, type ComponentType } from 'svelte';

	let Lottie: ComponentType;

	onMount(async () => {
		Lottie = (await import('./LottiePlayer.svelte')).default;
	});
</script>

<svelte:component this={Lottie} src={'/error.json'} wi />
