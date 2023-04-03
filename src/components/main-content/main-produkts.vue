<template>
<div class="main-produkts">
  <h1>Продукция</h1>
</div>
  <div class="produkts-images">
    <div class="produkts-breads"></div>
    <div class="produkts-pies"></div>
    <div class="produkts-conditers"></div>
    <div class="produkts-gateau"></div>
  </div>
</template>

<script>
export default {
  name: "main-produkts"
}
</script>

<style lang="sass">
.main-produkts
  display: flex
  padding-top: 100px
.produkts-images
  display: flex
.products-breads
  background-image: url("/src/assets/images/icons/loaf.png")
  +background-image-settings()
  width: 100px
  height: 100px
  background-color: red
</style>