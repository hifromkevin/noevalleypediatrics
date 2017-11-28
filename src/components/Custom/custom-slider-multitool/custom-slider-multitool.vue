<template lang="pug" src="./custom-slider-multitool.pug"></template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
  props: ['props'],
  components: {
    Slider,
    SliderItem
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.list = this.props
  }
}
</script>
