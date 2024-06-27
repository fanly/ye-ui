<script setup lang="ts">
defineOptions({
  name: 'YeTextSlideButton',
})
</script>

<template>
  <button class="btn-66">
    <slot />
  </button>
</template>

<style scoped>
@import './text-slide.css';
</style>
