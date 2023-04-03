<template>
  <div class="front">
    <baker-header/>

    <div class="content">
      <mainAdvantages/>
      <main-products/>
    </div>
  </div>

  <div class="parallax-deep parallax-deep1"></div>
  <div class="parallax-deep parallax-deep2"></div>
  <div class="parallax-deep parallax-deep3"></div>
</template>

<script>
import bakerHeader from "@/components/baker-header";
import mainAdvantages from "@/components/main-content/main-advantages";
import MainProducts from "@/components/main-content/main-products";

export default {
  name: 'App',
  components: {
    MainProducts,
    bakerHeader,
    mainAdvantages
  }
}
</script>

<style lang="sass">
  #app
    position: relative
    perspective: 300px
    height: 100vh
    overflow: hidden
    overflow-y: auto

    .front
      z-index: 2
      position: absolute
      width: 100%
      transform: translateZ(0)
      display: flex
      flex-direction: column

      .content
        padding-top: 100px
        height: 100vh
        display: flex
        flex-direction: column
        align-items: center
        background-color: #131119

    .parallax-deep
      overflow: hidden
      position: absolute
      height: 100vh
      width: 100%

      &.parallax-deep1
        transform: translateZ(-60px) scale(1.21)
        background-image: url("/src/assets/images/parallax/cookies.png")
        z-index: -1
        +background-image-settings(cover, no-reepat, right center)

      &.parallax-deep2
        transform: translateZ(-240px) scale(1.82)
        background-image: url("/src/assets/images/parallax/fon.png")
        z-index: -2
        +background-image-settings(cover, no-reepat, right center)

      &.parallax-deep3
        transform: translateZ(-450px) scale(2.52)
        background-image: url("/src/assets/images/parallax/main.png")
        z-index: -3
        +background-image-settings(cover, no-reepat, right center)
</style>
