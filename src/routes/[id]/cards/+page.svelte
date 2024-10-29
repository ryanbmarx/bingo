<script lang="ts">
	import type { PageData } from './$types';
	import Board from '$lib/Board.svelte';
	import { getRandomInt } from '$lib/../utils/random';

	let { data }: { data: PageData } = $props();

	let { images = [] } = data;
	console.log(data);
	const PAGES = 50;

	function getRandomImages(quantity = 25) {
		let imagesToUse = [...images];
		let imagesUsed = [];

		for (let i = 0; i < quantity; i++) {
			const randomIndex = getRandomInt(0, imagesToUse.length - 1);
			imagesUsed.push(imagesToUse[randomIndex]);
			imagesToUse.splice(randomIndex, 1);
		}

		return imagesUsed;
	}
</script>

{#each Array(PAGES).fill(0) as sheet, index}
	<div class="sheet" data-sheet-index={index} data-sheet={sheet}>
		{#each Array(4).fill(0) as _}
			{@const images = getRandomImages()}
			<Board {images} />
		{/each}
	</div>
{/each}

<style lang="scss">
	.sheet {
		--border: 2px solid black;

		display: grid;
		gap: 3rem;
		grid-template: repeat(2, minmax(1px, 1fr)) / repeat(2, minmax(1px, 1fr));
		aspect-ratio: 8.5 / 11;
	}

	@media print {
		.sheet {
			print-color-adjust: economy;
			page-break-after: always;
		} /* page-break-after works, as well */
	}
</style>
