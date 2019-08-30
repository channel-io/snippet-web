const path = require('path')

const rootDirectory = path.resolve(__dirname, '..')
const srcDirectory = path.resolve(rootDirectory, 'src')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  })

  config.resolve.extensions.push('.ts', '.tsx')

  config.resolve.alias = {
    ...config.resolve.alias,
    Storybook: path.resolve(rootDirectory, 'storybook'),
    Styles: path.resolve(srcDirectory, 'styles'),
    Containers: path.resolve(srcDirectory, 'containers'),
    Constants: path.resolve(srcDirectory, 'constants'),
    Components: path.resolve(srcDirectory, 'components'),
    Utils: path.resolve(srcDirectory, 'utils'),
  }
  return config
}
