import { computed } from 'vue'
import type { sizeType, themeType } from 'utils/.type'

export function YeNeumorphism4Button() {
  vineStyle.scoped(`@import 'neumorphism-4.css'`)
  const type = vineProp.withDefault<themeType>('info')
  const size = vineProp.withDefault<sizeType>('base')
  const buttonType = computed(() => `button-${props.type}`)
  const btn_size = computed(() => `btn-${size.value}`)
  return vine`
    <button class="btn btn-75 font-sans" :class="[buttonType, btn_size]">
      <slot />
    </button>
  `
}
