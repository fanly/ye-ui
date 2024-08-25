import type { SwitchMode, sizeType, themeType } from 'utils/.type'
import Goose from "@/switch/src/2-goose/goose.vue"
import Octopus from "@/switch/src/3-octopus/octopus.vue"

export function YeSwitch(props: {
  mode: SwitchMode
  type: themeType
  size?: sizeType
  text?: string
}) {
  const isSwitchMode = (mode: string) : boolean => mode === props.mode
  return vine`
    <Goose :type :size :text v-if="isSwitchMode('goose')"><slot /></Goose>
    <Octopus :type :size :text v-if="isSwitchMode('octopus')"><slot /></Octopus>
  `
}
