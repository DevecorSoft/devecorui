const path = require("node:path");
module.exports = {
  title: 'devecor-ui',
  assetsDir: 'assets',
  styleguideDir: 'dist',
  components: 'src/components/*/index.{ts,tsx}',
  getExampleFilename(componentPath) {
    return path.dirname(componentPath) + '/README.md'
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(path.dirname(componentPath))
    return `yarn add @devecorui/${name}`
  },
  styleguideComponents: {
    LogoRenderer: path.join(__dirname, 'styleguide/components/Logo'),
  },
  propsParser: require("react-docgen-typescript").parse,
}
