<template>
  <div>
    <app-header></app-header>
    <app-Home></app-Home>
    <app-About></app-About>
    
  </div>
</template>
<script>
import header from "./views/header.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

export default {
  data() {
    return {};
  },
  components: {
    "app-header": header,
    "app-About": About,
    "app-Home": Home
  }
};
</script>