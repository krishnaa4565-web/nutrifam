# NutriFam QA report

Date: 2026-10-09

## Automated checks

Command: `node --test tests/smoke.test.cjs`

Result: **6 passed, 0 failed**.

Checks cover:
- Food database loads (305 entries in this build).
- Food IDs are unique and required fields/macros are valid, finite, and non-negative.
- Web app manifest parses and its declared PNG icons exist with correct dimensions.
- Service-worker precache files exist and the cache version is bumped.
- `app.js`, `foods.js`, and `sw.js` pass JavaScript syntax checks.
- Main food logging, backup/export, weight logging, and restore paths are present in the app source.

## Code improvements in this build

- Simplified the estimated daily target calculation to remove an unreachable conditional.
- Added more reasonable bounds for optional age/height/weight profile fields.
- Prevented negative/non-finite values in custom-food nutrition inputs.
- Added guards around missing food selections and stronger checks before accepting a backup file.
- Bumped the service-worker cache to `nutrifam-v3` and made the offline HTML fallback scope-aware.
- Added a `.nojekyll` file for GitHub Pages compatibility.

## Important limitation

A full interactive browser test could not be completed in this execution environment because Chromium navigation was blocked by the environment. The checks above are real automated static/data/asset smoke tests, not a claim that every screen has been manually verified. After opening the app locally or on a preview URL, test profile creation, adding/deleting foods, weight logging, backup/restore, and offline reload before relying on it.
