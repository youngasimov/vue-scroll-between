<template>
  <span>
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'scroll-between-container',
    mounted () {
      window.addEventListener('scroll', this.onScroll.bind(this))
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll () {
        this.$scrollBetweenBus.$emit('scrollbetween', document.body.scrollTop)
      }
    }
  }
</script>
