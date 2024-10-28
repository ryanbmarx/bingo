import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => {
	const base = mode === 'development' ? '' : '/bingo/';
	return {
		base,
		plugins: [sveltekit()],
		build: {
			chunkSizeWarningLimit: 1000 // This is huge, but our usecase is very limited so it is ok.
		},
		resolve: {
			alias: {
				$src: './src'
			}
		}
	};
});
