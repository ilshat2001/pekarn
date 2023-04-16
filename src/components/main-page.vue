<template>
  <div class="main-page">
    <baker-header/>

    <div class="content">
      <mainAdvantages/>
      <main-products/>
      <main-map/>
    </div>
  </div>
</template>

<script>
import bakerHeader from "@/components/main-content/baker-header";
import mainAdvantages from "@/components/main-content/main-advantages";
import MainProducts from "@/components/main-content/main-products";
import MainMap from "@/components/main-content/main-map";

export default {
  name: "main-page",
  components: {
    MainMap,
    MainProducts,
    bakerHeader,
    mainAdvantages
  }
}
</script>

<style scoped lang="sass">
.main-page
  position: relative
  top: -100px

  .content
    padding-top: 100px
    height: 100vh
    display: flex
    flex-direction: column
    align-items: center
    background-color: #131119
    gap: 100px
</style>
