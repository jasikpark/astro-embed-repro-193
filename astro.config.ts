import mdx from "@astrojs/mdx";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  // dist: './dist',       // When running `astro build`, path to final static output
  // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  site: "https://www.defined.net",
  redirects: {
    // Also copied to `_redirects` for better redirect on Cloudflare.
    "/unplugged": {
      destination: "/?utm_source=unplugged-podcast&utm_medium=podcast",
      status: 302,
    },
  },
  scopedStyleStrategy: "where",
  prefetch: {
    prefetchAll: true,
  },
  integrations: [mdx()],
  experimental: {
    responsiveImages: true,
  },
});
