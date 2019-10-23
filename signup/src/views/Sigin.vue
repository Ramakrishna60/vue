<template>
    <!-- <img src="../assets/img.jpeg" alt="raja"> -->
   <div>
    <form>
 <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
    </ul>
  </p>
<div class="container">
  
<!-- <div class="row"> -->
  <!-- <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-md-8 col-md-offset-2"> -->
<!-- <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2"> -->
<br>
<center>
  <a href="https://icons8.com/icon/23293/registration"></a>
  <img src="https://img.icons8.com/color/48/000000/edit-user-male--v2.png">
 <h2>Register Form</h2>
</center>
<fieldset>
						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label"></label>
							<div class="cols-lg-12">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
								<b>Your Name:</b><input type="text" class="form-control"   v-model="userData.name" name="name" id="name" placeholder=" your Name" required>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="email" class="cols-sm-2 control-label"></label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
							<b>Your Email:</b>	<input type="text" class="form-control"  v-model="userData.email" name="email" id="email"  placeholder=" your Email"  required/>
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="password" class="cols-sm-2 control-label"></label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
								<b>Password:</b><input type="password" class="form-control"   v-model="userData.password" name="password" id="password"  placeholder=" your Password"  required/>
								</div>
							</div>
						</div>
            <div class="form-group">
							<label for="passwordagain" class="cols-sm-2 control-label"></label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
								<b>Re-Password:</b><input type="password" class="form-control"   v-model="userData.passwordagain" name="passwordagain" id="passwordagain"  placeholder="password again"  required/>
								</div>
							</div>
						</div>

						<div class="form-group ">
							<input type="submit" class="btn btn-success btn-lg btn-block login-button" @click="persist"/>
            Already have a account?<router-link to="/Login" input type="login" class="btn btn-info btn-lg btn-block login-button">Login</router-link>
						</div>
 </fieldset>
   </div>
   
   </form>
    
   </div>
  </template>


<script>
export default {
  data(){
      return{
        test:'null',
        x:0,
    errors: [],
    userData:{
    name: '',
    email: '',
    password:'',
    passwordagain:'',
  },
  valid:{
        name: /^[A-Za-z.0-9]{3,30}$/,
        email: /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/,
      }
      }
  },
    
    
  
methods: {
    persist() {
      
      var i = 1;
      var errors=JSON.parse(localStorage.getItem('errors'))||[];
      if (this.valid.name.test(this.userData.name)) {
        console.log("correct name");
        i = 1;
        if (this.valid.email.test(this.userData.email)) {
          console.log("correct email");
          i = 1;
          // if (this.check.number.test(this.localUsers.number)) {
          //   console.log("correct number");
          //   i = 1;
      // var datastore =this.userData;
      errors.forEach(x => {
        // console.log(item.name);
        if(x.name == this.userData.name && x.email == this.userData.email){
          alert("alredy exist");
          // this.$router.push({ name:'Dashboard'});
          i=0;

        }else{

        }
      });
      if(this.userData.password !==  this.userData.passwordagain){
        alert(" password dont match ");
        i=0;
      }else{
        if(i==1){
      errors.push(this.userData); 
      localStorage.setItem('errors',JSON.stringify(errors));
      this.$router.push({ name:'Login' });
      }
      }
      }
      else {
          alert("incorrect email");
        }
      } else {
        alert("incorrect name");
      }
      },
      

      
      // this.errors = [];

    //   if (!this.name) {
    //   this.errors.push("Name required.");
    //   }
    //   if (!this.email) {
    //    this.errors.push('Email required.');
    //   } else if (!this.validEmail(this.email)) {
    //    this.errors.push('Valid email required.');
    //   }

    //   if (!this.errors.length) {
    //     return true;
    //   }

    //   e.preventDefault();

    // validEmail: (email){
    //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return re.test(email);
    
    // }

//  var errors =JSON.parse(localStorage.getItem('errors')) || [];
// var dataStore =this.userData;
// //  {name:this.userData.name,
// // email:this.userData.email,
// // password:this.userData.password}
// // ;
// errors.push(dataStore);
// localStorage.setItem('errors', JSON.stringify(errors)); 
// },
    

    // checkForm: function (e) {
    //   // this.errors = [];

    //   if (!this.name) {
    //   this.errors.push("Name required.");
    //   }
    //   if (!this.email) {
    //    this.errors.push('Email required.');
    //   } else if (!this.validEmail(this.email)) {
    //    this.errors.push('Valid email required.');
    //   }

    //   if (!this.errors.length) {
    //     return true;
    //   }

    //   e.preventDefault();
    // },
    // validEmail: function (email) {
    //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return re.test(email);
    // }
  }
}
</script>
<style scoped>
template, html {
  height: 10%;
  
}
/* form{

} */

/* * {
  /* box-sizing: border-box; */
 
#form-control {
	border-radius: 0;
  width:"50px";
	border: 1px solid #fff;
}
fieldset{
  padding: 0 40px 40px 40px;
}
form {
  /* The image used */
  background:#1c1e21 url(https://static.pexels.com/photos/8819/warsaw.jpg);

  min-height: 835px;


  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  
}
br{
 background-color: lavender; 
}
.row{
  background-color: lavender;
  border-radius: 18px;
      margin-left: 50px;
  
}

/* Add styles to the form container */
.container {
  background-color: lavender;
  position: absolute;
  right: 210px;
  margin: 140px;
  max-width: 500px;
  border-radius: 10px;
  padding: 0;
}
  /* background-color:teal;

/* form{background-image: url('../assets/img.jpeg'); */
/* } */
h2{
  color:rgb(50, 47, 255);
  
}
</style>