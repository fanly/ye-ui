import 'uno.css'
import type { App } from 'vue'
import { YeButton } from '@/button'
import { YeInput } from '@/input'
import { YeLoader } from '@/loader'
import { YeSwitch } from '@/switch'

const component = [YeButton, YeInput, YeLoader, YeSwitch]

// 按需引入
export { YeButton, YeInput, YeLoader, YeSwitch }

const Components = {
  install(app: App) {
    component.forEach((item) => {
      app.component(item.name!, item)
    })
  },
}

export default Components
