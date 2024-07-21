export function YeNeumorphism3Button() {
  vineStyle.scoped(`@import 'neumorphism-3.css'`)
  const type = vineProp<
    'button-success' | 'button-info' | 'button-warning' | 'button-error' | 'button-primary' | 'button-secondary' | 'button-accent'
  >()
  return vine`
    <button class="btn btn-74 font-sans" :class="type">
      <slot />
    </button>
  `
}
