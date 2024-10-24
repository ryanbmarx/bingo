<script lang="ts">
	import type { Component } from 'svelte';
	import moon from '$lib/assets/moon.jpg';

	type Props = {
		isFeatured: boolean;
		imageComponent: Component;
		id: string;
	};

	let props: Props = $props();
</script>

<div class:featured={props.isFeatured} id={props.id} style:--moon={moon}>
	<props.imageComponent />
</div>

<style lang="scss">
	div {
		width: 100%;
		position: relative;
		display: flex;
		align-items: center;
	}

	.featured {
		align-self: flex-start;
		color: #ebefe1;
		aspect-ratio: 1/1;
		border-radius: 50%;

		animation: rise 2.5s 1;
		animation-fill-mode: forwards;
		background: currentColor;

		box-shadow: 0 0 13px currentColor;

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			background: currentColor url('$lib/assets/moon.jpg') center;
			background-size: 110%;
			border-radius: 50%;
			overflow: hidden;
			mix-blend-mode: darken;
			opacity: 0.2;
		}

		:global(svg) {
			position: relative;
			opacity: 0;
			animation: fadeIn 1s 1;
			animation-delay: 2s;
			animation-fill-mode: forwards;
			z-index: 2;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			filter: blur(10px);
			scale: 0.7;
		}
		to {
			opacity: 1;
			filter: blur(0px);
			scale: 0.9;
		}
	}
	@keyframes rise {
		from {
			transform: scale(1.2) translate(-10vw, 100vh);
			opacity: 0.8;
		}
		to {
			transform: scale(1) translate(0, 0);
			opacity: 1;
		}
	}
</style>
