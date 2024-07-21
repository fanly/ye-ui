export function YeNeumorphism1Button() {
  vineStyle.scoped(`@import 'neumorphism-1.css'`)
  const type = vineProp<
    'button-success' | 'button-info' | 'button-warning' | 'button-error' | 'button-primary' | 'button-secondary' | 'button-accent'
  >()
  return vine`
    <button class="btn btn-72 font-sans" :class="type">
      <slot />
    </button>
  `
}
