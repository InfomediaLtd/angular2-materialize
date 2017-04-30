#!/bin/bash

# Clean up previous build files
rm -rf build
rm -rf dist

# Define commands
NGC="node node_modules/.bin/ngc"
# ROLLUP="node node_modules/.bin/rollup"

# Run Angular Compiler to generate build directory
$NGC -p src/tsconfig.json

# Run rollup to generate dist directory
# $ROLLUP build/index.js -o dist/index.js -f umd -n angular2-materialize -u angular2-materialize

# Copy all files from build to dist, except for JavaScript files
rsync -a build/ dist

# Copy package.json and other resources to dist
# cp README.md dist
# cp LICENSE dist
# cp .npmignore dist

# Clean up build directory
rm -rf build
