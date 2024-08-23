<template>
  <div class = "container">
    <TopBar />
    <Photos />
    <BottomBar />
  </div>
  </template>


  <script>

  import TopBar from '../components/top-bar.vue';
  import BottomBar from '../components/bottom-bar.vue';
  import Photos from '../components/photos-component.vue';



  export default {
    name: 'App',
    components: {
      TopBar,
      BottomBar,
      Photos
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
  flex-direction: column;
  min-height: 100vh; /* Ensures container covers the full viewport height */
  background-color: #0e0505; /* Greyish background color for the container */
  overflow-x: auto;
}

  </style>