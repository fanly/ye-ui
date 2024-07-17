<script setup lang="ts">
defineOptions({
  name: 'YeClickFillButton',
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
  <button class="btn-10 font-mono button" :class="type">
    <!-- 定义插槽用于让用户自定义按钮你们的内容 -->
    <slot />
  </button>
</template>

<style scoped>
@import 'click-to-fill.css';
</style>
