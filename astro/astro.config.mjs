import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";
import vue from '@astrojs/vue';

import monacoEditorPlugin from 'vite-plugin-monaco-editor';

// https://astro.build/config
export default defineConfig({
  site: 'https://adc.github.trendmicro.com',
  base: '/pages/Consumer-Frontend/consumer-tonic-ui',
  integrations: [mdx(), sitemap(), tailwind(), vue()],
  vite: {
    plugins: [
      monacoEditorPlugin({
        languages: ['css', 'html', 'json', 'typescript', 'javascript']
      })
    ],
  }
});
