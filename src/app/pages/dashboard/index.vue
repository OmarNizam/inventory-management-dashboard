<template>
  <div class="">
    <h1 class="text-blue-800 dark:text-red-300">Welcome to your Nuxt Dashboard!</h1>
    <p>This is the home page. If you see this, routing is working!</p>
  </div>
</template>

<script lang="ts" setup>
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

<style></style>
