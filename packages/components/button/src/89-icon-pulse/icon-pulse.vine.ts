export function YeIconPulseButton() {
  vineStyle.scoped(`@import 'icon-pulse.css'`)
  const type = vineProp<
    'button-success' | 'button-info' | 'button-warning' | 'button-error' | 'button-primary' | 'button-secondary' | 'button-accent'
  >()
  return vine`
    <button class="btn btn-88 font-sans" :class="type">
      <slot />
    </button>
  `
}
