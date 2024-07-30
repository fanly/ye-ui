import { computed } from 'vue'
import {themeType} from "../../../.type.ts";

export function YeWaveGroupInput() {
  vineStyle.scoped(`@import 'wave-group.css'`)
  const type = vineProp.withDefault<themeType>('info')
  // const size = vineProp.withDefault<sizeType>('md')
  const inputType = computed(() => `input-theme-${props.type}`)
  // const btn_size = computed(() => `btn-${size.value}`)
  return vine`
    <div class="wave-group">
      <input required="" type="text" class="input">
      <span class="bar"></span>
      <label class="label">
        <span class="label-char" style="--index: 0">N</span>
        <span class="label-char" style="--index: 1">a</span>
        <span class="label-char" style="--index: 2">m</span>
        <span class="label-char" style="--index: 3">e</span>
      </label>
    </div>
  `
}
