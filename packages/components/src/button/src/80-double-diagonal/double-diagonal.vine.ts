import { computed } from 'vue'
import type { sizeType, themeType } from 'utils/.type'

export function YeDoubleDiagonalButton() {
  vineStyle.scoped(`@import 'double-diagonal.css'`)
  const type = vineProp.withDefault<themeType>('info')
  const size = vineProp.withDefault<sizeType>('base')
  const buttonType = computed(() => `button-${props.type}`)
  const btn_size = computed(() => `btn-${size.value}`)
  return vine`
    <button class="btn btn-8 font-sans" :class="[buttonType, btn_size]">
      <slot />
    </button>
  `
}
