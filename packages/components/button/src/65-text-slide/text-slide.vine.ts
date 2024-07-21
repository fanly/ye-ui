export function YeTextSlideButton() {
  vineStyle.scoped(`@import 'text-slide'`)
  const type = vineProp<
    'button-success' | 'button-info' | 'button-warning' | 'button-error' | 'button-primary' | 'button-secondary' | 'button-accent'
  >()
  return vine`
    <button class="btn btn-66 font-sans" :class="type">
      <slot />
    </button>
  `
}
