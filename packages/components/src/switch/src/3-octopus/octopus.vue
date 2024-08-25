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

// const cSize = computed(() => `cb-size-${props.size}`)
const theme = computed(() => `bg-${props.type}-1 peer-checked:bg-${props.type}-5`)
// const pre = computed(() => {
//   const textArray = props.text.split('-')
//   return textArray[0] || 'No'
// })
//
// const last = computed(() => {
//   const textArray = props.text.split('-')
//   return textArray[1] || pre.value
// })
</script>

<template>
  <label
    class="switch cursor-pointer relative flex w-[6.7rem] scale-75 overflow-hidden p-2"
  >
    <input type="checkbox" name="" class="peer hidden">
    <div
      class="absolute -right-[6.5rem] z-[1] flex h-12 w-24 skew-x-12 items-center justify-center text-lg duration-500 peer-checked:right-1"
    >
      <span class="-skew-x-12">ON</span>
    </div>
    <div
      class="z-0 h-12 w-24 -skew-x-12 border border-black duration-500 peer-checked:skew-x-12" :class="theme"
    />
    <div
      class="absolute left-[0.3rem] flex h-12 w-24 -skew-x-12 items-center justify-center text-lg duration-500 peer-checked:-left-[6.5rem]"
    >
      <span class="skew-x-12">OFF</span>
    </div>
  </label>
</template>

<style scoped>

</style>