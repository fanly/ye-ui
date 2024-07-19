export function YeMarqueeSignButton() {
  vineStyle.scoped(`@import 'marquee-sign'`)
  const type = vineProp<
    'button-success' | 'button-info' | 'button-warning' | 'button-error' | 'button-primary' | 'button-secondary' | 'button-accent'
  >()
  const text = vineProp.withDefault<string>('text')
  const nextText = vineProp.withDefault<string>('nextText')

  return vine`
    <button class="btn-23 button font-sans" :class="type">
      <span class="text">{{ text }}</span>
      <span class="marquee" aria-hidden>{{ nextText }}</span>
    </button>
  `
}
