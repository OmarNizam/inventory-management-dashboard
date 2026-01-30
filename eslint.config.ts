import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Add custom rules or override Nuxt's default rules here
    'no-console': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': ['error', {
      html: {
        void: 'any',
        normal: 'always',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
  },
})
