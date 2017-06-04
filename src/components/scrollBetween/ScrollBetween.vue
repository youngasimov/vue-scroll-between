<template>
  <transition :name="transition">
    <slot v-if="(min === null || scrollbetween > min) && (max === null || scrollbetween < max)"></slot>
  </transition>
</template>

<script>

  export default {
    name: 'scroll-between',
    props: {
      min: {
        type: Number,
        default: null
      },
      max: {
        type: Number,
        default: null
      },
      transition: {
        type: String,
        default: 'fade-pop'
      }
    },
    data () {
      return {
        scrollbetween: 0
      }
    },
    mounted () {
      this.$scrollBetweenBus.$on('scrollbetween', (event) => {
        this.scrollbetween = event
      })
    }
  }
</script>

<style lang='scss' scoped>


  .fade-pop-enter {
    opacity: 0;
    transform: scale(0);
  }

  .fade-pop-enter-active {
    animation: pop 1500ms ease;
  }

  .fade-pop-enter-to {
    opacity: 1;
    transform: scale(1);
  }

  .fade-pop-leave {
    opacity: 1;
    transform: scale(1);
  }
  .fade-pop-leave-active {
    transition: all 500ms ease;
  }

  .fade-pop-leave-to {
    opacity: 0;
    transform: scale(0.3);
  }

  @keyframes pop {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    70% {
      opacity: 1;
      transform: scale(1.2);
    }
    80% {
      opacity: 1;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

</style>
