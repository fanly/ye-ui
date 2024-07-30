import { YeSearchInput } from './1-search/search.vine.ts'
import { YeWaveGroupInput } from './2-wave-group/wave-group.vine.ts'
import { InputMode, sizeType, themeType } from '../../.type.ts'

export function YeInput(props: {
  // ...
  mode: InputMode
  type: themeType
  size?: sizeType
  text?: string
  nextText?: string
}) {
  const isInputMode = (mode: string) => mode == props.mode
  return vine`
    <YeSearchInput :type :size v-if="isInputMode('search')"><slot /></YeSearchInput>
    <YeWaveGroupInput :type :size v-if="isInputMode('wave-group')"><slot /></YeWaveGroupInput>
  `
}
