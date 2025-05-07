#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"
echo "VERCEL_GIT_PULL_REQUEST_ID: $VERCEL_GIT_PULL_REQUEST_ID"
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
echo "VERCEL_GIT_PREVIOUS_SHA: $VERCEL_GIT_PREVIOUS_SHA"
echo "VERCEL_GIT_REPO_SLUG: $VERCEL_GIT_REPO_SLUG"
echo "VERCEL_GIT_BRANCH: $VERCEL_GIT_BRANCH"

# Check if it's a PR targeting the dev branch
if [[ -n "$VERCEL_GIT_PULL_REQUEST_ID" && "$VERCEL_GIT_COMMIT_REF" == "dev" ]]; then
  echo "✅ - Valid PR targeting dev branch. Proceeding with build."
  exit 1
fi

# Check if the branch is main for deployment
if [[ "$VERCEL_GIT_COMMIT_REF" == "main" ]]; then
  echo "✅ - Changes in main branch. Proceeding with deployment."
  exit 1
fi

# Otherwise, cancel the build
echo "🛑 - Build cancelled. Not a valid PR to dev or changes to main."
exit 0
