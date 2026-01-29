<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import Button from '~/components/ui/button/Button.vue'

useHead({
  title: 'Dashboard Home',
  meta: [
    {
      name: 'description',
      content: 'Welcome to the Inventory Management Dashboard home page.',
    },
  ],
})

const isDark = useDark() // Detects system pref + handles 'dark' class on <html>
const toggleDark = useToggle(isDark)


</script>

<template>
  <main class="flex flex-col min-h-screen p-4 space-y-4">
    <h1 class="text-blue-800 dark:text-red-300">Welcome to your Nuxt Dashboard!</h1>
    <p>This is the home page. If you see this, routing is working!</p>
    <Button
      class="px-4 py-2 text-white rounded-md hover:opacity-90 transition-colors focus:outline-none bg-brand dark:bg-brand-secondary"
      @click="toggleDark()"
    >
      Toggle to {{ isDark ? 'Light' : 'Dark' }}
    </Button>

    
  </main>
</template>
