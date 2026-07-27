# GemLib

A simple GitHub Pages setup with a GitHub Actions secret.

## Local preview

Open [index.html](index.html) directly in a browser, or serve the folder locally with any static server.

## Deploy to GitHub Pages

1. Add a repository secret named `NOTION_URL` in GitHub:
   - Repository → Settings → Secrets and variables → Actions → New repository secret
   - Value:
     ```text
     https://app.notion.com/p/guillemortiz/GemLib-3aab973e701980e0b3b4ef326f8b79a8
     ```
2. Push this repository to GitHub.
3. Enable GitHub Pages for the repository (Settings → Pages → Source: GitHub Actions).
4. The workflow will replace the placeholder in [index.html](index.html) with the secret value and publish the site.

## Usage

The page loads the protected URL from the GitHub Actions secret at deployment time.
