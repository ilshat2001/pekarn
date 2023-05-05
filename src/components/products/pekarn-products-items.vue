<template>
 <div class="pekarn-products-items">
   <div
       class="product-item"
       v-for="item in productsList"
       :key="item.name"

       v-show="this.filter === null || item.type === this.filter"
   >
     <h3 class="name">{{ item.name }}</h3>

     <div
         class="item-img"
         :style="`background-image: url('/assets/images/products/${item['imageName']}')`"
     ></div>

     <h5>{{ item.description }}</h5>
   </div>
 </div>
</template>

<script>
import { productsList } from "@/components/products/products-data";

export default {
  name: "pekarn-products-items",
  props: {
    filter: {
      type: String,
      default: null,
    }
  },
  data() {
    return {
      productsList
    }
  }
}
</script>

<style scoped lang="sass">
.pekarn-products-items
  display: flex
  flex-wrap: wrap
  width: 100%

  @media (min-width: $desktopMin) // Desktop
    gap: 50px

  @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
    gap: 30px

  @media (max-width: $mobileMax) // Mobile
    gap: 16px

  .product-item
    +border-radius(20px)
    color: $ren
    text-align: center
    display: flex
    flex-direction: column
    gap: 50px

    @media (min-width: $desktopMin) // Desktop
      border: 4px solid $ren
      width: calc(25% - 50px * 3 / 4)
      padding: 30px

    @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
      border: 2px solid $ren
      width: calc(100% / 2 - 30px * 1 / 2)
      padding: 24px

    @media (max-width: $mobileMax) // Mobile
      border: 1px solid $ren
      width: 100%
      padding: 16px

    .name
      @media (min-width: $desktopMin) // Desktop
        font-size: 32px

      @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
        font-size: 30px

      @media (max-width: $mobileMax) // Mobile
        font-size: 26px

    .item-img
      width: 100%
      padding-top: 65%
      +background-image-settings()
      +border-radius(10px)
</style>
