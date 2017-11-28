<template lang="pug" src="./custom-nav-trigger.pug"></template>

<script>
export default {
  props: ['props'],
  methods: {
    isScrolled () {
      this.$store.dispatch('VIEW_NAV', true)
    },
    isNotScrolled () {
      this.$store.dispatch('VIEW_NAV', false)
    }
  }
}
</script>
