export function YeBasicButton() {
  vineStyle.scoped(`@import 'basic.css'`)
  const type = vineProp<'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'>()
  return vine`
    <button class="btn-1 button" :class="type">
      <!-- 定义插槽用于让用户自定义按钮你们的内容 -->
      <slot />
    </button>
  `
}
