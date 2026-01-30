import { defineVitestConfig } from '@nuxt/test-utils/config'
import { loadEnv } from 'vite'

const env = loadEnv('', process.cwd(), '')
Object.assign(process.env, env)

export default defineVitestConfig({
  test: {
    environment: 'happy-dom',
    env: env,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/app/**/*.{ts,vue}'],
      exclude: ['**/*.spec.ts', '**/*.test.ts', '**/*.d.ts', '**/tests/**'],
      reportsDirectory: 'coverage',
    },
  },
})
