<script lang="ts">
	import type { IconImage } from '$lib/../types';

	const {
		images
	}: {
		images: IconImage[];
	} = $props();
</script>

<div class="board">
	<ul class="topper">
		{#each 'BINGO' as letter}
			<li class="creepster">{letter}</li>
		{/each}
	</ul>
	{#each images as { Component }}
		<div class="square">
			<Component />
		</div>
	{/each}
</div>

<style lang="scss">
	.board {
		box-sizing: border-box;
		border: var(--border);
		border-radius: 1rem;
		overflow: hidden;

		display: grid;
		grid-template: auto repeat(5, minmax(1px, 1fr)) / repeat(5, minmax(1px, 1fr));
	}

	.square {
		display: flex;
		align-items: center;
		justify-content: center;
		border: var(--border);
		padding: 0.5rem;
	}
	.topper {
		print-color-adjust: exact;

		display: grid;
		grid-template-columns: subgrid;
		grid-row: 1;
		grid-column: 1/-1;

		list-style: none;
		margin: 0;
		padding: 0;
		background-color: #000;

		li {
			text-align: center;
			text-transform: uppercase;
			padding: 0.25rem;
			color: orange;

			font-family: 'Creepster', system-ui;
			font-weight: 400;
			font-style: normal;
			font-size: 2rem;
		}
	}
</style>
