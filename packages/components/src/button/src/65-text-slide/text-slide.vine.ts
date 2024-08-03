import { computed } from 'vue'
import type { sizeType, themeType } from 'utils/.type'

export function YeTextSlideButton() {
  vineStyle.scoped(`@import 'text-slide.css'`)
  const type = vineProp.withDefault<themeType>('info')
  const size = vineProp.withDefault<sizeType>('md')
  const btnClass = computed(() => [`button-${props.type}`, `btn-${size.value}`])

  return vine`
    <button class="btn btn-66 font-sans" :class="btnClass">
      <slot />
    </button>
  `
}
