import { computed } from 'vue'
import type { sizeType, themeType } from 'utils/.type'

export function YeMarqueeSignButton() {
  vineStyle.scoped(`@import 'marquee-sign'`)
  const type = vineProp.withDefault<themeType>('info')
  const size = vineProp.withDefault<sizeType>('md')
  const text = vineProp.withDefault<string>('text')
  const nextText = vineProp.withDefault<string>('nextText')

  const buttonType = computed(() => `button-${props.type}`)
  const btn_size = computed(() => `btn-${size.value}`)
  return vine`
    <button class="btn btn-23 font-sans" :class="[buttonType, btn_size]">
      <span class="text">{{ text }}</span>
      <span class="marquee" aria-hidden>{{ nextText }}</span>
    </button>
  `
}
