<p class="paragraph">
	<slot />
</p>

<style global>
	.columns {
		display: flex;
		align-items: flex-end;
	}

	@media only screen and (max-width: 1024px) {
		.columns {
			align-items: flex-start;
			flex-direction: column;
		}
	}

	.paragraph {
		font: var(--font-paragraph);
	}

	.paragraph:first-of-type {
		margin-top: 0;
	}

	.col-1 {
		max-width: 800px;
		flex: 1;
	}

	.col-2 {
		margin-left: 20px;
		margin-bottom: 19px;
		max-width: 100%;
	}

	@media only screen and (max-width: 1024px) {
		.col-2 {
			margin-left: 0;
			margin-bottom: 0;
		}
	}
</style>
