<template>
  <div class="flex justify-between items-center w-full mb-7">
    <!-- Left Section -->
    <div class="flex items-center">
      <button
        class="cursor-pointer p-3 bg-gray-100 hover:bg-blue-100 dark:bg-gray-800 rounded-full focus:outline-none mr-4 inline-block"
      >
        <Menu class="w-4 h-4" />
      </button>
      <div class="relative">
        <input
          type="search"
          placeholder="Search..."
          class="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition w-64 bg-white dark:bg-gray-700 text-heading"
        />
        <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          ><Search class="w-4 h-4"
        /></span>
      </div>
    </div>

    <!-- Right Section -->
    <div class="flex items-center justify-between gap-5">
      <!-- Notifications -->
      <div class="relative">
        <Button
          class="focus:outline-none cursor-pointer border hover:bg-brand hover:text-surface transition-colors shadow-none hover:shadow-md"
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
        <span class="text-heading">John Doe</span>
      </div>
      <!-- User Profile -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Bell, Menu, Search } from 'lucide-vue-next'
import Button from './ui/button/Button.vue'
</script>
