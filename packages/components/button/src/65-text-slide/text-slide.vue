<script setup lang="ts">
defineOptions({
  name: 'YeTextSlideButton',
})
defineProps(['type'])
</script>

<template>
  <button class="btn-66 font-sans btn-info" :class="`${type}`">
    {{ type }}
    <slot />
  </button>
</template>

<style scoped>
@import 'text-slide.css';
</style>
