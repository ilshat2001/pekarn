<template>
  <nav>
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
  name: "bakerHeaderNav"
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

    @media (max-width: 1080px)  // phone
      display: none

    @media (min-width: 1081px)  // desktop
      display: flex

    .header-nav
      display: flex
      gap: 50px

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
</style>
