
# Electron + Vite + TS + ShadCN starter

This project is just a quickstart template for an Electron app.
The project is derived from the corresponding Electron Forge template, but the following changes were made:
- Updated all dependencies to their latest current versions, including TypeScript and Vite.
- Updated the project fully to ESM. This required quite a bit of setup here and there in the config files. See the corresponding section of this readme for more details.
- Added ShadCN, which involved some configuration as well.
- The `index.html` includes some more elements to show that Tailwind styling and ShadCN work. Note that the dark theme is set via the ShadCN theming, by `<body class="dark">` in `index.html`.

If you find anything that can be improved, let me know.

# Known problems:

- I still haven't found a way to make path aliases work in Vite + Electron setup. Because of that the ShadCN components can't rely on the comfy `"@path"` style of paths, and you have to change them to full relative paths in the imports.
- VSCode can show errors in css files like "unknown rule", but that seems to be an editor-only issue that doesn't affect the running program. If there's a fix for that, I have found it yet as well.

# Upgrading an Electron Forge template to use ESM

To make "electron-vite" in Electron Forge work with ESM:

1. In `package.js` do:
```
  "main": ".vite/build/main.cjs",
  "exports": "./.vite/build/main.cjs",
  "type": "module",
```
2. In `tsconfig.json` do:
```
    "target": "ESNext",
    //"module": "commonjs",
    "module": "nodenext",
    "moduleResolution": "nodenext",
```
3. In `vite.main.config.ts` do:
```
	    build: {
        target: "esnext",
        rollupOptions: {
            output: {
                format: 'es',
                entryFileNames: `[name].cjs`,
                chunkFileNames: `[name].cjs`,
            }
        }
    }
```
4. In `vite.preload.config.ts` do:
```
    build: {
        target: "esnext",
        rollupOptions: {
            output: {
                // format: 'es',
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
            }
        }
    }
```
5. And, of course, add file extension in all relative imports across the whole project.