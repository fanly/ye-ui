<script setup lang="ts">
defineOptions({
  name: 'YeGlowButton',
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
  <button class="btn-101 font-mono" :class="`bg-${type}`">
    <slot />
  </button>
</template>

<style scoped>
@import 'glow-button.css';
</style>
