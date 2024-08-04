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
</script>

<template>
  <div class="wave-group" :style="`width: ${width}`">
    <input required="" type="text" class="input" :class="[inputSize, inputType]" :style="`width: ${width}`">
    <span class="bar" :style="`width: ${width}`" />
    <label class="label">
      <span v-for="(value, key) in props.name" :key class="label-char" :style="`--index: ${key}`">
        {{ value }}
      </span>
    </label>
  </div>
</template>

<style scoped>
.wave-group {
  position: relative;
}

.wave-group .input {
}

.wave-group .label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  display: flex;
}

.wave-group .label-char {
  transition: 0.2s ease all;
  transition-delay: calc(var(--index) * 0.05s);
}

.wave-group .input:focus ~ label .label-char,
.wave-group .input:valid ~ label .label-char {
  transform: translateY(-20px);
  font-size: 14px;
  color: #5264ae;
}

.wave-group .bar {
  position: relative;
  display: block;
}

.wave-group .bar:before,
.wave-group .bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #5264ae;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.wave-group .bar:before {
  left: 50%;
}

.wave-group .bar:after {
  right: 50%;
}

.wave-group .input:focus ~ .bar:before,
.wave-group .input:focus ~ .bar:after {
  width: 50%;
}
</style>
