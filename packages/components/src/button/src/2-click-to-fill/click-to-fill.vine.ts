import { computed } from 'vue'
import type { sizeType, themeType } from 'utils/.type'

export function YeClickFillButton() {
  vineStyle.scoped(`@import 'click-to-fill.css'`)
  const type = vineProp.withDefault<themeType>('info')
  const size = vineProp.withDefault<sizeType>('base')
  const buttonType = computed(() => `button-${props.type}`)
  const btn_size = computed(() => `btn-${size.value}`)
  return vine`
    <button class="btn btn-10 font-sans" :class="[buttonType, btn_size]">
      <slot />
    </button>
  `
}
