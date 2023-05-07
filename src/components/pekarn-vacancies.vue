<template>
  <div class="pekarn-vacancies">
    <div class="vacancy">
      <div class="image baker"></div>

      <div class="text">
        <h2 class="title">Пекарь</h2>

        <h4>Условия:</h4>

        <h5>•график работы 2/2 или 3/2;</h5>

        <h5>•режим работы с 00:00 до 12:00;</h5>

        <h5>•оплата труда от 1 800 до 2 200 р/смена;</h5>

        <h5>•выплаты 2 раза в месяц;</h5>

        <h5>•обучение для кандидатов.</h5>

        <h5>•выезд на работу на такси.</h5>

        <h4>Обязанности:</h4>

        <h5>•замес теста и приготовление хлебобулочных изделий;</h5>

        <h5>•поддержание порядка на рабочем месте;</h5>

        <h5>•работа со специализированным оборудованием и инвентарём.</h5>
      </div>
    </div>

    <div class="vacancy">
      <div class="image konditer"></div>

      <div class="text">
        <h2 class="title">Кондитер</h2>

        <h4>Условия:</h4>

        <h5>•график работы 2/2, 3/3, 5/2;</h5>

        <h5>•график обговаривается индивидуально с кандидатом;</h5>

        <h5>•оплата 1625 р/смена;</h5>

        <h5>•выплаты 2 раза в месяц;</h5>

        <h5>•обучение для кандидатов.</h5>

        <h4>Обязанности:</h4>

        <h5>•приготовление слоёного теста/кондитерских изделий;</h5>

        <h5>•замес теста и приготовление кондитерских изделий;</h5>

        <h5>•работа со специализированным оборудованием и инвентарём;</h5>

        <h5>•желание работать и развиваться.</h5>
      </div>
    </div>

    <div class="vacancy">
      <div class="image cashier"></div>

      <div class="text">
        <h2 class="title">Продавец-кассир</h2>

        <h4>Условия:</h4>

        <h5>•график работы 2/2 или 3/2;</h5>

        <h5>•режим работы день с 07:00 до 19:00;</h5>

        <h5>•оплата труда от 1500 р/смена;</h5>

        <h5>•выплаты 2 раза в месяц;</h5>

        <h5>•обучение для кандидатов.</h5>

        <h4>Обязанности:</h4>

        <h5>•Продажа хлебобулочных, кондитерских и замороженных изделий;</h5>

        <h5>•Поддержание порядка на рабочем месте;</h5>

        <h5>•Желание работать с людьми.</h5>
      </div>
    </div>

    <div class="vacancy">
      <div class="image cleaner"></div>

      <div class="text">
        <h2 class="title">Кухонный работник</h2>

        <h4>Условия:</h4>

        <h5>•график работы 2/2, 3/3;</h5>

        <h5>•режим работы с 07:00 до 19:00;</h5>

        <h5>•оплата труда от 900 до 1100 р/смена;</h5>

        <h5>•выплаты 2 раза в месяц;</h5>

        <h4>Обязанности:</h4>

        <h5>•помывка, чистка, варка овощей (работа на комбайнах);</h5>

        <h5>•приготовление служебного обеда;</h5>

        <h5>•мытьё посуды.</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pekarn-vacancies",
}
</script>

<style scoped lang="sass">
.pekarn-vacancies
  background-color: $darkblue
  top: -100px
  width: 100%
  min-height: 150vh
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  padding: 200px 0 0
  gap: 50px

  .vacancy
    +border-radius(20px)
    color: $ren
    border: 4px solid $ren
    display: flex
    width: 70%
    padding: 10px 0

    @media (min-width: $desktopMin) // Desktop
      gap: 50px
      align-items: center

    @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
      flex-direction: column
      align-items: center

    @media (max-width: $mobileMax) // Mobile
      flex-direction: column
      align-items: center

    .image
      +background-image-settings()

      @media (min-width: $desktopMin) // Desktop
        max-width: 30%
        width: 100%
        padding-top: 30%

      @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
        width: 50%
        padding-top: 50%

      @media (max-width: $mobileMax) // Mobile
        width: 50%
        padding-top: 50%

      &.baker
        background-image: url("/src/assets/images/baker.png")

      &.cashier
        background-image: url("/src/assets/images/cashier.png")

      &.konditer
        background-image: url("/src/assets/images/konditer.png")

      &.cleaner
        background-image: url("/src/assets/images/cleaner.png")

    .text
      flex: 1
      width: 100%

      @media (min-width: $desktopMin) // Desktop
        padding: 32px

      @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
        padding: 24px

      @media (max-width: $mobileMax) // Mobile
        padding: 12px

      .title
        text-align: center
        padding-bottom: 20px
</style>
