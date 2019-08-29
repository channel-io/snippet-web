const path = require('path')

const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')

const rootDirectory = path.resolve(__dirname)
const srcDirectory = path.resolve(rootDirectory, 'src')
const buildDirectory = path.resolve(rootDirectory, 'build')

module.exports = {
  input: path.resolve(srcDirectory, 'index.tsx'),
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
    'styled-components',
  ],
  plugins: [
    resolve(),
    babel({
      extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.json'],
      exclude: 'node_modules/**',
    }),
  ],
}
