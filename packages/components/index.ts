import 'uno.css'
import type { App } from 'vue'
import { YeButton } from '@/button'
import { YeInput } from '@/input'
import { YeLoader } from '@/loader'
import { YeCheckbox } from '@/checkbox'

const component = [YeButton, YeInput, YeLoader, YeCheckbox]

// 按需引入
export { YeButton, YeInput, YeLoader, YeCheckbox }

const Components = {
  install(app: App) {
    component.forEach((item) => {
      app.component(item.name!, item)
    })
  },
}

export default Components
