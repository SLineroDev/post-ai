<div class="card">
	<slot />
</div>

<style>
	.card {
    display: flex;
    flex-direction: column;
		background: #FAFAFB;
		border-radius: 1.5rem;
    width: 42%;
    height: 500px;
	}

	@media (max-width: 1400px) {
    .card {
      min-width: auto;
    }
  }

  @media (max-width: 1000px) {
		.card {
      width: 600px;
      min-height: 350px;
      height: auto;
		}
	}
  
	@media (max-width: 670px) {
		.card {
			min-width: auto;
      width: 100%;
		}
	}
</style>
