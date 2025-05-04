// ignore-step.js
// This script is used in Vercel's "Ignored Build Step" configuration.
// It ensures that builds and deployments only occur for PRs targeting `main` or `dev`.

const {
  VERCEL_BRANCH, // The branch being built
  VERCEL_ENV, // The environment being deployed (e.g., "production", "preview", or "development")
  VERCEL_GIT_PULL_REQUEST_ID, // PR ID if it is a pull request, undefined otherwise
  VERCEL_GIT_PULL_REQUEST_TARGET, // The target branch of the PR (e.g., main or dev)
} = process.env;

// Allow builds only for PRs targeting `main` or `dev`
if (
  VERCEL_GIT_PULL_REQUEST_ID && // Check if it's a pull request
  (VERCEL_GIT_PULL_REQUEST_TARGET === 'main' ||
    VERCEL_GIT_PULL_REQUEST_TARGET === 'dev')
) {
  console.log(
    `Building and deploying for PR targeting: ${VERCEL_GIT_PULL_REQUEST_TARGET}`
  );
  process.exit(1); // Exit with 1 to proceed with the build
}

// Skip all other builds
console.log('Skipping build. This is not a PR targeting main or dev.');
process.exit(0); // Exit with 0 to skip the build
