import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [ vue(), VitePWA({
        registerType: "prompt",
        injectRegister: false,

        pwaAssets: {
            disabled: false,
            config: true
        },

        manifest: {
            name: "Mr. Krabs Simulator",
            short_name: "Mr Krabs Sim",
            description: "A game about Mr. Krabs (who likes money)",
            theme_color: "#ff0000"
        },

        workbox: {
            globPatterns: [ "**/*.{js,css,html,svg,png,ico,ogg,webp,webm}" ],
            cleanupOutdatedCaches: true,
            clientsClaim: true
        },

        devOptions: {
            enabled: false,
            navigateFallback: "index.html",
            suppressWarnings: true,
            type: "module"
        },
        base: "/MrKrabsSimulator/"
    }) ],
    base: "/MrKrabsSimulator/"
})
