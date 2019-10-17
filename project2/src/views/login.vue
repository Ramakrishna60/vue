<template>
  <div class="login">
      <form>
  Name:
  <input type="text" v-model="userName" >
  <br>
  Password:
  <input type="password" v-model="password" >
  <br><br>
  <button @click="Navigation">submit</button>
  </form> 
  </div>
  
</template>

<script>
export default {
  name: 'login',
  // data: function() {
  //   return{
  //         userName:'',
  //         password:''
  //   }
  // },
 methods:{

   Navigation : function(){
     if (this.userName==="rama" && this.password==="krishna")
     {
       
     this.$router.push('/Registration');   
     }
    
   }
 }
  }

</script>

