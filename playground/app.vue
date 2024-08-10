<script setup lang='ts'>
import '@ye-ui/components/style.css'
import { YeButton, YeInput, YeLoader } from '@ye-ui/components'
</script>

<template>
  <div>
    <YeButton mode="basic" type="error" size="sm">
      basic
    </YeButton>
    <YeButton mode="glow" type="error">
      glow
    </YeButton>
    <YeButton mode="text-slide" type="success">
      text-slide
    </YeButton>

    <YeButton mode="neumorphism-1" type="info">
      neumorphism-1
    </YeButton>

    <YeButton mode="neumorphism-2" type="error">
      neumorphism-2
    </YeButton>

    <YeButton mode="neumorphism-3" type="primary">
      neumorphism-3
    </YeButton>

    <YeButton mode="neumorphism-4" type="warning">
      neumorphism-4
    </YeButton>

    <YeButton mode="marquee-sign" type="warning" text="ye" next-text="meishu" />

    <YeButton mode="icon-slide" type="success" size="lg">
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

    <YeButton mode="icon-pulse" type="success" size="lg">
      <svg viewBox="0 0 597.975 597.975">
        <path
          d="M325.125,26.138c-33.15,0-65.025,6.375-95.625,17.85c0,1.275,0,1.275,0,2.55v52.275
       c29.325-14.025,61.2-21.675,95.625-21.675c122.4,0,221.85,99.45,221.85,221.85c0,122.4-99.449,221.851-221.85,221.851
       c-34.425,0-66.3-7.65-95.625-21.676v49.726c0,1.274,0,3.825,0,5.1c29.325,11.476,61.2,17.851,95.625,17.851
       c150.45,0,272.85-122.4,272.85-272.851C597.975,148.538,475.575,26.138,325.125,26.138z"
        />
        <path
          d="M218.025,383.138c-8.925,0-15.3-6.375-15.3-15.3v-1.275c0-3.825,1.275-8.925,5.1-11.475l16.575-15.301
             c35.7-31.875,53.55-51,54.825-70.125c0-14.025-7.65-24.225-26.775-24.225c-7.65,0-15.3,2.55-21.675,5.1
             c-3.825,1.275-7.65,1.275-11.475,0c-3.825-1.275-6.375-3.825-7.65-7.65l0,0c-2.55-6.375,0-15.3,6.375-17.85
             c11.475-6.375,26.775-10.2,43.35-10.2c36.975,0,58.65,21.675,58.65,52.275c0,28.05-20.4,49.726-44.625,71.4l-15.3,12.75l0,0
             h47.175c8.925,0,15.3,7.649,15.3,15.3s-7.65,15.3-15.3,15.3L218.025,383.138L218.025,383.138z"
        />
        <path
          d="M408,383.138c-10.2,0-17.85-7.65-17.85-17.851v-21.675h-57.375c-8.926,0-15.301-7.649-15.301-15.3v-5.1
             c0-2.551,1.275-6.375,2.551-8.926l56.1-89.25c2.55-5.1,7.65-7.65,14.025-7.65H413.1c8.926,0,15.301,7.65,15.301,15.3v81.6h5.1
             c7.65,0,14.025,6.375,14.025,14.025s-6.375,14.025-14.025,14.025h-5.1v21.675C427.125,375.487,418.2,383.138,408,383.138z
              M390.15,314.287v-36.975c0-10.2,0-20.4,1.274-30.6h-1.274c-5.101,10.2-10.2,20.4-15.301,30.6l-21.675,35.7l0,0h36.976V314.287
             z"
        />
        <path
          d="M191.25,441.787c0-22.949-17.85-43.35-40.8-43.35H127.5v-204h22.95c22.95,0,40.8-16.575,40.8-39.525V46.538
       c0-22.95-17.85-40.8-40.8-40.8C67.575,5.737,0,72.038,0,154.913v286.875c0,82.875,67.575,150.45,150.45,150.45
       c22.95,0,40.8-17.85,40.8-40.8V441.787z"
        />
      </svg>
    </YeButton>

    <YeButton mode="tilted-diagonal" type="info">
      tilted-diagonal
    </YeButton>

    <YeButton mode="diagonal-swipe" type="error">
      diagonal-swipe
    </YeButton>

    <YeButton mode="double-diagonal" type="primary">
      double-diagonal
    </YeButton>

    <button class="text-lg">
      普通按钮
    </button>


    <YeInput mode="search" type="success" />
    <YeInput mode="search" type="info" />
    <YeInput mode="wave-group" type="info" name="yemeishu" width="300px" />
    <YeInput mode="wave-group" type="error" name="吴海平" width="500px" />

    <YeLoader mode="spin" type="primary" name="吴海平" width="500px" />
    <YeLoader mode="more-circle" type="success" name="吴海平" width="500px" />
  </div>
</template>
