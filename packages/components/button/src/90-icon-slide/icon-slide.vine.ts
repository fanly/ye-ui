export function YeIconSlideButton() {
  vineStyle.scoped(`@import 'icon-slide.css'`)
  const type = vineProp<
    'button-success' | 'button-info' | 'button-warning' | 'button-error' | 'button-primary' | 'button-secondary' | 'button-accent'
  >()
  return vine`
    <button class="btn btn-89 font-sans" :class="type">
      <slot />
    </button>
  `
}
