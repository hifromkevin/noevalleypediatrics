<template lang='pug' src='./Footer.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  props: ['props'],
  computed: {
    classObject () {
      return {
        home: this.$route.name === 'home',
        aboutus: this.$route.name === 'about us'
      }
    }
  },
  components: {
    Icon
  }
}
</script>
