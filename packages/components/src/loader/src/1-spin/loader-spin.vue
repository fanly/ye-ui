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
  size: 'md',
  name: 'name',
  width: '200px',
})

const cSize = computed(() => `c-${props.size}`)
const loaderTheme = computed(() => `border-solid text-${props.type}-5 border-${props.type}-2 border-t-${props.type}-7 border-b-2`)
</script>

<template>
  <div class="flex animate-spin items-center justify-center border-8 text-4xl" :class="[cSize, loaderTheme]">
    <slot>
      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" class="animate-ping">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    </slot>
  </div>
</template>

<style scoped>

</style>