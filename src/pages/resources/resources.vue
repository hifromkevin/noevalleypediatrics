<template lang='pug' src='./resources.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'resources',
  computed: {
    props () {
      return this.$store.state.pages['resources']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader
  }
}
</script>
