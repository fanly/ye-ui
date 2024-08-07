<script setup lang="ts">
import { computed } from 'vue'
import type { sizeType, themeType } from 'utils/.type.ts'

interface Props {
  type?: themeType
  size?: sizeType
  name?: string
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  size: 'md',
  name: 'name',
  width: '200px',
})

const inputType = computed(() => `input-b-${props.type}`)
const inputSize = computed(() => `input-${props.size}`)
const barTheme = computed(() => `bar-${props.type}`)
</script>

<template>
  <div class="relative" :style="`width: ${width}`">
    <input required="" type="text" class="input" :class="[inputSize, inputType]" :style="`width: ${width}`">
    <span class="bar" :class="barTheme" />
    <label :class="`label text-${props.type}-3`">
      <span v-for="(value, key) in props.name" :key class="label-char" :style="`--index: ${key}`">
        {{ value }}
      </span>
    </label>
  </div>
</template>

<style scoped>
* {
  --at-apply: box-border;
}

.label {
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  display: flex;
}

.label-char {
  transition: 0.2s ease all;
  transition-delay: calc(var(--index) * 0.05s);
}

.input:focus ~ label .label-char,
.input:valid ~ label .label-char {
  transform: translateY(-20px);
  font-size: 14px;
}

.input:focus ~ .bar:before,
.input:focus ~ .bar:after {
  width: 50%;
}
</style>
