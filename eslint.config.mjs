import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
    .prepend({
        ignores: ['.nuxt/**', '.output/**', 'dist/**', 'node_modules/**', '**/*.min.js', 'src/app/**']
    })
    .extend('eslint:recommended')
    .extend('plugin:vue/vue3-recommended')
    .override({
        files: ['*.vue'],
        rules: {
            'vue/multi-word-component-names': 'off'
        }
    })
    .rule('no-console', 'warn')
    .rule('no-debugger', 'warn')