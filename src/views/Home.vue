<template>
    <div class = "container">
    <TopBar />
    <HomeMiddle />
    <BottomBar />
  </div>
  </template>


  <script>

  import TopBar from '../components/top-bar.vue';
  import BottomBar from '../components/bottom-bar.vue';
  import HomeMiddle from '../components/home-middle.vue';


  export default {
    name: 'App',
    components: {
      TopBar,
      BottomBar,
      HomeMiddle
    },

  }
  </script>

  <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  .container {
      display: flex;
      overflow-x: auto;
  }

  </style>
