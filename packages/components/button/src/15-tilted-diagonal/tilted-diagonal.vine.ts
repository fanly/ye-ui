export function YeTiltedDiagonalButton() {
  vineStyle.scoped(`@import 'tilted-diagonal.css'`)
  const type = vineProp<
    'button-success' | 'button-info' | 'button-warning' | 'button-error' | 'button-primary' | 'button-secondary' | 'button-accent'
  >()
  return vine`
    <button class="btn btn-20 font-sans" :class="type">
      <slot />
    </button>
  `
}
