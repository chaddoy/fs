#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"
echo "VERCEL_GIT_PULL_REQUEST_ID: $VERCEL_GIT_PULL_REQUEST_ID"
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
echo "VERCEL_GIT_PREVIOUS_SHA: $VERCEL_GIT_PREVIOUS_SHA"
echo "VERCEL_GIT_REPO_SLUG: $VERCEL_GIT_REPO_SLUG"
echo "VERCEL_GIT_BRANCH: $VERCEL_GIT_BRANCH"

# Check if it's a PR, target branch is main or dev, and PR branch is not sb
if [[ -n "$VERCEL_GIT_PULL_REQUEST_ID" && 
      ("$VERCEL_GIT_COMMIT_REF" == "main" || "$VERCEL_GIT_COMMIT_REF" == "dev") ]]; then
  echo "✅ - Valid PR to main or dev from a non-sb branch. Proceeding with build."
  exit 1
else
  echo "🛑 - Build cancelled. Not a valid PR or from sb branch."
  exit 0
fi
