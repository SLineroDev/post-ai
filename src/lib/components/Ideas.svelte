<script lang="ts">
	import Form from './form/Form.svelte';

	let title = 'Hey! Start generating your ideas for the next post';
	let subtitle = 'For example sport, food or money';
</script>

<svelte:head>
	<title>postai - Ideas Generator</title>
</svelte:head>

<Form {title} {subtitle} />

