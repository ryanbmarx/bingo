import Banner from '$lib/icons/Banner.svelte';
import Bat from '$lib/icons/Bat.svelte';
import BatCat from '$lib/icons/BatCat.svelte';
import Broom from '$lib/icons/Broom.svelte';
import Candle from '$lib/icons/Candle.svelte';
import Candleabra from '$lib/icons/Candleabra.svelte';
import Candy from '$lib/icons/Candy.svelte';
import CandyCorn from '$lib/icons/CandyCorn.svelte';
import Castle from '$lib/icons/Castle.svelte';
import Cat from '$lib/icons/Cat.svelte';
import CatPumpkin from '$lib/icons/CatPumpkin.svelte';
import Cauldron from '$lib/icons/Cauldron.svelte';
import Coffin from '$lib/icons/Coffin.svelte';
import Crow from '$lib/icons/Crow.svelte';
import CrystalBall from '$lib/icons/CrystalBall.svelte';
import Drink from '$lib/icons/Drink.svelte';
import Frankenstein from '$lib/icons/Frankenstein.svelte';
import Ghost from '$lib/icons/Ghost.svelte';
import GnomeBats from '$lib/icons/GnomeBats.svelte';
import Hat from '$lib/icons/Hat.svelte';
import MexicoSkull from '$lib/icons/MexicoSkull.svelte';
import Moon from '$lib/icons/Moon.svelte';
import Owl from '$lib/icons/Owl.svelte';
import Potion from '$lib/icons/Potion.svelte';
import Pumpkin from '$lib/icons/Pumpkin.svelte';
import Skull from '$lib/icons/Skull.svelte';
import Tombstone from '$lib/icons/Tombstone.svelte';
import Tree from '$lib/icons/Tree.svelte';
import Web from '$lib/icons/Web.svelte';

export function load() {
	return {
		pageTitle: "Halloween bingo with Ms. Messina's 5th grade class",
		images: [
			{
				id: 'MexicoSkull',
				component: MexicoSkull
			},
			{
				id: 'banner',
				component: Banner
			},
			{
				id: 'candyCorn',
				component: CandyCorn
			},
			{
				id: 'potion',
				component: Potion
			},
			{
				id: 'frankenstein',
				component: Frankenstein
			},
			{
				id: 'tree',
				component: Tree
			},
			{
				id: 'coffin',
				component: Coffin
			},
			{
				id: 'castle',
				component: Castle
			},
			{
				id: 'candleabra',
				component: Candleabra
			},
			{
				id: 'Owl',
				component: Owl
			},
			{
				id: 'Moon',
				component: Moon
			},
			{
				id: 'Drink',
				component: Drink
			},
			{
				id: 'CrystalBall',
				component: CrystalBall
			},
			{
				id: 'crow',
				component: Crow
			},
			{
				id: 'web',
				component: Web
			},
			{
				id: 'cat-pumpkin',
				component: CatPumpkin
			},
			{
				id: 'bat',
				component: Bat
			},
			{
				id: 'gnomeBats',
				component: GnomeBats
			},
			{
				id: 'candle',
				component: Candle
			},
			{
				id: 'hat',
				component: Hat
			},
			{
				id: 'tombstone',
				component: Tombstone
			},
			{
				id: 'batcat',
				component: BatCat
			},
			{
				id: 'broom',
				component: Broom
			},
			{
				id: 'candy',
				component: Candy
			},
			{
				id: 'cauldrom',
				component: Cauldron
			},
			{
				id: 'cat',
				component: Cat
			},
			{
				id: 'ghost',
				component: Ghost
			},
			{
				id: 'pumpkin',
				component: Pumpkin
			},
			{
				id: 'skull',
				component: Skull
			}
		]
	};
}
