<template>
    <div>
    <router-view />
  </div>
</template>

<script>
import Sigin from './views/Sigin.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Weather from './views/Weather.vue'
import day from './views/day.vue'
import hours from './views/hours.vue'
export default {
  name: "app",
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
