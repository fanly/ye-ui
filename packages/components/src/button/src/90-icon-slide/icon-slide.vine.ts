import { computed } from 'vue'
import type { sizeType, themeType } from 'utils/.type'

export function YeIconSlideButton() {
  vineStyle.scoped(`@import 'icon-slide.css'`)
  const type = vineProp.withDefault<themeType>('info')
  const size = vineProp.withDefault<sizeType>('base')
  const btnClass = computed(() => [`button-${props.type}`, `btn-c-${size.value}`])
  return vine`
    <button class="btn btn-89 font-sans" :class="btnClass">
      <slot />
    </button>
  `
}
