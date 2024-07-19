import { YeBasicButton } from './1-basic/basic.vine.ts'
import { YeClickFillButton } from './2-click-to-fill/click-to-fill.vine.ts'
import { YeCoverOverButton } from './3-cover-over/cover-over.vine.ts'
import { YeGlowButton } from './4-glow-button/glow-button.vine.ts'
import { YeTextSlideButton } from './65-text-slide/text-slide.vine.ts'
import { computed } from 'vue'
type ButtonMode = 'basic' | 'click-fill' | 'cover-over' | 'glow' | 'text-slide'
export function YeButton(props: {
  // ...
  mode: ButtonMode
  type: 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
}) {
  const buttonType = computed(() => `button-${props.type}`)
  
  const isButtonMode = (mode: string) => mode == props.mode
  return vine`
    <YeBasicButton :type="buttonType" v-if="isButtonMode('basic')"><slot /></YeBasicButton>
    <YeGlowButton :type="buttonType" v-if="isButtonMode('glow')"><slot /></YeGlowButton>
    <YeTextSlideButton :type="buttonType" v-if="isButtonMode('text-slide')"><slot /></YeTextSlideButton>
  `
}