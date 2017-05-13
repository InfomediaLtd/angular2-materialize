#!/usr/bin/env bash
#PRECONDITION: switch the sample to use the published angular2-materialize (see tsconfig.json)
cd ./sample/
ng build --prod
rm -rf ../docs/*
cp -R ./dist/* ../docs/
cd ..
git add ./docs/.
git status
#MANUAL STEP - PUBLISH NEW DOCS: npm run commit