import { sizeType, themeType } from '../../../.type.ts'
import { computed } from 'vue'

export function YeIconSlideButton() {
  vineStyle.scoped(`@import 'icon-slide.css'`)
  const type = vineProp.withDefault<themeType>('info')
  const size = vineProp.withDefault<sizeType>('md')
  const btnClass = computed(() => [`button-${props.type}`, `btn-c-${size.value}`])
  return vine`
    <button class="btn btn-89 font-sans" :class="btnClass">
      <slot />
    </button>
  `
}
