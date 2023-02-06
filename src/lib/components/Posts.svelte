<script lang="ts">
	import Form from './form/Form.svelte';

	let title = 'Posts generator';
	let subtitle = 'Generate a social media post';
</script>

<svelte:head>
	<title>postai - Post Generator</title>
</svelte:head>

<Form {title} {subtitle} />
