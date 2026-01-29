<template>
  <div class="flex bg-surface text-heading w-full min-h-screen">
    <Sidebar />
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
    <main class="flex flex-col w-full h-full py-7 px-9 md:pl-24">
      <Navbar />
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import { Sun, Moon } from 'lucide-vue-next'

const isDark = useDark() // Detects system pref + handles 'dark' class on <html>
const toggleDark = useToggle(isDark)
</script>

<style></style>
