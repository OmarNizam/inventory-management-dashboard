<!-- PageTitle Component -->
<template>
  <div class="text-2xl font-semibold text-shadow-2xs" :class="colorClass">
    {{ model }}
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  colorClass?: string
}

withDefaults(defineProps<IProps>(), {
  colorClass: 'text-foreground',
})

const model = defineModel<string | undefined>()
</script>
