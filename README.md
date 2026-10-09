# NutriFam — Family Nutrition Tracker (PWA)
Static app, no build step, no backend. Data is stored in the browser IndexedDB.

## Run locally
    npx serve .   (or: python3 -m http.server 8080)
Open http://localhost:8080

## Deploy (HTTPS needed for install + offline)
Upload this folder to Netlify / Vercel / Cloudflare Pages / GitHub Pages. Open once online, then Install / Add to Home Screen. It then works offline.

## Backup & restore
Settings > Backup (JSON) saves everything; Settings > Restore loads it (asks first). Data is NOT synced across devices and is erased if browser data is cleared.

## Automated checks
Run the included smoke tests from this folder with:

```sh
node --test tests/smoke.test.cjs
```

The checks validate the food catalogue and nutrition fields, unique food IDs, manifest/icon files, service-worker precache paths, JavaScript syntax, and presence of key logging/backup paths. These are automated static/smoke checks; also manually test the UI in your target browser before relying on it.

## Notes
- Nutrition values are estimates for the listed serving sizes; portions and recipes vary.
- For anyone under 18, calorie needs vary with growth and development. The app does not recommend a calorie deficit for minors; discuss weight-related goals with a qualified clinician or dietitian.
- Keep JSON backups in a safe place. Backups may contain names and health-related tracking data.
