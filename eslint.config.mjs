import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
    .prepend({
        ignores: ['.nuxt/**', '.output/**', 'dist/**', 'node_modules/**', '**/*.min.js', 'app/**']
    })
