import {themeType} from "../../../.type.ts"
import {computed} from "vue"
export function YeCoverOverButton() {
  vineStyle.scoped(`@import 'cover-over.css'`)
  const type = vineProp.withDefault<themeType>('info')
  const size = vineProp.withDefault<'xs' | 'sm' | 'md' | 'lg'>('md')
  const buttonType = computed(() => `button-${props.type}`)
  const btn_size = computed(() => `btn-${size.value}`)
  return vine`
    <button class="btn btn-100 font-sans" :class="[buttonType, btn_size]">
      <slot />
    </button>
  `
}