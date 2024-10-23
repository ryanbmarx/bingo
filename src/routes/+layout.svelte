<script lang="ts">
	// TODO: Wait a day then download these:
	// https://www.vecteezy.com/vector-art/3220038-halloween-illustration-set-collection-for-sticker-greeting-cards
	// https://www.vecteezy.com/vector-art/9455114-set-of-cute-halloween-elements-isolated-on-white-background-vector-graphics

	// https://www.vecteezy.com/vector-art/3057106-halloween-background-haunted-zombie-shadow-vector-illustration

	// TYPES
	import type { Component } from 'svelte';

	// STYLES
	import '../global.scss';

	// UTILS
	import { getRandomInt } from '../utils/random';

	// COMPONENTS
	import Controls from './Controls.svelte';
	import Image from '$lib/Image.svelte';

	import { page } from '$app/stores';

	type IconImage = {
		id: string;
		component: Component;
	};

	const images: IconImage[] = $page.data.images || [];

	let imagesToUse: typeof images = $state([...images]);
	let usedImages: typeof images = $state([]);

	let pageTitle = $page.data.pageTitle || 'Bingo';
	let isDisabled = $derived(imagesToUse.length === 0);

	function handleNext() {
		if (isDisabled) return;

		const randomIndex = getRandomInt(0, imagesToUse.length - 1);
		const randomImage = imagesToUse[randomIndex];

		imagesToUse.splice(randomIndex, 1);
		usedImages = [randomImage, ...usedImages];
	}

	function handleReset() {
		imagesToUse = [...images];
		usedImages = [];
	}

	function handleKeyPress(e: KeyboardEvent) {
		e.preventDefault();
		const { code } = e;
		if (code === 'Space') handleNext();
		if (code === 'KeyR') handleReset();
	}

	console.log($page);
</script>

<ul>
	{#each usedImages as { id, component }, idx (id)}
		<li>
			<Image isFeatured={idx === 0} {id} imageComponent={component} />
		</li>
	{/each}
</ul>
<Controls {handleNext} {handleReset} {isDisabled} />

<svelte:window onkeypress={handleKeyPress} />
<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>
<slot />

<style lang="scss">
	ul {
		--column-count: 24;
		margin: 0;
		list-style: none;
		outline: 1px solid blue;
		padding: var(--gap);

		display: grid;
		grid-template: repeat(6, minmax(1px, 1fr)) / repeat(var(--column-count), minmax(1px, 1fr));
		gap: var(--gap);

		position: absolute;
		inset: 0;
		height: 100%;
		width: 100%;

		li {
			grid-column: span 2;
			&:first-child {
				// Make the first one large and featured
				padding-right: 2rem;
				grid-column: 1 / 15;
				grid-row: 1/-1;
			}
		}
	}
</style>
