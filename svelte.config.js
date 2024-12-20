// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	compilerOptions: {
		runes: true
	},
	kit: {
		adapter: adapter({ fallback: '404.html' }),
		prerender: {
			crawl: true,
			entries: ['/halloween']
		}
	}
};

export default config;
