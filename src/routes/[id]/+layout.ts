import { icons } from '../../constants/icons';
import { titles } from '../../constants/titles';

export const prerender = true;
export const trailingSlash = 'always';

export function load({ params }) {
	const { id } = params;

	if (!icons[id]) throw new Error(`Game id of "${id}" not found`);
	if (!icons[id].length) throw new Error(`Game id "${id}" has no images`);

	const images = icons[id];

	return {
		pageTitle: titles[id],
		images
	};
}
