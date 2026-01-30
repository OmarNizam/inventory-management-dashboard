<!-- Create a new component containing the <input> and search icon.
Use defineModel for two-way binding.
Accept generic attributes (inherit attrs is true by default). -->
<template>
  <div class="relative">
    <input
      type="search"
      placeholder="Search..."
      v-model="model"
      class="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition w-64 bg-white dark:bg-gray-700 text-brand-text"
    />
    <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      <Search class="w-4 h-4" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next'

const model = defineModel<string>()
</script>
