import type { ButtonMode, sizeType, themeType } from '../../utils/.type.ts'

export function YeButton(props: {
  // ...
  mode: ButtonMode
  type: themeType
  size?: sizeType
  text?: string
  nextText?: string
}) {
  const isButtonMode = (mode: string) : boolean => mode === props.mode
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
