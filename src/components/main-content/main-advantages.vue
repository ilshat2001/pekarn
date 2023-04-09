<template>
  <div class="main-advantages">
    <div class="advantage-item">
      <h1>Наши преимущества</h1>

      <div class="advantage-item-content">
        <div class="advantages-image"></div>
        <div class="advantages-text">
          <div class="advantage"
               v-for="advantage in advantagesList"
               :key="advantage['imageName']"
          >
            <div class="advantage-icon"
                 :style="`background-image: url('/assets/images/advantages/${advantage['imageName']}')`"
            ></div>

            <div class="advantage-text">
              <h5>
                {{ advantage.text }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {advantagesList} from "@/components/main-content/advantages-list";

export default {
  name: "main-advantages",

  data() {
    return {
      advantagesList
    }
  }
}
</script>

<style scoped lang="sass">
.main-advantages
  display: flex
  flex-direction: column
  max-width: 1880px
  width: 100%
  padding-left: 100px
  padding-right: 100px

  .advantage-item
    display: flex
    flex-direction: column
    align-items: center
    gap: 100px
    color: #FEC262

    .advantage-item-content
      display: flex
      gap: 50px

      .advantages-image
        background-image: url("/src/assets/images/advantage-image.jpg")
        width: 400px
        height: 550px
        +background-image-settings()
        display: flex

      .advantages-text
        flex: 1
        display: flex
        flex-direction: column
        gap: 50px
        color: #FEC262

        .advantage
          display: flex
          gap: 50px

          .advantage-icon
            width: 100px
            height: 100px
            +background-image-settings()

          .advantage-text
            flex: 1
</style>
