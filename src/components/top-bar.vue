<template>
<div class = "top">
    <div v-for="option in options" :key="option">
        <button class ='btn' @click = "redirect(option)"> {{option}} </button>
    </div>
    <div class = 'top-right'>
          GR GARDEN
    </div>
</div>
</template>

<script>

export default {
    name: 'top-bar',
      data() {
    return {
    options : [
      'Home',
      'Booking',
      'Photos'
    ],
    franchises : [
      'APOLLO TEXTILES',
      'GR GARDEN'
    ]
  }
  },
  methods: {
    redirect(option) {
      switch (option) {
        case 'Home':
          this.$router.push({ name: 'Home' });
          break;
        case 'Booking':
          this.$router.push({ name: 'Booking' });
          break;
        case 'Photos':
          this.$router.push({ name: 'Photos' });
          break;
        default:
          break;
      }
    }
  }
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.top {
  position: fixed;
  height: 50px;
  width: 100%;
  display: flex;
  background-color: black;
  color: white;
  text-align: center;
  text-align-last: left;
  z-index: 3;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.top-right {
    height: 50px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: black; /* White background with transparency */
    z-index: 2; /* Ensure sidebar is on top */
    padding-top: 5px;
    padding-right: 30px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    align-content: right;
    font-size: 30px;
    text-align: left;
    font-family: 'Bebas Neue', sans-serif;

}

</style>
