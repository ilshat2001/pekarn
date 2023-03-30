<template>
    <header>
      <baker-header-nav/>
    </header>
</template>

<script>
import bakerHeaderNav from "@/components/header/baker-header-nav";

export default {
  name: "baker-header",
  components: {
    bakerHeaderNav
  }
}
</script>

<style lang="sass" scoped>
  header
    width: 100%
    height: 100vh
    display: flex
    flex-direction: column
    align-items: center
</style>
