<script lang="ts">
	// TODO: Wait a day then download these:
	// https://www.vecteezy.com/vector-art/3220038-halloween-illustration-set-collection-for-sticker-greeting-cards
	// https://www.vecteezy.com/vector-art/9455114-set-of-cute-halloween-elements-isolated-on-white-background-vector-graphics

	// TYPES
	import type { Component } from 'svelte';

	// STYLES
	import '../global.scss';

	// IMAGES
	import { getRandomInt } from '../utils/random';

	import Image from '$lib/Image.svelte';
	import BatCat from '$lib/icons/BatCat.svelte';
	import Web from '$lib/icons/Web.svelte';
	import Candle from '$lib/icons/Candle.svelte';
	import Hat from '$lib/icons/Hat.svelte';
	import Tombstone from '$lib/icons/Tombstone.svelte';
	import Skull from '$lib/icons/Skull.svelte';
	import GnomeBats from '$lib/icons/GnomeBats.svelte';
	import Broom from '$lib/icons/Broom.svelte';
	import Candy from '$lib/icons/Candy.svelte';
	import Cauldron from '$lib/icons/Cauldron.svelte';
	import Cat from '$lib/icons/Cat.svelte';
	import Ghost from '$lib/icons/Ghost.svelte';
	import Pumpkin from '$lib/icons/Pumpkin.svelte';

	// const images: string[] = [
	// 	'https://clubdevo.com/wp-content/themes/devo-theme/public/images/home-hero-foreground.621c98.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-12-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-22-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-26-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-28-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-29-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-25-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-21-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-20-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-19-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-18-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-17-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-16-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-15-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-14-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-13-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-11-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-9-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-7-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-3-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-2-jpg.webp',
	// 	'https://clubdevo.com/wp-content/uploads/2024/08/press-1-jpg.webp'
	// ];

	type IconImage = {
		id: string;
		component: Component;
	};

	const images: Component[] = [
		Web,
		GnomeBats,
		Candle,
		Hat,
		Tombstone,
		BatCat,
		Broom,
		Candy,
		Cauldron,
		Cat,
		Ghost,
		Pumpkin,
		Skull
	];
	// const images: IconImage[] = [
	// 	{
	// 		id: 'web',
	// 		component: Web
	// 	},
	// 	{
	// 		id: 'gnomeBats',
	// 		component: GnomeBats
	// 	},
	// 	{
	// 		id: 'candle',
	// 		component: Candle
	// 	},
	// 	{
	// 		id: 'hat',
	// 		component: Hat
	// 	},
	// 	{
	// 		id: 'tombstone',
	// 		component: Tombstone
	// 	},
	// 	{
	// 		id: 'batcat',
	// 		component: BatCat
	// 	},
	// 	{
	// 		id: 'broom',
	// 		component: Broom
	// 	},
	// 	{
	// 		id: 'Candy',
	// 		component: Candy
	// 	},
	// 	{
	// 		id: 'cauldrom',
	// 		component: Cauldron
	// 	},
	// 	{
	// 		id: 'Cat',
	// 		component: Cat
	// 	},
	// 	{
	// 		id: 'ghost',
	// 		component: Ghost
	// 	},
	// 	{
	// 		id: 'pumpkin',
	// 		component: Pumpkin
	// 	},
	// 	{
	// 		id: 'skull',
	// 		component: Skull
	// 	}
	// ];

	let imagesToUse: typeof images = $state([...images]);
	let usedImages: typeof images = $state([]);

	const isDisabled = $derived(imagesToUse.length === 0);

	function handleClick() {
		if (isDisabled) return;
		const randomIndex = getRandomInt(0, imagesToUse.length - 1);
		const selectedImage = imagesToUse[randomIndex];

		imagesToUse.splice(randomIndex, 1);
		usedImages.unshift(selectedImage);
	}

	function handleReset() {
		imagesToUse = [...images];
		usedImages = [];
	}

	function handleKeyPress(e: KeyboardEvent) {
		e.preventDefault();

		const { code } = e;
		if (code === 'Space') handleClick();

		if (code === 'KeyR') handleReset();
	}
</script>

<ul>
	{#each usedImages as component, idx}
		<li>
			<Image isFeatured={idx === 0} id="" imageComponent={component} />
		</li>
	{/each}
</ul>
<div class="controls">
	<button onclick={handleClick} disabled={isDisabled}>Next</button>
	<button onclick={handleReset}>Reset</button>
</div>

<pre>
    {JSON.stringify(imagesToUse)}
</pre>
<hr />
<pre>
    {JSON.stringify(usedImages)}
</pre>

<svelte:window onkeypress={handleKeyPress} />

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
				padding-right: 2rem;
				grid-column: 1 / 15;
				grid-row: 1/-1;
			}
		}
	}

	.controls {
		display: none;
		flex: none;
		padding: 1rem;
		background: #fff4;
	}
</style>
