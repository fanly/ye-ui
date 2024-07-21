export function YeNeumorphism4Button() {
  vineStyle.scoped(`@import 'neumorphism-4.css'`)
  const type = vineProp<
    'button-success' | 'button-info' | 'button-warning' | 'button-error' | 'button-primary' | 'button-secondary' | 'button-accent'
  >()
  return vine`
    <button class="btn btn-75 font-sans" :class="type">
      <slot />
    </button>
  `
}
