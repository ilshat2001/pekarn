<template>
  <div class="front">
    <baker-header/>
    <div class="content">
      <div class="advantages">
      <div class="advantages-image"></div>
        <div class="advantages-text"> <h5>Свежеиспеченные продукты: мы готовим свежее хлебобулочные изделия каждый день, что значительно повышает их качество по сравнению с продуктами, которые можно купить в супермаркетах. </h5>
        <h5>Большой выбор: предлагаем широкий ассортимент хлебобулочных изделий, включая хлеб, булочки, пирожные, торты, печенье и многое другое. Это позволяет выбрать изделие, которое наиболее подходит для вашего вкуса и потребностей.</h5>
        <h5>Качество ингредиентов:  как правило, используем высококачественные ингредиенты, такие как мука высшего сорта, свежие яйца, настоящее масло и т.д. Это позволяет получить продукты высокого качества.</h5>
        <h5>Альтернатива здоровому питанию: предлагаем альтернативу здоровому питанию, такую как безглютеновые или безлактозные продукты, которые подходят для людей с определенными потребностями в питании.</h5>
        </div>
      </div>
    </div>

  </div>
  <div class="parallax-deep parallax-deep1"></div>
  <div class="parallax-deep parallax-deep2"></div>
  <div class="parallax-deep parallax-deep3"></div>
</template>

<script>
import bakerHeader from "@/components/baker-header";

export default {
  name: 'App',
  components: {
    bakerHeader
  }
}
</script>

<style lang="sass">
  #app
    position: relative
    perspective: 300px
    height: 100vh
    overflow: hidden
    overflow-y: auto

    .front
      z-index: 2
      position: absolute
      width: 100%
      transform: translateZ(0)
      .content
        height: 100vh
        background-color: #131119
        padding-top: 100px
        padding-left: 10%

    .parallax-deep
      overflow: hidden
      position: absolute
      height: 100vh
      width: 100%

      &.parallax-deep1
        transform: translateZ(-60px) scale(1.21)
        background-image: url("/src/assets/images/parallax/cookies.png")
        z-index: -1
        +background-image-settings(cover, no-reepat, right center)

      &.parallax-deep2
        transform: translateZ(-240px) scale(1.82)
        background-image: url("/src/assets/images/parallax/fon.png")
        z-index: -2
        +background-image-settings(cover, no-reepat, right center)

      &.parallax-deep3
        transform: translateZ(-450px) scale(2.52)
        background-image: url("/src/assets/images/parallax/main.png")
        z-index: -3
        +background-image-settings(cover, no-reepat, right center)
    .advantages-image
      background-image: url("/src/assets/images/advantage-image.jpg")
      width: 300px
      height: 350px
      +background-image-settings()
      display: flex
    .advantages
      display: flex

</style>
