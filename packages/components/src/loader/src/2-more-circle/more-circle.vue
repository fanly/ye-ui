<script setup lang="ts">
import { computed } from 'vue'
import type { sizeType, themeType } from 'utils/.type.ts'

interface Props {
  type?: themeType
  size?: sizeType
  name?: string
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  size: 'base',
  name: 'name',
  width: '200px',
})

const cSize = computed(() => `c-${props.size}`)
const loaderTheme1 = computed(() => `border-solid text-${props.type}-7 border-${props.type}-1 border-b-${props.type}-7 border-t-${props.type}-7`)
const loaderTheme2 = computed(() => `border-solid text-${props.type}-5 border-${props.type}-1 border-b-${props.type}-5 border-t-${props.type}-5`)
const loaderTheme3 = computed(() => `border-solid text-${props.type}-3 border-${props.type}-1 border-b-${props.type}-3 border-t-${props.type}-3`)
</script>

<template>
  <div class="flex">
    <div class="animate-spin ease-linear" :class="[cSize, loaderTheme1]" />
    <div class="ml-3 animate-spin ease-linear" :class="[cSize, loaderTheme2]" />
    <div class="ml-3 animate-spin ease-linear" :class="[cSize, loaderTheme3]" />
  </div>
</template>

<style scoped>

</style>