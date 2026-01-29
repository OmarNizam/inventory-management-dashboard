import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Add custom rules or override Nuxt's default rules here
    'no-console': 'warn',
    'vue/multi-word-component-names': 'off',
  },
})
