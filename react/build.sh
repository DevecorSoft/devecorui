#!/usr/bin/env sh

cwd=$PWD
for i in src/components/*; do
  yarn vite build $i -c vite.config.mts
  cd $cwd/$i && ../../../../node_modules/.bin/tsc --project tsconfig.build.json
  cd $cwd
done
