export function YeDiagonalSwipeButton() {
  vineStyle.scoped(`@import 'diagonal-swipe.css'`)
  const type = vineProp<
    'button-success' | 'button-info' | 'button-warning' | 'button-error' | 'button-primary' | 'button-secondary' | 'button-accent'
  >()
  return vine`
    <button class="btn btn-4 font-sans" :class="type">
      <slot />
    </button>
  `
}
