<script setup lang="ts">
defineOptions({
  name: 'YeBasicButton',
})
defineProps(['type'])
</script>

<template>
  <button class="btn-1" :class="type">
    <!-- 定义插槽用于让用户自定义按钮你们的内容 -->
    {{ type }}
    <slot />
  </button>
</template>

<style scoped>
@import 'basic.css';
</style>
