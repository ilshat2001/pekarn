<template>
  <nav>
    <div class="burger">
      <span></span>
    </div>
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

    <div class="header-nav-logo"></div>

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
  mounted() {
    
  }
}
</script>

<style lang="sass">
  nav
    display: flex
    align-items: center
    justify-content: space-between
    padding-left: 50px
    padding-right: 50px
    width: 100%
    max-width: 900px
    z-index: 2
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
.burger
  display: flex
  position: relative
  z-index: 50
  align-items: center
  justify-content: flex-end
  width: 40px
  height: 24px
  @media (min-width: $desktopMin) // Desktop
    display: none
  @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
    display: flex
  @media (max-width: $mobileMax) // Mobile
    display: flex
.burger span
  height: 2px
  width: 100%
  transform: scale(1)
  background-color: white
.burger::before, .burger::after
  content: ' '
  position: absolute
  height: 2px
  width: 100%
  background-color: white
  transition: all 0.3s ease 0s

.burger::before
  top: 0
.burger::after
  bottom: 0

.burger.active span
  transform: scale(0)
.burger.active::before
  top: 50%
  transform: rotate(-45deg) translate(0, -50%)
.burger.active::after
  bottom: 50%
  transform: rotate(45deg) translate(0, 50%)
</style>
