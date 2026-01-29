<template>
  <main class="flex flex-col min-h-screen p-4 space-y-4">
    <h1 class="text-blue-800 dark:text-red-300">Welcome to your Nuxt Dashboard!</h1>
    <p>This is the home page. If you see this, routing is working!</p>
    <Button
      size="icon-sm"
      class="text-white hover:opacity-90 transition-colors focus:outline-none bg-brand dark:bg-brand-secondary cursor-pointer"
      @click="toggleDark()"
    >
      <template #default>
        <span v-if="isDark" class="flex items-center justify-center">
          <Sun class="inline w-5 h-5" />
        </span>
        <span v-else class="flex items-center justify-center">
          <Moon class="inline w-5 h-5" />
        </span>
      </template>
    </Button>
  </main>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import { Sun, Moon } from 'lucide-vue-next'

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

<style></style>
