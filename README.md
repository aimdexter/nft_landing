<p align="center">
<img src="logo.png" alt="logo"/>
<p align="center"><a href="https://codeclimate.com/github/aimdexter/Nextjs_starter/maintainability"><img src="https://api.codeclimate.com/v1/badges/9410b1bff8f7f75f418c/maintainability" /></a><br/>
<h3 align="center">NextJS Minimal Starter</h3></p>
</p>

## Contents

- [Developer experience first](#Developer-experience-first)
- [Features](#Built-in-feature-from-Next.js)
- [Philosophy](#Philosophy)
- [Requirements](#Requirements)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)

### Developer experience first:

- 🔥 [Next.js](https://nextjs.org) for Static Site Generator
- 🎨 Integrate with [Tailwind CSS](https://tailwindcss.com)
- 💅 [PostCSS](https://postcss.org) for processing [Tailwind CSS](https://tailwindcss.com)
- ✏️ Linter with [ESLint](https://eslint.org)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 🧪 [Husky](https://storybook.js.org/) You can use it to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports all Git hooks.
- 🧠 [Commitlint](https://commitlint.js.org/) helps your team adhere to a commit convention
- 📕 [Storybook](https://storybook.js.org/) for building UI components and pages in isolation.
- 🆚 [.vscode/settings.json](https://code.visualstudio.com/) specific settings that only apply to this project and Debugging support

### Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js and yarn

### Installation

Clone repo:

```sh
git clone https://github.com/aimdexter/Nextjs_starter
cd Nextjs_starter
```

Make it your own:

```sh
rm -rf .git && git init && yarn init
```

> :information_source: This re-initializes the repo and sets up your project.

Install the dependencies:

```sh
yarn install
```

or

```sh
npm install
```

### Development

Start a live-reload development server:

```sh
yarn dev
```

or

```sh
npm run dev
```

Generate a production build:

```sh
yarn build
```

or

```sh
npm run build
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

### Deployment

### ▲ Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Faimdexter%2FNextjs_starter) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Faimdexter%2FNextjs_starter)

### ⊚ Deploy on Netlify

[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/aimdexter/Nextjs_starter)

Click this button and it will help you create a new repo, create a new Netlify project, and deploy!

### Contribution

I'm open to contributions & suggestions in making this a lot better :hand:

Made with ♥ by [Aimade Anouar](https://www.aimdexter.com/) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40AimadeAnouar)](https://twitter.com/AnouarAimade)

### License

MIT
