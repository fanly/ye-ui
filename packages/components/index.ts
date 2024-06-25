// import 'uno.css'
import type { App } from 'vue'
import YeButton from './button'
// 按需引入
export { YeButton }

const component = [YeButton]

const Components = {
  install(app: App) {
    component.forEach((item) => {
      app.component(item.name ?? item.default.name, item)
    })
  },
}

export default Components
