# Deploying to Vercel

The project is a React app (TanStack Start + Vite). `vercel.json` in the project root
already contains everything Vercel needs.

## Steps

1. In Lovable, open the Plus (+) menu in the chat input → **GitHub** → **Create Repository**.
2. Go to [vercel.com/new](https://vercel.com/new) and import that repository.
3. Leave every build setting as-is — `vercel.json` sets them:
   - Build command: `npm run build`
   - Output directory: `.vercel/output`
   - Build env var: `NITRO_PRESET=vercel`
4. Click **Deploy**.

## Environment variables

Anything the app reads at runtime (for example values starting with `VITE_`) must be
added again in Vercel under **Project → Settings → Environment Variables**.

Every later push to the repository redeploys automatically.
