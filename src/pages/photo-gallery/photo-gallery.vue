<template lang='pug' src='./photo-gallery.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'photo-gallery',
  computed: {
    props () {
      return this.$store.state.pages['photo-gallery']
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
