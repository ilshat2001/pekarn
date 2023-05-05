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

  @media (min-width: $desktopMin) // Desktop
    padding-left: 100px
    padding-right: 100px

  @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
    padding-left: 32px
    padding-right: 32px

  @media (max-width: $mobileMax) // Mobile
    padding-left: 16px
    padding-right: 16px

  .advantage-item
    display: flex
    flex-direction: column
    align-items: center
    gap: 100px
    color: #FEC262

    .advantage-item-content
      display: flex
      gap: 50px

      @media (min-width: $desktopMin) // Desktop

      @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
        align-items: center

      @media (max-width: $mobileMax) // Mobile
        flex-direction: column

      .advantages-image
        background-image: url("/src/assets/images/advantage-image.jpg")
        +background-image-settings()
        display: flex

        @media (min-width: $desktopMin) // Desktop
          width: 400px
          height: 100%

        @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
          width: 300px
          height: 60%

        @media (max-width: $mobileMax) // Mobile
          width: 100%
          padding-top: 150%

      .advantages-text
        flex: 1
        display: flex
        flex-direction: column
        gap: 50px
        color: #FEC262

        .advantage
          display: flex

          @media (min-width: $desktopMin) // Desktop
            gap: 50px

          @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
            gap: 30px

          @media (max-width: $mobileMax) // Mobile
            gap: 16px
            flex-direction: column
            align-items: center
            text-align: center

          .advantage-icon
            width: 100px
            height: 100px
            +background-image-settings()

          .advantage-text
            flex: 1
</style>
