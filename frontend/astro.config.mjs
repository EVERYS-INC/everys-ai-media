import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [],
    resolve: {
      alias: {
        'src': '/src'
      }
    },
    define: {
      'import.meta.env.STRAPI_URL': JSON.stringify(process.env.STRAPI_URL),
      'import.meta.env.STRAPI_MEDIA_URL': JSON.stringify(process.env.STRAPI_MEDIA_URL),
    },
  },
});