<script setup lang='ts'>
import '@ye-ui/components/style.css'
import { YeButton } from '@ye-ui/components'
</script>

<template>
  <div>
    <YeButton mode="basic" type="success">
      basic
    </YeButton>
    <!--    <YeButton mode="click-fill" type="info">-->
    <!--      YeButton-->
    <!--    </YeButton>-->
    <!--    <YeButton mode="cover-over" type="warning">-->
    <!--      cover-over-->
    <!--    </YeButton>-->
    <YeButton mode="glow" type="error">
      glow
    </YeButton>
    <YeButton mode="text-slide" type="primary">
      text-slide
    </YeButton>
    <button class="button button-success">
      普通 Button
    </button>
    <NuxtRouteAnnouncer />
  </div>
</template>
