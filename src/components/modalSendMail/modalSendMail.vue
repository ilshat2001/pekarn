<template>
  <div class="modal-send-mail">
    <div class="window">
      <form ref="form" @submit.prevent="handleClick">
        <div
            class="close-button"
            @click="$emit('closeModal')"
        >
          <div class="line1"></div>
          <div class="line2"></div>
        </div>

        <h3 class="title">Обратная связь</h3>

        <div class="inputs">
          <div class="input">
            <h4 class="title">Имя</h4>

            <input type="text" name="user_name" class="js-form-clear">
          </div>

          <div class="input">
            <h4 class="title">Почта</h4>

            <input type="email" name="user_email" class="js-form-clear">
          </div>

          <div class="input">
            <h4 class="title">Сообщение</h4>

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
    </div>
  </div>
</template>

<script>
import emailJS from "emailjs-com";

export default {
  name: "modalSendMail",

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

.modal-send-mail
  position: sticky
  width: 100%
  height: 100vh
  background-color: rgba(0, 0, 0, 0.6)
  z-index: 99999999
  display: flex
  align-items: center
  justify-content: center
  top: 0

  .window
    width: 80%
    height: 600px
    min-height: 70%
    background-color: black
    border: 3px solid $ren
    +border-radius(40px)
    display: flex
    align-items: center
    justify-content: center

    form
      color: black
      display: flex
      flex-direction: column
      align-items: center
      gap: 20px
      padding: 10px
      width: 100%
      position: relative

      .close-button
        position: absolute
        top: 0
        right: 50px
        display: flex
        align-items: center
        justify-content: center
        cursor: pointer
        width: 40px
        height: 40px
        +border-radius(10px)

        &:hover
          background-color: rgba(254, 194, 98, 0.1)

        .line1
          position: absolute
          width: 30px
          height: 3px
          +border-radius(999px)
          transform: rotate(45deg)
          background-color: $ren

        .line2
          position: absolute
          width: 30px
          height: 3px
          +border-radius(999px)
          transform: rotate(-45deg)
          background-color: $ren

      .title
        text-align: center
        color: $ren

      .inputs
        display: flex
        flex-direction: column
        align-items: center
        gap: 10px
        width: 100%

        .input
          display: flex
          flex-direction: column
          align-items: center
          gap: 5px
          width: 100%

          input
            padding: 5px 30px
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
            resize: none
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
</style>
