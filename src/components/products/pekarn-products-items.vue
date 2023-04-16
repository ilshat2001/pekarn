<template>
 <div class="pekarn-products-items">
   <div
       class="product-item"
       v-for="item in productsList"
       :key="item.name"

       v-show="this.filter === null || item.type === this.filter"
   >
     <h3>{{ item.name }}</h3>

     <div
         class="item-img"
         :style="`background-image: url('/assets/images/products/${item['imageName']}')`"
     ></div>

     <h5>{{ item.description }}</h5>
   </div>
 </div>
</template>

<script>
import {productsList} from "@/components/products/products-data";

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
  gap: 50px
  width: 100%

  .product-item
    width: calc(25% - 50px * 3 / 4)
    padding: 30px
    +border-radius(20px)
    color: $ren
    text-align: center
    display: flex
    flex-direction: column
    gap: 50px
    border: 4px solid $ren

    .item-img
      width: 100%
      padding-top: 65%
      +background-image-settings()
      +border-radius(10px)
</style>
