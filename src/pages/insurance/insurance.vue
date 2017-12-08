<template lang='pug' src='./insurance.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/Hero/Hero'

export default {
  name: 'insurance',
  computed: {
    props () {
      return this.$store.state.pages['insurance']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Hero
  }
}
</script>
