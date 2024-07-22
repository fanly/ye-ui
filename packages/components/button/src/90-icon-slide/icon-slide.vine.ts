import {sizeType, themeType} from "../../../.type.ts"
import {computed} from "vue"

export function YeIconSlideButton() {
  vineStyle.scoped(`@import 'icon-slide.css'`)
  const type = vineProp.withDefault<themeType>('info')
  const size = vineProp.withDefault<sizeType>('md')
  const buttonType = computed(() => `button-${props.type}`)
  const btn_size = computed(() => `btn-${size.value}`)
  return vine`
    <button class="btn btn-89 font-sans" :class="[buttonType, btn_size]">
      <slot />
    </button>
  `
}
