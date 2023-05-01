<template>
<div class="about-page">
  <div class="about-text">
    <h1>О нас</h1>
    <h3>«Дом хлеба и домашней выпечки» - это место, где всегда можно вкусно провести время.  </h3>
    <h3>У нас большой опыт в пищевом производстве. Мы успели много: разработали и запустили в производство более 200 видов разнообразной и качественной продукции — сытные и сладкие пироги, фирменную выпечку, хлеба, десерты и торты.</h3></div>
  <div class="about-contacts">
    <h1>Контакты</h1>
    <h3>Казань, 2-я Староаракчинская 41</h3>
    <div class="about-location">

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "pekarn-about"
}
</script>

<style scoped lang="sass">
.about-page
  background-color: $darkblue
  top: -100px
  width: 100%
  min-height: 150vh
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  padding: 200px 50px 0
.about-text
  width: 50%
.about-contacts
  width: 100%
  height: 100%
.about-location
  background-image: url("/src/assets/images/location.png")
  +background-image-settings()
</style>