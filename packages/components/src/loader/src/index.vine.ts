import type { LoaderMode, sizeType, themeType } from 'utils/.type'
import LoaderSpin from '@/loader/src/1-spin/loader-spin.vue'
import MoreCircle from "@/loader/src/2-more-circle/more-circle.vue"

export function YeLoader(props: {
  mode: LoaderMode
  type: themeType
  size?: sizeType
  name?: string
  width?: string
}) {
  const isLoaderMode = (mode: string) : boolean => mode === props.mode
  return vine`
    <LoaderSpin :type :size v-if="isLoaderMode('spin')"><slot /></LoaderSpin>
    <MoreCircle :type :size v-if="isLoaderMode('more-circle')"><slot /></MoreCircle>
  `
}
