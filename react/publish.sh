dirs=$(git log -1 --name-only --pretty=format:'' |
 xargs -I {} dirname {} |
  grep -v "__tests__" |
  uniq
)
cwd=$(dirname $PWD)

for dir in $dirs; do
  if expr "$dir" : ^react/src/components > /dev/null; then
    echo "publishing $dir"
    cd $cwd/$dir
#    npm publish --access public
    echo "published $dir"
  fi
done
