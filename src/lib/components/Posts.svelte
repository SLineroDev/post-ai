<script lang="ts">
	import { fade } from 'svelte/transition';
	import Form from './form/Form.svelte';

	let title = 'Posts generator';
	let subtitle = 'Generate a social media post';
</script>

<Form {title} {subtitle} />
