# GemLib

A simple GitHub + Vercel deployment example.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy

1. Push this repository to GitHub.
2. Create a Vercel project from that repository.
3. Add these secrets to GitHub Actions:
   - VERCEL_TOKEN
   - VERCEL_ORG_ID
   - VERCEL_PROJECT_ID
4. In the Vercel project, add an environment variable `NOTION_URL` with your Notion page URL (this keeps the URL out of the client-side code).
5. Push to main to trigger deployment.

## Usage

Open the site normally. The page calls the proxy endpoint and the target URL is configured server-side.

### Vercel environment variable

Add this environment variable in Vercel:

```text
NOTION_URL=https://app.notion.com/p/guillemortiz/GemLib-3aab973e701980e0b3b4ef326f8b79a8
```
