<template>
  <scroll-between-container id="app">
    <div class="box">
      <section class="section">
        <div class="container">
          <div class="heading">
            <h1 class="title">Vue Scroll Between</h1>
            <h2 class="subtitle">
              Vue library for add or remove DOM component base on scroll position
            </h2>
          </div>
        </div>
      </section>
    </div>
    <vue-scroll-example></vue-scroll-example>
  </scroll-between-container>
</template>

<script>
  import VueScrollExample from './components/VueScrollExample'

  export default {
    name: 'app',
    components: {
      VueScrollExample
    }
  }
</script>

<style>
</style>
