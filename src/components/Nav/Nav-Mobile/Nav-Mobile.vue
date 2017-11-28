<template lang='pug' src='./Nav-Mobile.pug'></template>

<script>
export default {
  props: ['props'],
  data () {
    return {
      isClicked: false
    }
  },
  computed: {
    links () {
      return this.$router.options.routes
    }
  },
  methods: {
    toggle () {
      this.links = !this.links
      this.isClicked = !this.isClicked
    }
  }
}
</script>
