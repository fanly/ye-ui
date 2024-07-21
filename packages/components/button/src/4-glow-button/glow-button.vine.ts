export function YeGlowButton() {
  vineStyle.scoped(`@import 'glow-button.css'`)
  const type = vineProp<
    'button-success' | 'button-info' | 'button-warning' | 'button-error' | 'button-primary' | 'button-secondary' | 'button-accent'
  >()
  return vine`
    <button class="btn btn-101" :class="type">
      <slot />
    </button>
  `
}
