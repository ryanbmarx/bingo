<script lang="ts">
	// TODO: Wait a day then download these:
	// https://www.vecteezy.com/vector-art/3220038-halloween-illustration-set-collection-for-sticker-greeting-cards
	// https://www.vecteezy.com/vector-art/9455114-set-of-cute-halloween-elements-isolated-on-white-background-vector-graphics

	// https://www.vecteezy.com/vector-art/3057106-halloween-background-haunted-zombie-shadow-vector-illustration

	// UTILS
	import { getRandomInt } from '$lib/../utils/random';
	import type { PageData } from './$types';

	// COMPONENTS
	import Foreground from './Foreground.svelte';
	import Controls from '$lib/Controls.svelte';
	import Image from '$lib/Image.svelte';
	import House from '$lib/House.svelte';
	import Witch from '$lib/Witch.svelte';

	let { data } = $props();
	let { images = [], pageTitle = 'Bingo' }: PageData = data;

	let imagesToUse: typeof images = $state([...images]);
	let usedImages: typeof images = $state([]);
	let isDisabled = $derived(imagesToUse.length === 0);

	$effect(() => {});

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
</script>

<ul>
	{#each usedImages as { id, Component }, idx (id)}
		<li>
			<Image isFeatured={idx === 0} {id} ImageComponent={Component} />
		</li>
	{/each}
</ul>

<Witch />
<House />
<Foreground />

<Controls {handleNext} {handleReset} {isDisabled} />

<svelte:window onkeypress={handleKeyPress} />
<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<style lang="scss">
	ul {
		margin: 0;
		list-style: none;
		padding: var(--gap);

		display: grid;
		grid-template: repeat(6, minmax(1px, 1fr)) / repeat(26, minmax(1px, 1fr));
		gap: var(--gap);
		align-items: center;

		position: absolute;
		inset: 0;
		height: 100%;
		width: 100%;

		max-width: 1580px;
		margin: 0 auto;

		li {
			grid-column: span 2;
			:global(svg) {
				height: 100%;
				max-height: 130px;
			}
			&:first-child {
				// Make the first one large and featured
				align-self: start;
				padding: 2rem;
				grid-column: 1 / 15;
				grid-row: 1/-1;

				:global(.featured svg) {
					position: relative;
					z-index: 100;
					max-height: unset;
				}
			}
		}
	}

	.foreground {
		width: 100%;
		min-height: 10rem;
		position: fixed;
		bottom: 0;
		left: 0;
		overflow: hidden;
		display: flex;

		svg {
			margin-top: auto;
			display: block;
		}
	}
</style>
