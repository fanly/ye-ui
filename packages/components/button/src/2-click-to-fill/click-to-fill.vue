<script setup lang="ts">
defineOptions({
  name: 'YeClickFillButton',
})
</script>

<template>
  <button class="btn-10">
    <!-- 定义插槽用于让用户自定义按钮你们的内容 -->
    <slot />
  </button>
</template>

<style scoped>
@import 'click-to-fill.css';
</style>
