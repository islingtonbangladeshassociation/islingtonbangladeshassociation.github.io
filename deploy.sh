#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'Deploy'

git push -f https://robienoor@github.com/robienoor/ibal.git main

cd -