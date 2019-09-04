const path = require('path')

const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const alias = require('rollup-plugin-alias')

const rootDirectory = path.resolve(__dirname)
const srcDirectory = path.resolve(rootDirectory, 'src')
const buildDirectory = path.resolve(rootDirectory, 'build')

const extensions = ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.json']

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
    'styled-components',
  ],
  plugins: [
    alias({
      resolve: extensions,
      entries: [
        {
          find: /^Components(.*)$/,
          replacement: `${path.resolve(srcDirectory, 'components')}$1/index`,
        },
        {
          find: 'Constants',
          replacement: path.resolve(srcDirectory, 'constants'),
        },
        {
          find: /^Containers(.*)$/,
          replacement: `${path.resolve(srcDirectory, 'containers')}$1/index`,
        },
        {
          find: 'Contexts',
          replacement: path.resolve(srcDirectory, 'contexts'),
        },
        {
          find: 'Utils',
          replacement: path.resolve(srcDirectory, 'utils'),
        },
        {
          find: 'Styles',
          replacement: path.resolve(srcDirectory, 'styles'),
        },
      ],
    }),
    resolve({
      extensions,
    }),
    babel({
      extensions,
      exclude: 'node_modules/**',
    }),
  ],
}
