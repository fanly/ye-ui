<script setup lang='ts'>
import '@ye-ui/components/style.css'
import { YeBasicButton, YeTextSlideButton } from '@ye-ui/components'
</script>

<template>
  <div>
    <!--    <YeBasicButton>你好</YeBasicButton> -->
    <!--    <YeClickFillButton><span>Button</span></YeClickFillButton> -->
    <!--    &lt;!&ndash;    <ye-cover-over-button>Button</ye-cover-over-button> &ndash;&gt; -->
    <YeBasicButton type="info">
      Button
    </YeBasicButton>
    <YeTextSlideButton type="error">
      Button
    </YeTextSlideButton>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
