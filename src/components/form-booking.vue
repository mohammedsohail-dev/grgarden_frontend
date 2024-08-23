<template>
    <div class="centered-container-form">
     <div class="content-form">
      <form @submit.prevent="NotifyOwner">
        <div>Name: <input type = "text" v-model="Name" /> </div>
        <div>email: <input type = "email" v-model="email"/></div>
        <div>phone-number: <input type = "text" v-model = "phone_number"></div>
        <div>Date of reservation: <input type = "date" v-model = "ReservedDate"></div>
        <div> Number of days: <input type = "text" v-model = "NumberOfDays"> </div>
        <div><button>Submit </button></div>
      </form>
      </div>
    </div>
  </template>

  <script>

import emailjs from 'emailjs-com';

  export default{
      name:'FormBooking',
      components: {
      },
      data() {
        return {
        Name : "",
        email : "",
        phone_number : "",
        ReservedDate : "",
        NumberOfDays : "",
      }
      },
      methods: {
        NotifyOwner() {

          const all_details = {
            name: this.Name,
            email: this.email,
            phone_number: this.phone_number,
            ReservedDate: this.ReservedDate,
            NumberOfDays: this.NumberOfDays
          }

          emailjs.send('', '', all_details,'').then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  },
);

        }
      }
  }

  </script>

  <style>
  @import url("https://fonts.googleapis.com/css?family=Sofia&effect=neon|outline|emboss|shadow-multiple");

  .centered-container-form {
    padding: 150px;
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

  .content-form {
    padding: 100px;
    text-align: center;
    font-family: 'Sofia', sans-serif; /* Optional font */
    font-size: 20px;
    color: white;
    text-shadow: 5px 5px 5px black;
    background-color: rgba(0, 0, 0, 0.897);
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