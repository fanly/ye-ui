import type { InputMode, sizeType, themeType } from '../../.type.ts'

export function YeInput(props: {
  // ...
  mode: InputMode
  type: themeType
  size?: sizeType
  name?: string
  width?: string
}) {
  const isInputMode = (mode: string) => mode === props.mode
  return vine`
    <YeSearchInput :type :size v-if="isInputMode('search')"><slot /></YeSearchInput>
    <WaveGroup :type :size :name :width v-if="isInputMode('wave-group')"><slot /></WaveGroup>
  `
}
