<script setup lang="ts">
defineOptions({
  name: 'YeBasicButton',
})
withDefaults(
  defineProps<{
    type?: 'default' | 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
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
  <button :class="`button-${type}`" class="btn-1 font-mono">
    <!-- 定义插槽用于让用户自定义按钮你们的内容 -->
    <slot />
  </button>
</template>

<style scoped>
@import 'basic.css';
</style>
