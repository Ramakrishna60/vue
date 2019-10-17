<template>
<footer>
  <h1>
{{title}}
  </h1>
</footer>
</template>
<script>
export default {
  data(){
    return{
        title:'Footer'
    }
  }
}
</script>
<style scoped>
footer{
  background-color: black;
}
h1{
  text-align: center;
  padding:6px;
  color:yellow;
}
</style>

