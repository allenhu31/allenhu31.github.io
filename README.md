# Allen Hu Portfolio Site

Personal portfolio site built with Astro and ready for GitHub Pages.

## Local Development

```powershell
npm install
npm run dev
```

## Build

```powershell
npm run build
```

## Deploy to GitHub Pages

1. Create a GitHub repository named `your-github-username.github.io` for a user site, or any repository name for a project site.
2. Push this project to the repository.
3. In GitHub, open `Settings -> Pages` and set `Source` to `GitHub Actions`.
4. Update `astro.config.mjs` with your real GitHub Pages URL.
5. Update the placeholder profile links in `src/pages/index.astro`.

The workflow in `.github/workflows/deploy.yml` builds and publishes the site whenever you push to `main`.
