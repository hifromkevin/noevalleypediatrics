<template lang='pug' src='./patient-information.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'patient-information',
  computed: {
    props () {
      return this.$store.state.pages['patient-information']
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
