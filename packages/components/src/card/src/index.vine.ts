import type { CardMode, sizeType, themeType } from 'utils/.type'
import TurnOver from "@/card/src/1-turn-over/turn-over.vue"

export function YeCard(props: {
  mode: CardMode
  type: themeType
  size?: sizeType
  text?: string
}) {
  const isCardMode = (mode: string) : boolean => mode === props.mode
  return vine`
    <turn-over :type :size :text v-if="isCardMode('turn-over')"><slot /></turn-over>
  `
}
