<template>
  <div class="main-products">
    <h1>Продукция</h1>
  </div>

  <div class="products-images">
    <div class="products-breads"></div>
    <div class="products-pies"></div>
    <div class="products-conditers"></div>
    <div class="products-gateau"></div>
  </div>
</template>

<script>
export default {
  name: "main-products"
}
</script>

<style lang="sass">
.main-products
  display: flex
  padding-top: 100px

.products-images
  display: flex

  .products-breads
    background-image: url("/src/assets/images/icons/loaf.png")
    +background-image-settings()
    width: 100px
    height: 100px

.products-pies
  background-image: url("/src/assets/images/icons/pies.png")
  +background-image-settings()
  width: 80px
  height: 80px
.products-conditers
  background-image: url("/src/assets/images/icons/conditer.png")
  +background-image-settings()
  width: 80px
  height: 80px

</style>