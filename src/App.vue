<template>
  <baker-header-burger-menu
      v-if="isActiveBurgerMenu"
      @closeBurger="isActiveBurgerMenu = false"
  />

  <modal-send-mail
      v-if="isShownModal"
      @closeModal="isShownModal = false"
  />

  <div
      class="front"
      id="front"
      :class="{
        'active': isActiveBurgerMenu,
      }"
  >
    <baker-header-nav
        :isBurgerMenuActive="isActiveBurgerMenu"
        @burgerClick="handleBurgerMenu"
        class="header"
    />

    <router-view
        class="front-content"
        @openModal="isShownModal = true"
    />
  </div>

  <div class="parallax-deep parallax-deep1"></div>
  <div class="parallax-deep parallax-deep2"></div>
  <div class="parallax-deep parallax-deep3"></div>
</template>

<script>
import bakerHeaderNav from "@/components/header/baker-header-nav";
import bakerHeaderBurgerMenu from "@/components/header/baker-header-burger-menu";
import modalSendMail from "@/components/modalSendMail/modalSendMail";

export default {
  name: 'App',

  components: {
    bakerHeaderNav,
    bakerHeaderBurgerMenu,
    modalSendMail,
  },

  data() {
    return {
      isActiveBurgerMenu: false,

      isShownModal: false,
    }
  },

  methods: {
    handleBurgerMenu() {
      this.isActiveBurgerMenu = !this.isActiveBurgerMenu

      document.querySelector('#front').style.overflow = 'hidden'
    },
  },
}
</script>

<style lang="sass">
  #app
    position: relative
    perspective: 300px
    height: 100vh
    overflow: hidden
    overflow-y: scroll

    .front
      z-index: 999
      position: absolute
      width: 100%
      transform: translateZ(0)
      display: flex
      flex-direction: column
      align-items: center
      top: 0

      .front-content
        width: 100%

    .parallax-deep
      overflow: hidden
      position: absolute
      height: 100vh
      width: 100%
      top: 0

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
