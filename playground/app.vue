<script setup lang='ts'>
import '@ye-ui/components/style.css'
import { YeBasicButton, YeTextSlideButton } from '@ye-ui/components'
</script>

<template>
  <div>
    <YeBasicButton type="button-info">
      YeBasicButton
    </YeBasicButton>
    <YeTextSlideButton type="button-accent">
      YeTextSlideButton
    </YeTextSlideButton>
    <button class="button button-error">
      普通 Button
    </button>
    <NuxtRouteAnnouncer />
  </div>
</template>
