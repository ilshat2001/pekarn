<template>
   <div class="pekarn-products">
     <pekarn-products-filter
         :filter="this.filter"
     />

     <pekarn-products-items :filter="this.filter"/>
   </div>
</template>

<script>
import pekarnProductsFilter from "@/components/products/pekarn-products-filter";
import pekarnProductsItems from "@/components/products/pekarn-products-items";

import { scrollToTop } from "@/mixins/scrollToTop";

export default {
  name: "pekarn-products",

  components: {
    pekarnProductsFilter,
    pekarnProductsItems
  },

  computed: {
    filter() {
      return this.$route.query.filter || null
    }
  },

  mounted() {
    scrollToTop()
  }
}
</script>

<style scoped lang="sass">
.pekarn-products
  width: 100%
  min-height: 150vh
  background-color: $darkblue
  position: relative
  top: -100px
  display: flex
  flex-direction: column
  gap: 50px
  padding: 200px 50px 0
  align-items: center
</style>
