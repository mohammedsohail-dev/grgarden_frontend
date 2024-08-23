<template>
    <button @click="prevImage" class = "right-button" ><font-awesome-icon class = "right-arrow" :icon="faArrowRight" /></button>
    <div class = "center-image"><img :src= "currentImage" /> </div>
    <button @click="nextImage" class = "left-button" ><font-awesome-icon class = "left-arrow" :icon="faArrowLeft" /></button>
</template>

  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
  import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
  import image1 from '../assets/1.png';
  import image2 from '../assets/2.png';
  import image3 from '../assets/3.png';

  export default {
    name: "PhotosComponent",
    components: {
      FontAwesomeIcon
    },
    data() {
      return {
        faArrowRight,faArrowLeft,images: [image1, image2, image3],
        currentIndex: 0
      };
    },
    computed: {
       currentImage() {
        return this.images[this.currentIndex];
       }
    },
    methods: {
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevImage(){
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        }
    }
  };
  </script>

  <style>

  .right-button {
    top: 250px;
    right: 70px;
    position: fixed;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 4px 2px;
    background-color: black;
    z-index: 3;
    box-shadow: 0px 5px rgba(255, 255, 255, 0.2);
  }

  .right-arrow {
    width: 30px;
    height: 30px;
    color:white;
  }

  .left-button {
    top: 250px;
    left: 70px;
    position: fixed;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 4px 2px;
    background-color: black;
    z-index: 3;
    box-shadow: 0px 5px  rgba(255, 255, 255, 0.2);
  }

  .left-arrow {
    width: 30px;
    height: 30px;
    color:white;
  }

  .center-image {
  position: fixed;
  top: 400px;                  /* Vertical position from the top of the viewport */
  left: 50%;                   /* Center horizontally */
  transform: translateX(-50%) translateY(-50%); /* Adjust both horizontal and vertical centering */
  width: 1152px;
  height: 648px;
  background-color: red;
  box-shadow: 0px 60px 60px rgba(255, 255, 255, 0.2); /* Blurry shadow effect */
}

  </style>
