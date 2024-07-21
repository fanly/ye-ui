export function YeBasicButton() {
  vineStyle.scoped(`@import 'basic.css'`)
  const type = vineProp<
    'button-success' | 'button-info' | 'button-warning' | 'button-error' | 'button-primary' | 'button-secondary' | 'button-accent'
  >()
  return vine`
    <button class="btn btn-1" :class="type">
      <slot />
    </button>
  `
}
