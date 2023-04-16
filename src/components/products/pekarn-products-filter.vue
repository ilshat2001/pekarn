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
  ul
    display: flex
    gap: 50px

    li
      display: flex
      white-space: nowrap
      border: 4px solid $ren
      padding: 10px 20px
      +border-radius(10px)
      cursor: pointer
      +user-select(none)

      &:hover
        background-color: rgba(254, 194, 98, 0.1)

      &.active
        background-color: rgba(254, 194, 98, 0.5)
</style>
