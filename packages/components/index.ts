import 'uno.css'
import type { App } from 'vue'
import { YeButton } from '@/button'
import { YeInput } from '@/input'

const component = [YeButton, YeInput]

// 按需引入
export { YeButton, YeInput }

const Components = {
  install(app: App) {
    component.forEach((item) => {
      app.component(item.name!, item)
    })
  },
}

export default Components
