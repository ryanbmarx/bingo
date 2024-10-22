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
	<span>{props.id}</span>
</div>

<style lang="scss">
	div {
		outline: 1px solid red;
		height: 100%;
		position: relative;

		span {
			display: block;
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
		}
	}
</style>
