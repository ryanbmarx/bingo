<script lang="ts">
	// STYLES
	import '$lib/../global.scss';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Creepster&display=swap" rel="stylesheet" />
</svelte:head>

{@render children()}
