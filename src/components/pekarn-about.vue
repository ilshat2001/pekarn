<template>
<div class="about-page">
  <section>
  <div class="about-image"></div>
  <div class="about-text">
    <h1>О нас</h1>
    <h3>«Дом хлеба и домашней выпечки» - это место, где всегда можно вкусно провести время.  </h3>
    <h3>У нас большой опыт в пищевом производстве. Мы успели много: разработали и запустили в производство более 200 видов разнообразной и качественной продукции — сытные и сладкие пироги, фирменную выпечку, хлеба, десерты и торты.</h3>
  </div>
  </section>
  <div class="about-contacts">
    <h1>Контакты</h1>
    <div class="about-location">
      <div class="about-location-logo">
      </div>
      <h3>Казань, Старо-Аракчинская 2-я, 41</h3>
    </div>
    <div class="about-number">
      <div class="about-number-logo"></div>
      <h3><a href="tel:+78435148214">+7 (843) 514‒82‒14</a></h3>
    </div>
      <div class="about-number">
      <div class="about-number-logo"></div>
      <h3><a href="tel:+79179114989">+7‒917‒911‒49‒89</a></h3>
    </div>
    <div class="map">
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A53b74b4d57a9b9865bcd1a933418312c0d130413525b6a3f4ff9a7b2d8abff65&amp;source=constructor" width="99%" height="600" frameborder="0"></iframe>
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
  align-items: center
  padding: 200px 50px 0
  flex-direction: column
  gap: 30px
.about-text
  width: 70%
  color: $ren
.about-contacts
  width: 70%
  height: 100%
  display: flex
  flex-direction: column
  gap: 30px
  align-items: center
  color: $ren
  +border-radius(20px)
  border: 4px solid $ren
.about-location-logo
  background-image: url("/src/assets/images/location.png")
  +background-image-settings()
  width: 40px
  height: 40px
.about-location
  display: flex
.about-number-logo
  background-image: url("/src/assets/images/phone.png")
  +background-image-settings()
  width: 32px
  height: 32px
.about-number
  display: flex
.about-image
  background-image: url("/src/assets/images/room.jpeg")
  +background-image-settings()
  width: 500px
  height: 500px
section
  display: flex
  width: 100%
  justify-content: space-between
.map
  display: flex
  justify-content: center
  padding-bottom: 10px
</style>