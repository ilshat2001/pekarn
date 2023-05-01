<template>
  <div class="pekarn-products-filter">
    <ul>
      <li
          v-for="filter in filters"
          :key="filter.id"
          @click="() => this.$emit('changeType', filter.id)"
          :class="filter.id === this.filter ? 'active' : ''"
      >
        <h3>{{ filter.name }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "pekarn-products-filter",
  data() {
    return {
      filters: [
        {
          "name": "Хлеба",
          "id": "Bread",
        },

        {
          "name": "Выпечка",
          "id": "Vipechka",
        },

        {
          "name": "Кондитерские изделия",
          "id": "Konditer",
        },

        {
          "name": "Пироги",
          "id": "Pirogi",
        }
      ]
    }
  },

  props: {
    filter : {
      type: String,
      default: null,
    }
  }
}
</script>

<style scoped lang="sass">
.pekarn-products-filter
  width: 100%

  ul
    display: flex
    color: $ren

    @media (min-width: $desktopMin)
      gap: 50px
      justify-content: center

    @media (max-width: $tabletMax) and (min-width: $tabletMin)
      gap: 30px
      flex-wrap: wrap

    @media (max-width: $mobileMax)
      gap: 16px
      flex-direction: column
      align-items: flex-start

    li
      display: flex
      white-space: nowrap
      padding: 10px 20px
      +border-radius(10px)
      cursor: pointer
      +user-select(none)

      @media (min-width: $desktopMin) // Desktop
        border: 4px solid $ren

      @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
        border: 2px solid $ren

      @media (max-width: $mobileMax) // Mobile
        border: 1px solid $ren

      &:hover
        background-color: rgba(254, 194, 98, 0.1)

      &.active
        background-color: rgba(254, 194, 98, 0.5)

      > *
        @media (min-width: $desktopMin) // Desktop
          font-size: 32px

        @media (max-width: $tabletMax) and (min-width: $tabletMin)  // Table
          font-size: 24px

        @media (max-width: $mobileMax) // Mobile
          font-size: 18px
</style>
