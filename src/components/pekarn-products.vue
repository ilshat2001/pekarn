<template>
 <div class="pekarn-products">
   <pekarn-products-filter
       @changeType="changeFilter"
       :filter="this.filter"
   />

   <pekarn-products-items :filter="this.filter"/>
 </div>
</template>

<script>
import pekarnProductsFilter from "@/components/products/pekarn-products-filter";
import pekarnProductsItems from "@/components/products/pekarn-products-items";

export default {
  name: "pekarn-products",
  components: {
    pekarnProductsFilter,
    pekarnProductsItems
  },
  data() {
    return {
      filter: null,
    }
  },
  methods: {
    changeFilter(id) {
      if (this.filter === id) {
        this.filter = null
      } else {
        this.filter = id
      }
    }
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
