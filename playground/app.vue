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

    <YeButton mode="neumorphism-1" type="primary">
      neumorphism-1
    </YeButton>

    <YeButton mode="neumorphism-2" type="primary">
      neumorphism-2
    </YeButton>

    <YeButton mode="neumorphism-3" type="primary">
      neumorphism-3
    </YeButton>

    <YeButton mode="neumorphism-4" type="primary">
      neumorphism-4
    </YeButton>
    <YeButton mode="marquee-sign" type="warning" text="ye" next-text="meishu" />
    <YeButton mode="icon-slide" type="success">
      <svg viewBox="0 0 45.917 45.917">
        <path
          d="M33.523,28.334c-0.717,1.155-1.498,2.358-2.344,3.608c7.121,1.065,10.766,3.347,10.766,4.481
    c0,1.511-6.459,5.054-18.986,5.054c-12.528,0-18.988-3.543-18.988-5.054c0-1.135,3.645-3.416,10.768-4.481
    c-0.847-1.25-1.628-2.453-2.345-3.608C5.365,29.661,0,32.385,0,36.424c0,5.925,11.551,9.024,22.959,9.024s22.958-3.1,22.958-9.024
    C45.917,32.385,40.553,29.661,33.523,28.334z"
        />
        <path
          d="M22.96,36.047c1.032,0,2.003-0.491,2.613-1.325c3.905-5.33,10.813-15.508,10.813-20.827
    c0-7.416-6.012-13.427-13.427-13.427c-7.417,0-13.427,6.011-13.427,13.427c0,5.318,6.906,15.497,10.812,20.827
    C20.957,35.556,21.928,36.047,22.96,36.047z M17.374,13.63c0-3.084,2.5-5.584,5.585-5.584c3.084,0,5.584,2.5,5.584,5.584
    s-2.5,5.584-5.584,5.584C19.874,19.215,17.374,16.715,17.374,13.63z"
        />
      </svg>
    </YeButton>
    <button class="button button-success">
      普通 Button
    </button>
    <NuxtRouteAnnouncer />
  </div>
</template>
