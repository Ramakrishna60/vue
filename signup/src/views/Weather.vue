<template>
  <div id="day">
  
    <center>
    <!-- <b>City:</b> -->
    <!-- <input type="text" v-model="city" /> -->
    <a href="https://icons8.com/icon/49461/partly-cloudy-day"></a>
    <img src="https://img.icons8.com/nolan/96/000000/partly-cloudy-day.png">
    <router-link to="/Weather/day" button class="btn btn-success" @click="temp">Temp</router-link>
    <!-- <p>temp={{show}}</p> -->
    <div class="row">
      
    </div>
    <!-- <router-link to="/Weather/day">Day</router-link> -->
    <!-- <router-link to="/Weather/day" button class="btn btn-success">Day</router-link> -->
    <!-- <router-link to="/Weather/day" button class="btn btn-success">Hour</router-link> -->
    <router-view />

    <div></div>
   
    </center>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import router from "./day.vue";

// import router from "./hours.vue";
// import day from "./day";
// import hours from "./hours";
export default {
  data() {
    return {
      info: null,
      city: null,

      show: null
    };
  },
  methods: {
    hours() {
      // this.$router.push({name:'hours'})
    },
    day() {
      // this.$router.push({name:'day'})
    },
    temp() {
      axios
        .get(
          "http://api.openweathermap.org/data/2.5/weather?q=" +
            this.city +
            "&APPID=7fecff555d03787322e5aa20232870c7&units=metric"
        )
        .then(response => {
          this.show = response.data.main.temp;
        });
    }
  },

  mounted() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=7fecff555d03787322e5aa20232870c7"
      )
      .then(response => {
        this.hours = response.data;
      });
  }
};
</script>
<style scoped>
p {
  margin-left: 10px;
}

#day{ 
  background-color: aquamarine;
background-image: url("../assets/weather.jpeg");
/* background-image:url(""); */
}

</style>