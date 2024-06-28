<script setup lang="ts">
defineOptions({
  name: 'YeTextSlideButton',
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
  <button class="btn-66" :class="`bg-${type}`">
    <slot />
  </button>
</template>

<style scoped>
@import 'text-slide.css';
</style>
