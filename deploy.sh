rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add website git@github.com:wh2887/init-ui-vue3-website.git &&
git remote add giteePage git@gitee.com:hellow2887/init-ui-vue3.git &&
git push -f  website main &&
git push -f  giteePage main &&
cd -
echo https://wh2887.github.io/init-ui-vue3-website/index.html#/
echo http://hellow2887.gitee.io/init-ui-vue3/#/

