#!/usr/bin/env bash
set -e  # exit on any errors

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"/../
CLIENT_DIR="$DIR"/client
PATH="$CLIENT_DIR"/node_modules/.bin:$PATH

cd "$CLIENT_DIR"

if [ ! -L gulp ]; then
    echo "Linking gulp command into \"$CLIENT_DIR/client\" ..."
    ln -s ./node_modules/.bin/gulp .
fi

if [ ! -L jspm ]; then
    echo "Linking jspm command into \"$CLIENT_DIR/client\" ..."
    ln -s ./node_modules/.bin/jspm .
fi

echo "Running 'npm install' for BELMgr application ... "
npm install

echo "Running 'jspm install -y' for BELMgr application ... "
jspm install -y

echo "Running 'gulp build' for BELMgr application ... "
gulp build

echo "Enter client directory and run 'gulp serve' to test application"
echo " or 'gulp watch' for local development"
echo " or 'gulp export' for a distributable version of the application"
