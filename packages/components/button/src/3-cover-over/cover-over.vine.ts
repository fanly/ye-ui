export function YeCoverOverButton() {
  vineStyle.scoped(`@import 'cover-over.css'`)
  const type = vineProp<
    'button-success' | 'button-info' | 'button-warning' | 'button-error' | 'button-primary' | 'button-secondary' | 'button-accent'
  >()
  return vine`
    <button class="btn btn-100" :class="type">
      <slot />
    </button>
  `
}
