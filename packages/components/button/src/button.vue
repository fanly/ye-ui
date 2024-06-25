<script setup lang="ts">
defineOptions({
  name: 'YeButton',
})
</script>

<template>
  <button>
    <!-- 定义插槽用于让用户自定义按钮你们的内容 -->
    <slot></slot>
  </button>
</template>
