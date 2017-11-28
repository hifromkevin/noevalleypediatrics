<template lang='pug' src='./Nav.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
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
  created () {
    console.log(this)
  },
  methods: {
    openModal () {
      this.isOpen = true
    }
  },
  components: {
    Icon
  }
}
</script>
