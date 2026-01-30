<!-- Create a new component containing the <input> and search icon.
Use defineModel for two-way binding.
Accept generic attributes (inherit attrs is true by default). -->
<template>
  <div class="relative">
    <input
      v-model="model"
      type="search"
      placeholder="Search..."
      class="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition w-64 bg-white dark:bg-gray-700"
    />
    <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      <Search class="w-4 h-4" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next'

const model = defineModel<string>()

defineOptions({ inheritAttrs: true })
</script>

<style scoped>
/* Style the native search cancel (clear) button */
input[type='search']::-webkit-search-cancel-button {
  /* Hide default icon, use filter to invert for dark mode */
  filter: brightness(0) invert(0);
}

/* Dark mode: make the cancel button white */
.dark input[type='search']::-webkit-search-cancel-button {
  filter: invert(1) brightness(2);
}
</style>
