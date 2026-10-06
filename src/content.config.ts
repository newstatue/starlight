import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import {glob} from "astro/loaders";

const home = defineCollection({
	loader: glob({
		base: './src/data/home',
		pattern: 'index.md',
	}),
})

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema()
	}),
	home: home,
};
