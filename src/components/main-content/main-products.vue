<template>
  <div class="main-products">
    <h1>Продукция</h1>
  </div>

  <div class="products-images">
    <div
        class="product"
        v-for="(navigation, index) in navigationToCatalog"
        :key="index"
    >
      <router-link
          :to="{ path: '/products', query: { filter: navigation.filter }}"
          v-slot="{ navigate }"
          class="product-icon"
      >
        <div :class="navigation.className" @click="navigate"></div>
      </router-link>

      <router-link
          :to="{ path: '/products', query: { filter: navigation.filter }}"
          v-slot="{ navigate }"
      >
        <h3 @click="navigate">Хлеба</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-products",

  data() {
    return {
      navigationToCatalog: [
        {
          filter: "Bread",
          className: "products-breads",
          text: "Хлеба",
        },

        {
          filter: "Vipechka",
          className: "products-pies",
          text: "Выпечка",
        },

        {
          filter: "Konditer",
          className: "products-conditers",
          text: "Кондитерские <br class=\"only-mb\"/>изделия",
        },

        {
          filter: "Pirogi",
          className: "products-gateau",
          text: "Пироги",
        }
      ]
    }
  },
}
</script>

<style lang="sass">
.main-products
  display: flex
  color: $ren
  background-color: $darkblue

.products-images
  width: 100%
  color: $ren
  gap: 50px
  @media (min-width: $desktopMin) // Desktop
    display: flex
    justify-content: space-between
  @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
    display: flex
    flex-direction: column
  @media (max-width: $mobileMax) // Mobile
    display: flex
    flex-direction: column
  .product
    display: flex
    flex-direction: column
    align-items: center
    width: 100%
    text-align: center
    gap: 30px

    .product-icon
      width: 230px
      height: 230px
      padding: 40px
      +border-radius(999px)
      border: 3px solid $ren
      &:hover
        background-color: rgba(254, 194, 99, 0.1)
      > div
        +background-image-settings()
        background-size: contain
        width: 100%
        height: 100%



        &.products-breads
          background-image: url("/src/assets/images/icons/loaf.png")


        &.products-pies
          background-image: url("/src/assets/images/icons/pies.png")

        &.products-conditers
          background-image: url("/src/assets/images/icons/cake.png")

        &.products-gateau
          background-image: url("/src/assets/images/icons/pie.png")


</style>
