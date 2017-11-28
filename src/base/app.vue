<template lang='pug' src='./app.pug'></template>

<script>
// components
import NavDesktop from 'components/Nav/Nav'
import NavMobile from 'components/Nav/Nav-Mobile/Nav-Mobile'
import NavTrigger from 'components/nav/custom-nav-trigger/custom-nav-trigger'
import FooterDesktop from 'components/Footer/Footer'
import Modal from 'components/custom/custom-modal-multitool/custom-modal-multitool'

export default {
  created () {
    this.$store.dispatch('GET_PAGES')
    this.$store.dispatch('VIEW_NAV', false)
    this.$store.dispatch('VIEW_BODY', false)
    this.$store.dispatch('VIEW_TYPES', 0)
    this.$store.dispatch('VIEW_SHOWMODAL', false)
    this.$store.dispatch('VIEW_MODALCONTENT', false)
  },
  computed: {
    props () {
      return this.$store.state
    }
  },
  components: {
    NavDesktop,
    NavMobile,
    NavTrigger,
    FooterDesktop,
    Modal
  },
  name: 'app'
}
</script>

<-- styles have been moved to main.sass file -->
<style src='../main.sass' lang='sass'></style>
