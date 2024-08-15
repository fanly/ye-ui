<script setup lang="ts">
import { computed } from 'vue'
import type { themeType } from 'utils/.type.ts'

interface Props {
  type?: themeType
  size?: number
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  size: 8,
  width: '200px',
})

const cSize = computed(() => `size-${props.size}`)
const loaderTheme = computed(() => `border-solid border-${props.type}-5 bg-${props.type}-3`)
</script>

<template>
  <div class="spinner" :class="cSize">
    <div :class="loaderTheme" />
    <div :class="loaderTheme" />
    <div :class="loaderTheme" />
    <div :class="loaderTheme" />
    <div :class="loaderTheme" />
    <div :class="loaderTheme" />
  </div>
</template>

<style scoped>
.spinner {
  animation: spinner-y0fdc1 2s infinite ease;
  transform-style: preserve-3d;
}

.spinner > div {
  height: 100%;
  position: absolute;
  width: 100%;
}

.spinner div:nth-of-type(1) {
  transform: translateZ(-22px) rotateY(180deg);
}

.spinner div:nth-of-type(2) {
  transform: rotateY(-270deg) translateX(50%);
  transform-origin: top right;
}

.spinner div:nth-of-type(3) {
  transform: rotateY(270deg) translateX(-50%);
  transform-origin: center left;
}

.spinner div:nth-of-type(4) {
  transform: rotateX(90deg) translateY(-50%);
  transform-origin: top center;
}

.spinner div:nth-of-type(5) {
  transform: rotateX(-90deg) translateY(50%);
  transform-origin: bottom center;
}

.spinner div:nth-of-type(6) {
  transform: translateZ(22px);
}

@keyframes spinner-y0fdc1 {
  0% {
    transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
  }

  50% {
    transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
  }

  100% {
    transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
  }
}
</style>