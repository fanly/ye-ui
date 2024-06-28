<script setup lang="ts">
defineOptions({
  name: 'YeGlowButton',
})
</script>

<template>
  <button class="btn-101">
    <slot />
  </button>
</template>

<style scoped>
@import 'glow-button.css';
</style>
