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

const inputType = computed(() => `bg-${props.type}-500`)
const inputCSize = computed(() => `c-${props.size}`)
</script>

<template>
  <div
    :class="[inputType, inputCSize]"
    class="p-5 overflow-hidden hover:w-[270px] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] flex group items-center hover:duration-300 duration-300"
  >
    <div class="flex items-center justify-center fill-white">
      <slot>
        <svg
          id="Isolation_Mode"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Isolation Mode"
          viewBox="0 0 24 24"
          width="22"
          height="22"
        >
          <path
            d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"
          />
        </svg>
      </slot>
    </div>
    <input
      type="text"
      class="border-none outline-none outline-0 outline-transparent text-[20px] bg-transparent w-full text-white font-normal px-4"
    >
  </div>
</template>
<style scoped>
* {
  --at-apply: box-border;
}
</style>