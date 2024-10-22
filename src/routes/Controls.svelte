<script lang="ts">
	type Props = {
		isDisabled: boolean;
		handleNext: () => void;
		handleReset: () => void;
	};
	let { isDisabled = false, handleNext, handleReset }: Props = $props();
	let isOpen = $state(false);

	function toggleVisibility() {
		isOpen = !isOpen;
	}
</script>

<div class="controls" role="toolbar" class:open={isOpen}>
	<button onclick={handleNext} disabled={isDisabled}>Next image</button>
	<button onclick={handleReset}>Reset images</button>
	<button class="toggle" onclick={toggleVisibility} aria-label="Toggle controls"></button>
</div>

<style lang="scss">
	.controls {
		padding: 1rem;
		background: #888;

		display: flex;
		gap: 1rem;

		position: absolute;
		bottom: 0;
		right: 0;

		translate: 0 100%;

		transition: translate 75ms ease-in-out;

		&.open {
			translate: 0 0;
		}

		.toggle {
			position: absolute;
			bottom: 100%;
			right: 2rem;

			height: 4rem;
			width: 2rem;
			border: none;
			border-radius: 13vw 13vw 0 0;
			background-color: inherit;

			rotate: 3deg;
			translate: 0 10px;

			&::after {
				content: 'R.I.P.';
				text-align: center;
				position: absolute;
				top: 1rem;
				left: 50%;
				translate: -50% 0;
			}
		}
		button {
			color: white;
			background-color: transparent;
			border: none;
			padding: 1.5rem;
			text-transform: uppercase;
			cursor: pointer;
			border: 1px solid currentColor;

			&[disabled] {
				opacity: 0.2;
				cursor: not-allowed;
			}
		}
	}
</style>
