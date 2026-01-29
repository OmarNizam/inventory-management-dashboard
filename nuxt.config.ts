// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4, // Enable Nuxt 4 behavior
  },
  // Map the top-level directories to your src folder
  srcDir: 'src/app',      // Points to your UI code
  serverDir: 'src/server', // Points to your API/Nitro code
  dir: {
    public: '../public',   // Relative to srcDir
    shared: '../shared',
    modules: '../modules'
  },

  css: ['./src/app/assets/css/main.css'],

  app: {
    baseURL: '/', // Set the base URL for the application
    head: {
      title: 'Inventory Management Dashboard',
      meta: [
        { name: 'description', content: 'A Nuxt 3 Inventory Management Dashboard Application' },
      ],
      htmlAttrs: { lang: 'en' },
    },

  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/test-utils',
    '@nuxt/scripts',
    'shadcn-nuxt'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: '@/components/ui'
  },

    // Enable Server-Side Rendering (SSR)
  ssr: true,

   // TypeScript Configuration
  typescript: {
    strict: true,
    typeCheck: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },

})
