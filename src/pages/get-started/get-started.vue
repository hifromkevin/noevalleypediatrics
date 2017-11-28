<template lang='pug' src='./get-started.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/Hero/Hero'
import HeadBar from 'components/block/block-text-header/block-text-header'
import TextBox from 'components/block/block-text-box/block-text-box'
import Icon from 'components/icon/icon'

export default {
  name: 'get-started',
  computed: {
    props () {
      return this.$store.state.pages.getstarted
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Hero,
    HeadBar,
    TextBox,
    Icon
  }
}
</script>
