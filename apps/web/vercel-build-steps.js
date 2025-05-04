// ignore-step.js
// This script is used in Vercel's "Ignored Build Step" configuration.
// It ensures that builds and deployments only occur for PRs targeting `main` or `dev`.

const {
  VERCEL_GIT_BRANCH, // The branch being built
  VERCEL_GIT_PULL_REQUEST, // "1" if it's a PR, "0" otherwise
  VERCEL_GIT_PULL_REQUEST_TARGET_BRANCH, // The target branch of the PR (e.g., main or dev)
} = process.env;

// Allow builds only for PRs targeting `main` or `dev`
if (
  VERCEL_GIT_PULL_REQUEST === '1' &&
  (VERCEL_GIT_PULL_REQUEST_TARGET_BRANCH === 'main' ||
    VERCEL_GIT_PULL_REQUEST_TARGET_BRANCH === 'dev')
) {
  console.log(
    `Building and deploying for PR targeting: ${VERCEL_GIT_PULL_REQUEST_TARGET_BRANCH}`
  );
  process.exit(1); // Exit with 1 to proceed with the build
}

// Skip all other builds
console.log('Skipping build. This is not a PR targeting main or dev.');
process.exit(0); // Exit with 0 to skip the build
