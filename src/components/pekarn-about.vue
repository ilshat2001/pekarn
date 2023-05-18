<template>
  <div class="about-page">
    <section>
      <div class="about-image"></div>

      <div class="about-text">
        <h1 class="title">О нас</h1>

        <div class="text">
          <h3>«Дом хлеба и домашней выпечки»
            - это место, где всегда можно
            вкусно провести время.  </h3>

          <h3>У нас большой опыт в пищевом
            производстве. Мы успели много:
            разработали и запустили в
            производство более 200 видов
            разнообразной и качественной
            продукции — сытные и сладкие пироги,
            фирменную выпечку, хлеба,
            десерты и торты.</h3>
        </div>
      </div>
    </section>

    <div class="about-contacts">
      <h1>Контакты</h1>

      <div class="info">
        <div class="about-location">
          <div class="about-location-logo"></div>

          <h3 class="text">Казань, Старо-Аракчинская 2-я, 41</h3>
        </div>

        <div class="about-number">
          <div class="about-number-logo"></div>

          <h3 class="text">
            <a href="tel:+78435148214">+7 (843) 514‒82‒14</a>
          </h3>
        </div>

        <div class="about-number">
          <div class="about-number-logo"></div>

          <h3 class="text">
            <a href="tel:+79179114989">+7‒917‒911‒49‒89</a>
          </h3>
        </div>
      </div>

      <div class="map">
        <iframe
            class="frame"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A53b74b4d57a9b9865bcd1a933418312c0d130413525b6a3f4ff9a7b2d8abff65&amp;source=constructor"
            frameborder="0"
        ></iframe>
      </div>
    </div>

    <div class="form">
      <form ref="form" @submit.prevent="sendEmail">
        <label>Name</label>

        <input type="text" name="user_name">

        <label>Email</label>

        <input type="email" name="user_email">

        <label>Message</label>

        <textarea name="message"></textarea>

        <input type="submit" value="Send">
      </form>
    </div>
  </div>
</template>

<script>
import emailJS from 'emailjs-com';

export default {
  name: "pekarn-about",

  data() {
    return {
      serviceId: 'service_0wrjrqz',
      templateId: 'template_u1s6hp5',
      publicKey: 'TTrDFJtbkOExJUmFS',
    }
  },

  methods: {
    sendEmail() {
      emailJS.sendForm(this.serviceId, this.templateId, this.$refs.form, this.publicKey)
          .then((result) => {
            console.log('SUCCESS!', result.text);
          }, (error) => {
            console.log('FAILED...', error.text);
          });
    },
  },
}
</script>

<style scoped lang="sass">
.about-page
  background-color: $darkblue
  top: -100px
  width: 100%
  position: relative
  display: flex
  align-items: center
  flex-direction: column
  min-height: 120vh

  @media (min-width: $desktopMin) // Desktop
    padding: 200px 50px 0
    gap: 300px

  @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
    padding: 200px 30px 0
    gap: 200px

  @media (max-width: $mobileMax) // Mobile
    padding: 200px 16px 0
    gap: 100px

  section
    display: flex
    width: 100%
    justify-content: space-between
    gap: 50px

    @media (min-width: $desktopMin) // Desktop
    align-items: center

    @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
      flex-direction: column

    @media (max-width: $mobileMax) // Mobile
      flex-direction: column

    .about-image
      background-image: url("/src/assets/images/room.jpeg")
      +background-image-settings()

      @media (min-width: $desktopMin) // Desktop
        width: 500px
        height: 500px
        +border-radius(50px)

      @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
        width: 100%
        padding-top: 50%
        +border-radius(30px)

      @media (max-width: $mobileMax) // Mobile
        width: 100%
        padding-top: 50%
        +border-radius(24px)

    .about-text
      width: 100%
      color: $ren
      display: flex
      flex-direction: column
      flex: 1

      @media (min-width: $desktopMin) // Desktop
        gap: 50px

      @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
        gap: 30px

      @media (max-width: $mobileMax) // Mobile
        gap: 16px

      .title
        text-align: center

      .text

  .about-contacts
    width: 100%
    display: flex
    flex-direction: column
    gap: 60px
    align-items: center
    color: $ren
    +border-radius(20px)
    border: 4px solid $ren
    padding-top: 30px
    overflow: hidden

    .info
      display: flex
      flex-direction: column
      gap: 30px
      align-items: flex-start
      padding: 0 50px

      > *
        display: flex
        gap: 30px

        &.about-location
          .about-location-logo
            background-image: url("/src/assets/images/location.png")
            +background-image-settings()
            width: 40px
            height: 40px

          .text
            flex: 1
            word-break: break-all

        &.about-number
          .about-number-logo
            background-image: url("/src/assets/images/phone.png")
            +background-image-settings()
            width: 32px
            height: 32px

          .text
            flex: 1
            word-break: break-all

    .map
      width: 100%
      height: 500px

      .frame
        width: 100%
        height: 100%

  .form
    color: red
</style>
