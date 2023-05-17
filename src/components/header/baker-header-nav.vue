<template>
  <nav>
    <div
        class="burger"
        @click="handleBurger"
        :class="{
          'active': isBurgerMenuActive,
        }"
    >
      <span></span>
    </div>

    <div></div>

    <ul class="header-nav">
      <li class="header-nav-item">
        <h5>
          <router-link to="/" class="header-nav-link">
            ГЛАВНАЯ
          </router-link>
        </h5>
      </li>

      <li class="header-nav-item">
        <hr>
      </li>

      <li class="header-nav-item">
        <h5>
          <router-link to="/products" class="header-nav-link">
            ПРОДУКЦИЯ
          </router-link>
        </h5>
      </li>
    </ul>

    <div
        class="header-nav-logo"
        :class="{
          'active': isBurgerMenuActive,
        }"
    ></div>

    <ul class="header-nav">
      <li class="header-nav-item">
        <h5>
          <router-link to="/vacancies" class="header-nav-link">
            ВАКАНСИИ
          </router-link>
        </h5>
      </li>

      <li class="header-nav-item">
        <hr>
      </li>

      <li class="header-nav-item">
        <h5>
          <router-link to="/about" class="header-nav-link">
            О НАС
          </router-link>
        </h5>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "bakerHeaderNav",

  props: {
    isBurgerMenuActive: {
      type: Boolean,
      default: false,
    }
  },

  methods: {
    handleBurger() {
      this.$emit('burgerClick')
    },
  },
}
</script>

<style lang="sass" scoped>
  nav
    display: flex
    align-items: center
    justify-content: space-between
    padding: 0 50px
    width: 100%
    z-index: 2
    +user-select(none)

    @media (min-width: $desktopMin) // Desktop
      max-width: 900px

    @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table

    @media (max-width: $mobileMax) // Mobile

    .burger
      display: flex
      position: relative
      z-index: 9999
      align-items: center
      justify-content: flex-end
      width: 40px
      height: 24px
      transition: all 0.6s ease 0s
      color: $ren

      @media (min-width: $desktopMin) // Desktop
        display: none

      @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
        display: flex

      @media (max-width: $mobileMax) // Mobile
        display: flex

      &:before, &:after
        content: ''
        position: absolute
        height: 2px
        width: 100%
        background-color: $ren
        transition: all 0.6s ease 0s


      &:before
        top: 0

      &:after
        bottom: 0

      span
        height: 2px
        width: 100%
        transform: scale(1)
        background-color: $ren

      &.active
        &:before
          top: 50%
          transform: rotate(-45deg) translate(0, -50%)

        &:after
          bottom: 50%
          transform: rotate(45deg) translate(0, 50%)

        span
          transform: scale(0)

    .header-nav
      gap: 50px

      @media (min-width: $desktopMin) // Desktop
        display: flex

      @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
        display: none

      @media (max-width: $mobileMax) // Mobile
        display: none

      .header-nav-item
        hr
          height: 100%
          width: 1px
          background-color: $ren

        .header-nav-link
          color: $ren

          &:hover
            border-bottom: 1px solid $ren

    .header-nav-logo
      width: 100px
      height: 100px
      background-image: url("/src/assets/images/logo.png")
      +background-image-settings()
      z-index: -999

      &.active
</style>
