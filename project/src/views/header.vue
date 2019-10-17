<template>
<header>
  <h1>
{{title}}
  </h1>
</header>
</template>
<script>
export default {
  data(){
    return{
        title:'vue'
    }
  }
}
</script>
<style scoped>
header {
background-color: lightgreen;
}
h1{
    text-align: center;
    padding :10px;
}
</style>

