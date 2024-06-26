import 'uno.css'
import type { App } from 'vue'
import { YeBasicButton, YeClickFillButton, YeCoverOverButton, YeGlowButton } from './button'

const component = [YeBasicButton, YeClickFillButton, YeCoverOverButton, YeGlowButton]

// 按需引入
export { YeBasicButton, YeClickFillButton, YeCoverOverButton, YeGlowButton }

const Components = {
  install(app: App) {
    component.forEach((item) => {
      app.component(item.name!, item)
    })
  },
}

export default Components
