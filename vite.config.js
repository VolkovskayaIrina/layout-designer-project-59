import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from "path";
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
import pugPlugin from "vite-plugin-pug";

export default defineConfig({
    base: "",
    root: "app",
    build: {
        outDir: path.join(__dirname, "build"),
        rollupOptions: {
            input: {
              appIndex: fileURLToPath(new URL('./app/index.html', import.meta.url)),
              appChat: fileURLToPath(new URL('./app/chat.html', import.meta.url))
            }
        }
    },    
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    plugins: [
        createSvgSpritePlugin({
            symbolId: 'icon-[name]-[hash]'
        }),
        pugPlugin({ localImports: true }, { hello: "world", baseUrl: "/" })
    ]
});
