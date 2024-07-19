import 'uno.css'
import type { App } from 'vue'
import { YeButton} from './button'

const component = [YeButton]

// 按需引入
export { YeButton }

const Components = {
  install(app: App) {
    component.forEach((item) => {
      app.component(item.name!, item)
    })
  },
}

export default Components
