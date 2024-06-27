import 'uno.css'
import type { App } from 'vue'
import { YeBasicButton, YeClickFillButton, YeCoverOverButton, YeGlowButton, YeTextSlideButton } from './button'

const component = [YeBasicButton, YeClickFillButton, YeCoverOverButton, YeGlowButton, YeTextSlideButton]

// 按需引入
export { YeBasicButton, YeClickFillButton, YeCoverOverButton, YeGlowButton, YeTextSlideButton }

const Components = {
  install(app: App) {
    component.forEach((item) => {
      app.component(item.name!, item)
    })
  },
}

export default Components
