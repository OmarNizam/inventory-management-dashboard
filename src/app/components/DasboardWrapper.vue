<template>
  <div class="flex bg-surface text-brand-text w-full min-h-screen">
    <Sidebar />
    <main class="flex flex-col w-full h-full py-7 px-9 md:pl-24">
      <Navbar />
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
</script>

<style></style>
