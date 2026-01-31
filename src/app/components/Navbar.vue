<template>
  <div class="flex justify-between items-center w-full mb-7">
    <!-- Left Section -->
    <div class="flex items-center">
      <button
        class="cursor-pointer p-3 bg-gray-100 hover:bg-blue-100 dark:bg-gray-800 rounded-full focus:outline-none mr-4 inline-block"
      >
        <Menu class="w-4 h-4" />
      </button>
      <PageTitle v-model="pageTitle" />
      <SearchInput v-model="searchQuery" />
    </div>

    <!-- Right Section -->
    <div class="flex items-center justify-between gap-5">
      <DarkModeToggleButton />
      <!-- Notifications -->
      <div class="relative">
        <Button
          class="bg-brand-primary focus:outline-none cursor-pointer border hover:bg-brand hover:text-surface transition-colors shadow-none hover:shadow-md rounded-3xl"
          size="icon-lg"
        >
          <Bell />
        </Button>
        <span
          class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2"
          >3</span
        >
      </div>
      <!-- /Notifications -->

      <!-- User Profile -->
      <div class="flex items-center space-x-2 cursor-pointer">
        <!-- <img src="https://via.placeholder.com/32" alt="User Avatar" class="w-8 h-8 rounded-full" /> -->
        <span>John Doe</span>
      </div>
      <!-- User Profile -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Bell, Menu } from 'lucide-vue-next'
import Button from './ui/button/Button.vue'
import { usePageTitle, useSearchQuery } from '~/composables/stores/navbarStore'

const pageTitle = usePageTitle()
const searchQuery = useSearchQuery()
</script>
