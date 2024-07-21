export function YeClickFillButton() {
  vineStyle.scoped(`@import 'click-to-fill.css'`)
  const type = vineProp<
    'button-success' | 'button-info' | 'button-warning' | 'button-error' | 'button-primary' | 'button-secondary' | 'button-accent'
  >()
  return vine`
    <button class="btn btn-10" :class="type">
      <slot />
    </button>
  `
}
