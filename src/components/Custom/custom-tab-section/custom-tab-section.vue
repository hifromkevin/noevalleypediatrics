<template lang='pug' src='./custom-tag-section.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  props: ['props'],
  data () {
    return {
      isTab: 0
    }
  },
  methods: {
    showTab (i) {
      this.isTab = i
    }
  },
  components: {
    Icon
  }
}
</script>
