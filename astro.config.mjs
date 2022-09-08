import { defineConfig } from "astro/config";
import image from "@astrojs/image";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), svelte()],
  site: "https://rukomoynikov.ru"
});


// import.meta.env.BASE_URL
