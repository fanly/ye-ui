export function YeDiagonalSwipeButton() {
  vineStyle.scoped(`@import 'diagonal-swipe.css'`)
  const type = vineProp<
    'button-success' | 'button-info' | 'button-warning' | 'button-error' | 'button-primary' | 'button-secondary' | 'button-accent'
  >()
  return vine`
    <button class="btn-4 button font-sans" :class="type">
      <!-- 定义插槽用于让用户自定义按钮你们的内容 -->
      <slot />
    </button>
  `
}
