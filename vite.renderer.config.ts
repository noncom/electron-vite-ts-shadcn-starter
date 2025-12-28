import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
    plugins: [viteReact({}), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
