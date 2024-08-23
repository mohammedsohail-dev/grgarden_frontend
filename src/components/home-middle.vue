<template>
  <div class="centered-container">
   <div class="content">
    <div class = "centered-text">
      GR గార్డెన్
    </div>

    </div>
    <RightSideBar />
  </div>
</template>

<script>

import RightSideBar from './rightside-bar.vue';
export default{
    name:'home-middle',
    components: {
      RightSideBar
    }
}

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Sofia&effect=neon|outline|emboss|shadow-multiple");

.centered-container {
  top:50px;
  height: 1080px;
  width: 1920px;
  background-image: url('../assets/1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position:absolute;
  user-select: none;
}

.content {
  text-align: center;
  font-family: 'Sofia', sans-serif; /* Optional font */
  font-size: 150px;
  color: white;
  text-shadow: 5px 5px 5px black;
}

.centered-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}

.img {
  width: 1920px;
  height: 1080px;
  object-fit: contain;
}

</style>