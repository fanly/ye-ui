<script setup lang='ts'>
import '@ye-ui/components/style.css'
import { YeBasicButton, YeClickFillButton, YeGlowButton } from '@ye-ui/components'
</script>

<template>
  <div>
    <YeBasicButton>你好</YeBasicButton>
    <YeClickFillButton><span>Button</span></YeClickFillButton>
    <!--    <ye-cover-over-button>Button</ye-cover-over-button> -->
    <YeGlowButton>Button</YeGlowButton>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
