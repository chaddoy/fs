#!/bin/bash
# ignore-step.sh
# This script is used in Vercel's "Ignored Build Step" configuration.
# It ensures that builds and deployments only occur for PRs targeting `main` or `dev`.

# Access environment variables
VERCEL_GIT_BRANCH=${VERCEL_GIT_BRANCH}
VERCEL_GIT_PULL_REQUEST=${VERCEL_GIT_PULL_REQUEST}
VERCEL_GIT_PULL_REQUEST_TARGET_BRANCH=${VERCEL_GIT_PULL_REQUEST_TARGET_BRANCH}

# Allow builds only for PRs targeting `main` or `dev`
if [[ "$VERCEL_GIT_PULL_REQUEST" == "1" && 
      ( "$VERCEL_GIT_PULL_REQUEST_TARGET_BRANCH" == "main" || "$VERCEL_GIT_PULL_REQUEST_TARGET_BRANCH" == "dev" ) ]]; then
  echo "Building and deploying for PR targeting: $VERCEL_GIT_PULL_REQUEST_TARGET_BRANCH"
  exit 1 # Exit with 1 to proceed with the build
fi

# Skip all other builds
echo "Skipping build. This is not a PR targeting main or dev."
exit 0 # Exit with 0 to skip the build
