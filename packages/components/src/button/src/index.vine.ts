import type { ButtonMode, sizeType, themeType } from 'utils/.type'
import { YeBasicButton } from '@/button/src/1-basic/basic.vine'
import { YeGlowButton } from "@/button/src/4-glow-button/glow-button.vine"
import { YeTextSlideButton } from "@/button/src/65-text-slide/text-slide.vine";
import { YeMarqueeSignButton } from "@/button/src/18-marquee-sign/marquee-sign.vine";
import { YeIconSlideButton } from "@/button/src/90-icon-slide/icon-slide.vine";
import { YeNeumorphism1Button } from "@/button/src/72-neumorphism-1/neumorphism-1.vine";
import { YeNeumorphism2Button } from "@/button/src/73-neumorphism-2/neumorphism-2.vine";
import { YeNeumorphism3Button } from "@/button/src/74-neumorphism-3/neumorphism-3.vine";
import { YeNeumorphism4Button } from "@/button/src/75-neumorphism-4/neumorphism-4.vine";
import { YeIconPulseButton } from "@/button/src/89-icon-pulse/icon-pulse.vine";
import { YeTiltedDiagonalButton } from "@/button/src/15-tilted-diagonal/tilted-diagonal.vine";
import { YeDiagonalSwipeButton } from "@/button/src/36-diagonal-swipe/diagonal-swipe.vine";
import { YeDoubleDiagonalButton } from "@/button/src/80-double-diagonal/double-diagonal.vine";

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
