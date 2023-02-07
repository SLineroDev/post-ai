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
<footer>
	<div>
		Developed by <span>
			<a href="https://github.com/SLineroDev" target="_blank" rel="noopener noreferrer">
				sLinerodev
			</a>
		</span>
		. Designed by
		<span>
			<a
				href="https://angiestone.notion.site/angiestone/Hola-Soy-Angie-1b59583e622b43af91961fdda089a0af"
				target="_blank"
				rel="noopener noreferrer"
			>
				AngieStoneArt
			</a>
		</span>
	</div>
	<div>
		Using <a href="https://cohere.ai/" target="_blank" rel="noopener noreferrer">Cohere Api</a>
		. For the
		<a
			href="https://github.com/midudev/midu-cohere-hackathon"
			target="_blank"
			rel="noopener noreferrer"
		>
			Midudev´s hackathon
		</a>
	</div>
</footer>

<style>
	header {
		display: flex;
		justify-content: center;
		padding-top: 2rem;
	}
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		gap: 2rem;
		padding: 1rem 1.5rem;
	}

	@media (max-width: 1100px) {
		main {
			flex-direction: column;
		}
	}

	@media (max-width: 655px) {
		main {
			margin: 0;
		}
	}
	footer {
		color: #6455a8;
		font-size: 12px;
		text-align: center;
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	footer a {
		color: #cd2d2d;
	}
</style>
