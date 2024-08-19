import type { CheckboxMode, sizeType, themeType } from 'utils/.type'
import Goose from "@/checkbox/src/2-goose/goose.vue"

export function YeCheckbox(props: {
  mode: CheckboxMode
  type: themeType
  size?: sizeType
  text?: string
}) {
  const isCheckboxMode = (mode: string) : boolean => mode === props.mode
  return vine`
    <Goose :type :size :text v-if="isCheckboxMode('goose')"><slot /></Goose>
  `
}
