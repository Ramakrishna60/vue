<template>
  <div id="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <child></child>
    
  </div>
</template>

<script>
// @ is an alias to /src
import child from "./child";

export default {
  name: "home",
  components: {
    child
  }
};
</script>
