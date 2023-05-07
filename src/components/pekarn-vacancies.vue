<template>
  <div class="pekarn-vacancies">

   <div class="vacancy">
     <div class="vacancy-logo-baker">
     </div>
     <div class="vacancy-text">
    <h2>Пекарь</h2>
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
      <div class="vacancy-logo-konditer">
      </div>
      <div class="vacancy-text">
      <h2>Кондитер</h2>
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
      <div class="vacancy-logo-cashier">
      </div>
      <div class="vacancy-text">
        <h2>Продавец-кассир</h2>
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
      <div class="vacancy-logo-cleaner">

      </div>
      <div class="vacancy-text">
      <h2>Кухонный работник</h2>
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
  padding: 200px 50px 0
  gap: 50px
.vacancy
  +border-radius(20px)
  color: $ren
  border: 4px solid $ren
  display: flex
  width: 70%
  padding-bottom: 10px
  padding-top: 10px
  padding-left: 10px
  @media (min-width: $desktopMin) // Desktop

  @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
    flex-direction: column
  @media (max-width: $mobileMax) // Mobile
.vacancy-logo-baker
  background-image: url("/src/assets/images/baker.png")
  +background-image-settings()
  min-width: 30%
  display: flex
.vacancy-logo-cashier
  background-image: url("/src/assets/images/cashier.png")
  +background-image-settings()
  min-width: 30%
  display: flex
.vacancy-logo-konditer
  background-image: url("/src/assets/images/konditer.png")
  +background-image-settings()
  min-width: 30%
  display: flex
.vacancy-logo-cleaner
  background-image: url("/src/assets/images/cleaner.png")
  +background-image-settings()
  min-width: 30%
  min-height: 20%
  display: flex
.vacancy-text
  flex: 1
  padding-left: 20px
</style>
