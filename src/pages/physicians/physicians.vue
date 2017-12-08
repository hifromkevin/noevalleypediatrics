<template lang='pug' src='./physicians.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'physicians',
  computed: {
    props () {
      return this.$store.state.pages['physicians']
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
