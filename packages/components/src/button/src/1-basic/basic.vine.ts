import { computed } from 'vue'
import type { sizeType, themeType } from 'utils/.type'

export function YeBasicButton() {
  vineStyle.scoped(`@import 'basic.css'`)
  const type = vineProp.withDefault<themeType>('info')
  const size = vineProp.withDefault<sizeType>('base')
  const buttonType = computed(() => `button-${props.type}`)
  const btn_size = computed(() => `btn-${size.value}`)
  return vine`
    <button class="btn btn-1" :class="[buttonType, btn_size]">
      <slot />
    </button>
  `
}
