<script setup lang="ts">
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
</script>

<template>
  <main class="flex flex-col min-h-screen p-4">
    <h1 class="text-blue-800 dark:text-blue-300">Welcome to your Nuxt Dashboard!</h1>
    <p>This is the home page. If you see this, routing is working!</p>
    <Button
      class="px-4 py-2 text-white bg-red-500 cursor-pointer hover:bg-gray-800 focus:outline-none"
      >Click Me</Button
    >
  </main>
</template>
