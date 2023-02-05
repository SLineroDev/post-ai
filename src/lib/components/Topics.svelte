<script lang="ts">
	import { fade } from 'svelte/transition';
	import Form from './form/Form.svelte';

	let title = 'Topics ideas generator';
	let subtitle = 'Generate 5 topics ideas for social media posts';
</script>

<div in:fade>
	<Form {title} {subtitle} />
</div>
