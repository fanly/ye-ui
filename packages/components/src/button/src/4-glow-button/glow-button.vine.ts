import { computed } from 'vue'
import type { sizeType, themeType } from 'utils/.type'

export function YeGlowButton() {
  vineStyle.scoped(`@import 'glow-button.css'`)
  const type = vineProp.withDefault<themeType>('info')
  const size = vineProp.withDefault<sizeType>('base')
  const buttonType = computed(() => `button-${type.value}`)
  const btn_size = computed(() => `btn-${size.value}`)
  return vine`
    <button class="btn btn-101 font-sans" :class="[buttonType, btn_size]">
      <slot />
      <svg>
        <defs>
          <filter id="glow">
            <fegaussianblur result="coloredBlur" stddeviation="5"></fegaussianblur>
            <femerge>
              <femergenode in="coloredBlur"></femergenode>
              <femergenode in="coloredBlur"></femergenode>
              <femergenode in="coloredBlur"></femergenode>
              <femergenode in="SourceGraphic"></femergenode>
            </femerge>
          </filter>
        </defs>
        <rect />
      </svg>
    </button>
  `
}
