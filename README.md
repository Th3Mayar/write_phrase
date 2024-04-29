# Game Write Phrase 

<p style="text-align:center;">Project create by <b>(Th3Mayar)</b></p>

![Game Write Phrase Logo](./public/GameWritePNG.svg)

Game Write Phrase es un juego divertido que desafía tus habilidades de escritura. Escribe la frase mostrada lo más rápido y preciso posible para ganar puntos y desbloquear nuevos niveles.

## 🚀 Cómo Empezar

Puedes comenzar clonando este repositorio y luego instalando las dependencias con el siguiente comando:

```sh
npm install
```

## 📂 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── library
│   │     └── timerMin.js
│   └── favicon.svg
│   └── GameWrite.svg
│   └── GameWritePNG.svg
├── src/
│   ├── components/
│   │   └── Footer.astro
│   │   └── Phrase.tsx
│   │   └── startButton.js
│   │   └── TimerGame.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── game.astro
│       └── index.astro
│   └── stores/
│       └── Phrase.ts
│   └── types/
│       └── types.d.ts
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

2024 Write Phrase Game By Th3Mayar. Open Source
