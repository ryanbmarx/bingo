import type { IconImage } from '../types';
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
import RainbowHalloween from '$lib/icons/RainbowHalloween.svelte';
import Boo from '$lib/icons/Boo.svelte';
import RainbowCat from '$lib/icons/RainbowCat.svelte';
import PencilSpider from '$lib/icons/PencilSpider.svelte';

const halloween: IconImage[] = [
	{
		id: 'MexicoSkull',
		Component: MexicoSkull
	},
	{
		id: 'banner',
		Component: Banner
	},
	{
		id: 'candyCorn',
		Component: CandyCorn
	},
	{
		id: 'potion',
		Component: Potion
	},
	{
		id: 'frankenstein',
		Component: Frankenstein
	},
	{
		id: 'tree',
		Component: Tree
	},
	{
		id: 'coffin',
		Component: Coffin
	},
	{
		id: 'castle',
		Component: Castle
	},
	{
		id: 'candleabra',
		Component: Candleabra
	},
	{
		id: 'Owl',
		Component: Owl
	},
	{
		id: 'Moon',
		Component: Moon
	},
	{
		id: 'Drink',
		Component: Drink
	},
	{
		id: 'CrystalBall',
		Component: CrystalBall
	},
	{
		id: 'crow',
		Component: Crow
	},
	{
		id: 'web',
		Component: Web
	},
	{
		id: 'cat-pumpkin',
		Component: CatPumpkin
	},
	{
		id: 'bat',
		Component: Bat
	},
	{
		id: 'gnomeBats',
		Component: GnomeBats
	},
	{
		id: 'candle',
		Component: Candle
	},
	{
		id: 'hat',
		Component: Hat
	},
	{
		id: 'tombstone',
		Component: Tombstone
	},
	{
		id: 'batcat',
		Component: BatCat
	},
	{
		id: 'broom',
		Component: Broom
	},
	{
		id: 'candy',
		Component: Candy
	},
	{
		id: 'cauldrom',
		Component: Cauldron
	},
	{
		id: 'cat',
		Component: Cat
	},
	{
		id: 'ghost',
		Component: Ghost
	},
	{
		id: 'pumpkin',
		Component: Pumpkin
	},
	{
		id: 'skull',
		Component: Skull
	},
	{ id: 'boo', Component: Boo },
	{ id: 'PencilSpider', Component: PencilSpider },
	{ id: 'RainbowCat', Component: RainbowCat },
	{ id: 'RainbowHalloween', Component: RainbowHalloween }
];

export const icons: Record<string, IconImage[]> = {
	halloween
};
