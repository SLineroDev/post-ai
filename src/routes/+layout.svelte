<script>
	import HeaderTitle from '$lib/assets/HeaderTitle.svelte';
	import '../app.css';
</script>

<header>
	<HeaderTitle />
</header>
<main>
	<slot />
</main>

<style>
	header {
		display: flex;
		justify-content: center;
		padding-top: 2rem;
	}
	main {
		display: flex;
		gap: 2rem;
		margin: auto;
		padding: 1.5rem;
	}

	@media (max-width: 1000px) {
		main {
			flex-direction: column;
		}
	}

	@media (max-width: 655px) {
		main {
			margin: 0;
		}
	}
</style>
