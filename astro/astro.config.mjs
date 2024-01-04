import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import vue from "@astrojs/vue";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://adc.github.trendmicro.com',
  base: '/pages/Consumer-Frontend/consumer-tonic-ui',
  integrations: [
    react(),
    vue(),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: true
    }),
    starlight({
      title: 'Consumer Tonic UI',
      logo: {
        src: './src/assets/Dark.png'
      },
      favicon: './src/assets/Dark.png',
      customCss: [
        // Path to your Tailwind base styles:
        './src/tailwind.css'
      ],
      social: {
        github: 'https://adc.github.trendmicro.com/Consumer-Frontend/consumer-tonic-ui/tree/dev'
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Get Start',
              link: '/guides/get-start/'
            }
          ]
        },
        {
          label: 'Intro',
          autogenerate: {
            directory: 'intro'
          }
        },
        {
          label: 'Reference',
          autogenerate: {
            directory: 'reference'
          }
        }
      ]
    }),
  ]
});
