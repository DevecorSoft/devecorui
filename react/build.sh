#!/usr/bin/env sh

cwd=$PWD
for i in src/components/*; do
  yarn vite build $i -c vite.config.mts
  cd $cwd/$i && ../../../../node_modules/.bin/tsc
  cd $cwd
done
