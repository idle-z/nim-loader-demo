# Webpack + Nim
Look under [examples](./examples) for examples of how to use [nim-loader].

# Installation
If you would like to run these examples for yourself, you'll need to build them with Webpack.
You must have `nim` and `nimble` installed to compile these examples. See
[installation instructions here][nim-installation].
The examples in this repo have node and Nim dependencies. Both need to be
types need to be installed before the examples will build:
```sh
# Install Nim dependencies
nimble install

# Install node dependencies
npm install

# Build all examples
npm run build
```  
Then view the produced `examples/{name}/dist/index.html` in your browser, or serve the dist
directory of the desired example with a static webserver and navigate your browser to its output.

## Yarn
If you prefer Yarn to npm, then
```sh
yarn install
yarn build
```
are the equivalent commands.

[nim-loader]: https://github.com/
[nim-installation]: https://nim-lang.org/install.html