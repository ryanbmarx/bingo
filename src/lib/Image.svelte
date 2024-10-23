<script lang="ts">
	import type { Component } from 'svelte';
	import { blur, fly } from 'svelte/transition';
	type Props = {
		isFeatured: boolean;
		imageComponent: Component;
		id: string;
	};

	let props: Props = $props();
</script>

<div id={props.id} in:blur={{ duration: 700 }} out:blur={{ duration: 200 }}>
	<props.imageComponent />
</div>

<style lang="scss">
	div {
		height: 100%;
		position: relative;
	}
</style>
