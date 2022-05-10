import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  server: {
    port: 3030,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        index: new URL("./index.html", import.meta.url).pathname,
        settings: new URL("./settings.html", import.meta.url).pathname,
        user: new URL("./users.html", import.meta.url).pathname,
      },
    },
  },
  css: {
    devSourcemap: true,
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "partials"),
    }),
  ],
};

export default config;