const path = require('path')

const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const url = require('rollup-plugin-url')

const rootDirectory = path.resolve(__dirname)
const srcDirectory = path.resolve(rootDirectory, 'src')
const buildDirectory = path.resolve(rootDirectory, 'build')

const extensions = ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.json', '.svg']

module.exports = {
  input: path.resolve(srcDirectory, 'index.ts'),
  output: [
    {
      file: path.resolve(buildDirectory, 'cjs.js'),
      format: 'cjs',
      sourcemap: true,
      esModule: false,
    },
    {
      file: path.resolve(buildDirectory, 'esm.js'),
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: [
    'react',
    'react-dom',
    'styled-components',
  ],
  plugins: [
    url(),
    resolve({
      extensions,
    }),
    babel({
      extensions,
      exclude: 'node_modules/**',
    }),
  ],
}
