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
  <button class="btn-1" :class="`bg-${type}-500`">
    <!-- 定义插槽用于让用户自定义按钮你们的内容 -->
    <slot />
  </button>
</template>

<style scoped>
@import 'basic.css';
</style>
