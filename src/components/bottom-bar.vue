<template>
<div class = "bottom">
    <div v-for="franchise in franchises" :key="franchise">
      <button class ='btn-big' @click = "redirect(franchise)"> {{franchise}} </button>
    </div>
    <div class = "bottom-right">
          <li>Contact:  </li>
          <li>Phone number: </li>
          BOOK NOW!!!
        </div>
    </div>

</template>

<script>


export default {
    name: 'bottom-bar',
    data() {
    return {
    options : [
      'వివాహాలు',
      'బుకింగ్',
      'క్యాటరింగ్',
      'స్థానం'
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
        case 'APOLLO TEXTILES':
        window.location.href = 'https://www.google.com/search?client=firefox-b-d&q=apollo+textiles+adoni';
          break;
        case 'GR GARDEN':
          this.$router.push({ name: 'Home' });
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style>

.bottom {
  position: fixed;
  height: 150px;
  width: 100%;
  display: flex;
  background-color: black;
  color: white;
  top: 770px;
  left:0;
  padding: 0px;
  text-align: center;
  text-align-last: left;
  font-family: "Bebas Neue", sans-serif;
  font-size: 100px;
  z-index: 3;

}

.bottom-right {
    position: fixed;
    height: 150px;
    right:0;
    background-color: black;
    font-family: "Bebas Neue", sans-serif;
    font-size: 30px;
    padding: 15px;
    list-style-type: none;

}

.btn-big {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 50px;
  font-family: inherit;
}

.btn-big:focus {
  outline: none;
}

.btn-big:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

</style>
