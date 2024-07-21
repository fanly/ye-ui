export function YeNeumorphism2Button() {
  vineStyle.scoped(`@import 'neumorphism-2.css'`)
  const type = vineProp<
    'button-success' | 'button-info' | 'button-warning' | 'button-error' | 'button-primary' | 'button-secondary' | 'button-accent'
  >()
  return vine`
    <button class="btn btn-73 font-sans" :class="type">
      <slot />
    </button>
  `
}
