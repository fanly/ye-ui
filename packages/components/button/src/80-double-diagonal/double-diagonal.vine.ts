export function YeDoubleDiagonalButton() {
  vineStyle.scoped(`@import 'double-diagonal.css'`)
  const type = vineProp<
    'button-success' | 'button-info' | 'button-warning' | 'button-error' | 'button-primary' | 'button-secondary' | 'button-accent'
  >()
  return vine`
    <button class="btn btn-8 font-sans" :class="type">
      <slot />
    </button>
  `
}
