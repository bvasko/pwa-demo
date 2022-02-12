echo "Clean up dist"
mkdir ./dist/images
cp ./src/images/logo.png ./dist/images/
mkdir ./dist/js
mv ./dist/install.bundle.js ./dist/main.bundle.js ./dist/js/
mkdir ./dist/css