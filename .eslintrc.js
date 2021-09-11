module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:wdio/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'wdio'
  ],
  // add your custom rules here
  rules: {}
}
