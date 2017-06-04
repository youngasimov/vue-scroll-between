<template>


  <div class="example">
    <scroll-between :max="400">
      <img src="http://cdn1-www.cattime.com/assets/uploads/gallery/persian-cats-and-kittens/persian-cats-and-kittens-1.jpg" class="layer img pos1">
    </scroll-between>
    <scroll-between :min="300" :max="900">
      <img src="http://cdn1-www.cattime.com/assets/uploads/gallery/persian-cats-and-kittens/persian-cats-and-kittens-1.jpg" class="layer img pos2">
    </scroll-between>
    <scroll-between :min="800" :max="2000">
      <img src="http://cdn1-www.cattime.com/assets/uploads/gallery/persian-cats-and-kittens/persian-cats-and-kittens-1.jpg" class="layer img pos3">
    </scroll-between>
    <scroll-between :min="1500">
      <img src="http://cdn1-www.cattime.com/assets/uploads/gallery/persian-cats-and-kittens/persian-cats-and-kittens-1.jpg" class="layer img pos4">
    </scroll-between>
    <scroll-between :min="2000">
      <img src="http://cdn1-www.cattime.com/assets/uploads/gallery/persian-cats-and-kittens/persian-cats-and-kittens-1.jpg" class="layer img pos5">
    </scroll-between>

  </div>


</template>

<script>
  import ScrollBetween from './scrollBetween/ScrollBetween'

  export default {
    components: { ScrollBetween },
    name: 'vue-scroll-example'
  }
</script>

<style lang='scss'>

  .example{
    width: 100%;
    height: 4000px;
    position: relative;
  }

  .layer{
    position: absolute;
  }

  .img{
    width: 300px;
    height: auto;
  }

  .pos1{
    top: 100px;
    left: 60%;
  }
  .pos2{
    top: 600px;
    left: 10%;
  }
  .pos3{
    top:1300px;
    left: 30%;
  }

  .pos4{
    top:2000px;
    left: 70%;
  }

  .pos5{
    top:2800px;
    left: 50%;
  }

</style>
