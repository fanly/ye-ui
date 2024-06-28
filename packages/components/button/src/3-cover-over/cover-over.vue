<script setup lang="ts">
defineOptions({
  name: 'YeCoverOverButton',
})
</script>

<template>
  <button class="btn-100">
    <!-- 定义插槽用于让用户自定义按钮你们的内容 -->
    <slot />
  </button>
</template>

<style scoped>
@import 'cover-over.css';
</style>
