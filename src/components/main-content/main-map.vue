<template>
<div class="main-map">
  <h1>Где нас найти</h1>
  <h5>Казань, 2-я Старо-Аракчинская, 41</h5>
  <h5>Часы работы</h5>
  <h5>ПН-ВС - 7:30-20:30</h5>
  <div class="map">
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A53b74b4d57a9b9865bcd1a933418312c0d130413525b6a3f4ff9a7b2d8abff65&amp;source=constructor" width="100%" height="700" frameborder="0"></iframe>
  </div>

</div>
</template>

<script>
export default {
  name: "main-map"

}
</script>

<style lang="sass">
.main-map
  background-color: $darkblue
  display: flex
  color: $ren
  flex-direction: column
  width: 100%
  align-items: center
.map
  width: 100%
</style>