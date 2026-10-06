// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import site from './site.config.json' with { type: 'json' }

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: site.title,
			sidebar: site.sidebar,
			lastUpdated: true,
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
		})
	],
});
