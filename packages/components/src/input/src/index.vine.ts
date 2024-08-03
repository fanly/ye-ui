import type { InputMode, sizeType, themeType } from 'utils/.type'
import { YeSearchInput } from './1-search/search.vine'
import WaveGroup from './2-wave-group/wave-group.vue'

export function YeInput(props: {
  mode: InputMode
  type: themeType
  size?: sizeType
  name?: string
  width?: string
}) {
  const isInputMode = (mode: string) : boolean => mode === props.mode
  return vine`
    <YeSearchInput :type :size v-if="isInputMode('search')"><slot /></YeSearchInput>
    <WaveGroup :type :size :name :width v-if="isInputMode('wave-group')"><slot /></WaveGroup>
  `
}
