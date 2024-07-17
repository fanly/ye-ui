export function YeBasicButton(props: { type?: string }) {
  vineStyle.scoped(`@import 'text-slide.css'`)
  return vine`
    <button class="btn-1 button" :class="\`${props.type}\`">
      <!-- 定义插槽用于让用户自定义按钮你们的内容 -->
      <slot />
    </button>
  `
}
