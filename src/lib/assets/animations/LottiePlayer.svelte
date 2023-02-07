<script>
	// @ts-nocheck
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

	export let src = '';
	export let height = '400';
	export let width = '400';

	let controlsLayout = [
		'previousFrame',
		'playpause',
		'stop',
		'nextFrame',
		'progress',
		'frame',
		'loop',
		'spacer',
		'background',
		'snapshot',
		'zoom',
		'info'
	];
</script>

<LottiePlayer
	style="display:flex;align-items:center;justify-content: center;"
	{src}
	autoplay={true}
	loop={true}
	controls={false}
	renderer="svg"
	background="transparent"
	{controlsLayout}
	{height}
	{width}
/>
