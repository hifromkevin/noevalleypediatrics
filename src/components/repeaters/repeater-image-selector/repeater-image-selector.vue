<template lang='pug' src='./repeater-image-selector.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  props: ['props'],
  data () {
    return {
      types: 0
    }
  },
  components: {
    Icon
  },
  methods: {
    switchHighlight (i) {
      this.$store.dispatch('VIEW_TYPES', i)
      this.types = i
    }
  }
}
</script>
