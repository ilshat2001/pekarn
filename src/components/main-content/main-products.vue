<template>
  <div class="main-products">
    <h1>Продукция</h1>
  </div>

  <div class="products-images">
    <div class="product">
      <div class="product-icon">
        <div class="products-breads"></div>
      </div>
      <h3>Хлеба</h3>
    </div>
    <div class="product">
      <div class="product-icon">
        <div class="products-pies"></div>
      </div>
      <h3>Выпечка</h3>
    </div>
    <div class="product">
      <div class="product-icon">
        <div class="products-conditers"></div>
      </div>
      <h3>Кондитерские изделия</h3>
    </div>
    <div class="product">
      <div class="product-icon">
        <div class="products-gateau"></div>
      </div>
      <h3>Пироги</h3>
    </div>

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
  color: $ren
  background-color: $darkblue

.products-images
  display: flex
  justify-content: space-between
  width: 100%
  color: $ren
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