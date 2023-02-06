<script>
	import '../app.css';
</script>

<header>
	<h1>SocialMediaAI</h1>
</header>
<main>
	<slot />
</main>

<style>
	h1 {
		padding-top: 1rem;
		font-size: 24px;
		font-weight: 700;
		color: #6455a8;
		text-align: center;
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
</style>
