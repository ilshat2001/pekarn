<template>
  <div
      class="baker-header-burger-menu"
      @click="closeMenu"
  >
    <nav class="burger-menu-nav">
      <h5 @click="$emit('closeBurger')">
        <router-link to="/">
          ГЛАВНАЯ
        </router-link>
      </h5>

      <h5 @click="$emit('closeBurger')">
        <router-link to="/products">
          ПРОДУКЦИЯ
        </router-link>
      </h5>

      <h5 @click="$emit('closeBurger')">
        <router-link to="/vacancies">
          ВАКАНСИИ
        </router-link>
      </h5>

      <h5 @click="$emit('closeBurger')">
        <router-link to="/about">
          О НАС
        </router-link>
      </h5>
    </nav>
  </div>
</template>

<script>
export default {
  name: "baker-header-burger-menu",

  methods: {
    closeMenu(event) {
      if (event.target === event.currentTarget) {
        this.$emit('closeBurger')
      }
    },
  },

  mounted() {
    document.querySelector('#app').style.overflowY = 'hidden'
  },

  beforeUnmount() {
    document.querySelector('#app').style.overflowY = 'scroll'
  }
}
</script>

<style scoped lang="sass">
.baker-header-burger-menu
  position: sticky
  width: 100%
  height: 100vh
  background-color: rgba(0, 0, 0, 0.73)
  top: 0
  left: 0
  display: flex
  align-items: center
  justify-content: center
  z-index: 9999

  .burger-menu-nav
    display: flex
    flex-direction: column
    align-items: center
    gap: 100px
    z-index: 999
</style>
