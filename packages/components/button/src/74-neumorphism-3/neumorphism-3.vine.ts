import { sizeType, themeType } from '../../../.type.ts'
import { computed } from 'vue'
export function YeNeumorphism3Button() {
  vineStyle.scoped(`@import 'neumorphism-3.css'`)
  const type = vineProp.withDefault<themeType>('info')
  const size = vineProp.withDefault<sizeType>('md')
  const buttonType = computed(() => `button-${props.type}`)
  const btn_size = computed(() => `btn-${size.value}`)
  return vine`
    <button class="btn btn-74 font-sans" :class="[buttonType, btn_size]">
      <slot />
    </button>
  `
}
