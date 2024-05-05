#!/usr/bin/env sh

# dependency first
yarn vite build src/components/colors -c vite.config.mts

cwd=$PWD
for i in src/components/*; do
  yarn vite build $i -c vite.config.mts
  cd $cwd/$i && ../../../../node_modules/.bin/tsc --project tsconfig.build.json
  cd $cwd
done
