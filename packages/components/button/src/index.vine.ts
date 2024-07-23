import { YeBasicButton } from './1-basic/basic.vine.ts'
import { YeClickFillButton } from './2-click-to-fill/click-to-fill.vine.ts'
import { YeCoverOverButton } from './3-cover-over/cover-over.vine.ts'
import { YeGlowButton } from './4-glow-button/glow-button.vine.ts'
import { YeTiltedDiagonalButton } from './15-tilted-diagonal/tilted-diagonal.vine.ts'
import { YeMarqueeSignButton } from './18-marquee-sign/marquee-sign.vine.ts'
import { YeDiagonalSwipeButton } from './36-diagonal-swipe/diagonal-swipe.vine.ts'
import { YeTextSlideButton } from './65-text-slide/text-slide.vine.ts'
import { YeIconSlideButton } from './90-icon-slide/icon-slide.vine.ts'
import { YeNeumorphism1Button } from './72-neumorphism-1/neumorphism-1.vine.ts'
import { YeNeumorphism2Button } from './73-neumorphism-2/neumorphism-2.vine.ts'
import { YeNeumorphism3Button } from './74-neumorphism-3/neumorphism-3.vine.ts'
import { YeNeumorphism4Button } from './75-neumorphism-4/neumorphism-4.vine.ts'
import { YeDoubleDiagonalButton } from './80-double-diagonal/double-diagonal.vine.ts'
import { YeIconPulseButton } from './89-icon-pulse/icon-pulse.vine.ts'
import { ButtonMode, sizeType, themeType } from '../../.type.ts'

export function YeButton(props: {
  // ...
  mode: ButtonMode
  type: themeType
  size?: sizeType
  text?: string
  nextText?: string
}) {
  const isButtonMode = (mode: string) => mode == props.mode
  return vine`
    <YeBasicButton :type :size v-if="isButtonMode('basic')"><slot /></YeBasicButton>
    <YeGlowButton :type :size v-if="isButtonMode('glow')"><slot /></YeGlowButton>
    <YeTextSlideButton :type :size v-if="isButtonMode('text-slide')"><slot /></YeTextSlideButton>
    <YeMarqueeSignButton :type :size :text :nextText v-if="isButtonMode('marquee-sign')"><slot /></YeMarqueeSignButton>
    <YeIconSlideButton :type :size v-if="isButtonMode('icon-slide')"><slot /></YeIconSlideButton>
    <YeNeumorphism1Button :type :size v-if="isButtonMode('neumorphism-1')"><slot /></YeNeumorphism1Button>
    <YeNeumorphism2Button :type :size v-if="isButtonMode('neumorphism-2')"><slot /></YeNeumorphism2Button>
    <YeNeumorphism3Button :type :size v-if="isButtonMode('neumorphism-3')"><slot /></YeNeumorphism3Button>
    <YeNeumorphism4Button :type :size v-if="isButtonMode('neumorphism-4')"><slot /></YeNeumorphism4Button>
    <YeIconPulseButton :type :size v-if="isButtonMode('icon-pulse')"><slot /></YeIconPulseButton>
    <YeTiltedDiagonalButton :type :size v-if="isButtonMode('tilted-diagonal')"><slot /></YeTiltedDiagonalButton>
    <YeDiagonalSwipeButton :type :size v-if="isButtonMode('diagonal-swipe')"><slot /></YeDiagonalSwipeButton>
    <YeDoubleDiagonalButton :type :size v-if="isButtonMode('double-diagonal')"><slot /></YeDoubleDiagonalButton>
  `
}
