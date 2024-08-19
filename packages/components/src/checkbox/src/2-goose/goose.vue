<script setup lang="ts">
import type {themeType} from 'utils/.type.ts'

interface Props {
  type?: themeType
  size?: number
  text?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  size: 14,
  text: 'No-Yes'
})

const cSize = computed(() => `cb-size-${props.size}`)
const theme = computed(() => `bg-${props.type}-3 after:bg-white after:text-${props.type}-3 after:font-bold peer-focus:ring-${props.type}-5 peer-checked:after:border-white peer-focus:ring-4`)
const pre = computed(() => {
  const textArray = props.text.split('-')
  return textArray[0] || 'No'
})

const last = computed(() => {
  const textArray = props.text.split('-')
  return textArray[1] || pre.value
})
</script>

<template>
  <label class="relative cursor-pointer items-center">
    <input class="peer sr-only" value="" type="checkbox">
    <div
      class="peer rounded-br-2xl rounded-tl-2xl outline-none duration-100 after:absolute after:left-1 after:top-1 after:flex after:items-center after:justify-center after:rounded-br-xl after:rounded-tl-xl after:outline-none peer-focus:outline-none after:duration-500"
      :class="[cSize, theme]"
      :style="`--pre: \'${pre}\'; --last: \'${last}\';`"
    />
  </label>
</template>

<style scoped>
.peer:after {
  content: var(--pre);
}

.peer:checked~.peer-checked\:after\:border-white:after  {
  content: var(--last);
}
</style>