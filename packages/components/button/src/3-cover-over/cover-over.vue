<script setup lang="ts">
defineOptions({
  name: 'YeCoverOverButton',
})
withDefaults(
  defineProps<{
    type?: 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
  }>(),
  {
    size: 'md',
    type: 'info',
    disabled: false,
  },
)
</script>

<template>
  <button class="btn-100 font-mono button" :class="type">
    <!-- 定义插槽用于让用户自定义按钮你们的内容 -->
    <slot />
  </button>
</template>

<style scoped>
@import 'cover-over.css';
</style>
