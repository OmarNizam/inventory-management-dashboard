<template>
  <Button
    size="icon-lg"
    class="bg-brand-primary focus:outline-none dark:bg-brand-secondary cursor-pointer border hover:bg-brand hover:text-surface transition-colors shadow-none hover:shadow-md rounded-3xl"
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
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import { Sun, Moon } from 'lucide-vue-next'
import Button from './ui/button/Button.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
