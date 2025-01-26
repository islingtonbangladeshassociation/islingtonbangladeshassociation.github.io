#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'Deploy'

git push -f https://github.com/islingtonbangladeshassociation/islingtonbangladeshassociation.github.io.git main

cd -

