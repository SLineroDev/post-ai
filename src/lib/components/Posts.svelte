<script lang="ts">
	import { fade } from 'svelte/transition';
	import Form from './Form.svelte';

	let title = 'Posts generator';
	let subtitle = 'Generate a social media post';
</script>

<div in:fade>
	<Form {title} {subtitle} />
</div>

