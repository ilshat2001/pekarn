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

    <form ref="form" @submit.prevent="handleClick">
      <h1 class="title">Обратная связь</h1>

      <div class="inputs">
        <div class="input">
          <h3 class="title">Имя</h3>

          <input type="text" name="user_name" class="js-form-clear">
        </div>

        <div class="input">
          <h3 class="title">Почта</h3>

          <input type="email" name="user_email" class="js-form-clear">
        </div>

        <div class="input">
          <h3 class="title">Сообщение</h3>

          <textarea name="message" class="js-form-clear"></textarea>
        </div>
      </div>

      <div class="footer">
        <div class="input-wrapper">
          <input type="submit" value="Отправить" :disabled="loading">

          <div v-if="loading" class="loading">
            <div class="round"></div>
          </div>
        </div>

        <div v-show="error" class="error-message">
          <h6 style="color: red">Пожалуйста, попробуйте позже</h6>
        </div>

        <div v-show="success" class="success-message">
          <h6 style="color: green">Письмо успешно отправлено</h6>
        </div>

        <div v-show="emptyWarning" class="success-message">
          <h6 style="color: orange">Заполните все поля</h6>
        </div>
      </div>
    </form>

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
      </div>

      <div class="map">
        <iframe
            class="frame"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A53b74b4d57a9b9865bcd1a933418312c0d130413525b6a3f4ff9a7b2d8abff65&amp;source=constructor"
            frameborder="0"
        ></iframe>
      </div>
    </div>

  </div>
</template>

<script>
import emailJS from 'emailjs-com';

export default {
  name: "pekarn-about",

  data() {
    return {
      // serviceId: 'service_0wrjrqz',
      // templateId: 'template_u1s6hp5',
      // publicKey: 'TTrDFJtbkOExJUmFS',

      serviceId: 'service_njm14vp',
      templateId: 'template_pwnhmmo',
      publicKey: 'XrDXmTA3UlYRq2vXg',

      error: false,
      success: false,

      loading: false,

      emptyWarning: false,
    }
  },

  methods: {
    async handleClick() {
      this.error = false
      this.success = false
      this.emptyWarning = false

      const inputsArray = Array.from(this.$el.getElementsByClassName('js-form-clear'))
      if (inputsArray.every(input => input.value !== '')) {
        this.loading = true

        await this.sendMail()
      } else {
        this.emptyWarning = true
      }
    },

    async sendMail() {
      emailJS.sendForm(
          this.serviceId,
          this.templateId,
          this.$refs.form,
          this.publicKey
      ).then(
          (result) => {
            console.log('SUCCESS!', result.text);

            this.clearForm()

            this.success = true
            this.loading = false
          },
          (error) => {
            console.log('FAILED...', error.text);

            this.error = true
            this.loading = false
          });
    },

    clearForm() {
      const inputsArray = Array.from(this.$el.getElementsByClassName('js-form-clear'))

      inputsArray.forEach(input => input.value = '')
    },
  },
}
</script>

<style scoped lang="sass">
@-webkit-keyframes load8
  0%
    -webkit-transform: rotate(0deg)
    transform: rotate(0deg)

  100%
    -webkit-transform: rotate(360deg)
    transform: rotate(360deg)


@keyframes load8
  0%
    -webkit-transform: rotate(0deg)
    transform: rotate(0deg)

  100%
    -webkit-transform: rotate(360deg)
    transform: rotate(360deg)



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

  form
    color: black
    display: flex
    flex-direction: column
    align-items: center
    gap: 50px
    padding: 20px
    +border-radius(15px)
    border: 3px solid $ren
    width: 100%

    .title
      text-align: center
      color: $ren

    .inputs
      display: flex
      flex-direction: column
      align-items: center
      gap: 30px
      width: 100%

      .input
        display: flex
        flex-direction: column
        align-items: center
        gap: 15px
        width: 100%

        input
          padding: 10px 30px
          background: #ccc
          border: 0 none
          -webkit-border-radius: 5px
          border-radius: 5px
          width: 50%
          font-family: "Roboto Mono" , sans-serif
          font-weight: 400
          font-size: 20px

        textarea
          padding: 10px 30px
          background: #ccc
          border: 0 none
          -webkit-border-radius: 5px
          border-radius: 5px
          resize: vertical
          width: 50%
          font-family: "Roboto Mono" , sans-serif
          font-weight: 400
          font-size: 20px

    .footer
      display: flex
      flex-direction: column
      gap: 10px
      align-items: center

      .input-wrapper
        position: relative
        display: flex

        input
          background-color: transparent
          border: 2px solid $ren
          +border-radius(10px)
          padding: 10px 20px
          color: $ren
          cursor: pointer
          font-size: 30px
          display: flex

          &:hover
            background-color: rgba(254, 194, 98, 0.1)

        .loading
          display: flex
          align-items: center
          justify-content: center
          width: 100%
          height: 100%
          position: absolute
          top: 0
          left: 0
          background-color: rgba(255, 192, 203, 0.13)
          +border-radius(10px)

          .round
            width: 30px
            height: 30px
            +border-radius(50%)
            border-top: 5px solid rgba(255, 255, 255, 0.2)
            border-right: 5px solid rgba(255, 255, 255, 0.2)
            border-bottom: 5px solid rgba(255, 255, 255, 0.2)
            border-left: 5px solid #ffffff
            -webkit-transform: translateZ(0)
            -ms-transform: translateZ(0)
            transform: translateZ(0)
            -webkit-animation: load8 1.1s infinite linear
            animation: load8 1.1s infinite linear

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
</style>
