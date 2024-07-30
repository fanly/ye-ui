import { computed } from 'vue'
import {themeType} from "../../../.type.ts";

export function YeSearchInput() {
  vineStyle.scoped(`@import 'search.css'`)
  const type = vineProp.withDefault<themeType>('info')
  // const size = vineProp.withDefault<sizeType>('md')
  const inputType = computed(() => `input-theme-${props.type}`)
  // const btn_size = computed(() => `btn-${size.value}`)
  return vine`
    <div class="input-wrapper">
      <button class="icon">
       <slot>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
          <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#999" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
          <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#999" d="M22 22L20 20"></path>
         </svg>
       </slot>
      </button>
      <input placeholder="search.." class="input" :class="inputType" name="text" type="text">
    </div>
  `
}
