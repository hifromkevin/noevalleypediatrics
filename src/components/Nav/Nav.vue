<template lang='pug' src='./Nav.pug'></template>

<script>
import Icon from 'components/icon/icon'
import NavTop from 'components/Nav/NavTop/NavTop'

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
  created () {
    console.log(this)
  },
  methods: {
    openModal () {
      this.isOpen = true
    }
  },
  components: {
    Icon,
    NavTop
  }
}
</script>
