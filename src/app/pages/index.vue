<template>
  <Dashboard />
</template>

<script setup lang="ts">
import Dashboard from './dashboard/index.vue'

// Set page metadata
useHead({
  title: 'Dashboard - Inventory Management System',
  meta: [
    {
      name: 'description',
      content: 'Overview of dashboard in Inventory Management System',
    },
  ],
})
</script>
