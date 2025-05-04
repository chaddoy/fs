// scripts/ignore-step.js
// This script is used in Vercel's "Ignored Build Step" configuration.
// It prevents builds unless the PR is targeting `main` or `dev`.

const {
  VERCEL_GIT_PULL_REQUEST_ID, // PR ID if it is a pull request, undefined otherwise
  VERCEL_GIT_PULL_REQUEST_TARGET, // The target branch of the PR (e.g., main or dev)
} = process.env;

const isPR = Boolean(VERCEL_GIT_PULL_REQUEST_ID);
const isTargetMainOrDev =
  VERCEL_GIT_PULL_REQUEST_TARGET === 'main' ||
  VERCEL_GIT_PULL_REQUEST_TARGET === 'dev';

if (isPR && isTargetMainOrDev) {
  console.log(`✅ Building: PR targeting '${VERCEL_GIT_PULL_REQUEST_TARGET}'`);
  process.exit(1); // EXIT 1 → DON'T IGNORE build (i.e. allow it)
}

console.log('⛔ Ignoring build: Not a PR to main or dev.');
process.exit(0); // EXIT 0 → IGNORE build
