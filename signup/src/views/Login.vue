  <template>
   <div class="bg-img">
   <form>
 <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="(erro,index) in errors" :key="index">{{ erro }}</li>
    </ul>
  </p>
<div class="container">
<br>
<fieldset>
               
						<div class="form-group">
              <center>
                <a href="https://icons8.com/icon/12324/lock"></a>
                <img src="https://img.icons8.com/color/48/000000/lock.png">
                <h2> Login</h2>
             </center>
							<label for="name" class="cols-sm-2 control-label"></label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
							<b>Your Name:</b><input type="text" class="form-control"   v-model="userData.name" name="name" id="name"  placeholder=" your Name" required/>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label for="password" class="cols-sm-2 control-label"></label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
								<b>Password:</b>	<input type="password" class="form-control"   v-model="userData.password" name="password" id="password"  placeholder=" your Password" required/>
								</div>
							</div>
						</div>
						<div class="form-group ">
             <input type="submit" class="btn btn-success btn-lg btn-block login-button" @click="persist"/>
             <div><b> create an account?</b> <router-link to="/" input type="sigin" class="btn btn-info btn-lg btn-block login-button" @click.prevent="sig()">Sign up here</router-link></div>
	
						</div>
 </fieldset>
   </div>
   </form>
   </div>
  </template>


<script>
import { log } from 'util';
export default {
  data(){
      return{
        x:0,
    errors: [],
    userData:{ 
    name: '',
    password: '',
  
   
   },
   
  }
  },
  methods:{
    sig(){
           this.$router.push({ name:'Sigin'});
    },
    checkForm: function (e) {
      if (this.name && this.age) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.password) {
        this.errors.push('password required.');
      }

      e.preventDefault();
    },
 
  persist(){
    
  var i=0;
  var error =  JSON.parse(localStorage.getItem('errors'))||[];
error.forEach(x => {
           
                if(x.name == this.userData.name && x.password == this.userData.password){
                  alert("already login");
                  this.$router.push({ name:'Dashboard'});
                   
                    i=1;
                }
          })

          if(i == 0){
            alert("plese first signup")
            this.$router.push({ name:'Sigin'});
          }
            // if(i==1){
            //     alert("login");
            //     this.$router.push({ name:'Dashboard'});
            // }
              
        }
},

}

</script>
<style scoped>
template, html {
  height: 100%;
  
}
fieldset{
  padding: 0 40px 40px 40px;
}
 /* form{  */
     /* background: url("../assets/form.jpg"); */

 /* }    */

/* * {
  /* box-sizing: border-box; */
 
 br{
 background-color: lavender; 
}
.row{
  background-color: lavender;
  border-radius: 18px;
   margin-left: 50px;
  
}
.bg-img {
 background: url("../assets/login.jpg");
  min-height: 820px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  
}

/* Add styles to the form container */
.container {
  background: url("../assets/form.jpg");
  position: absolute;
  right: 210px;
  margin: 210px;
  max-width: 500px;
  padding: 0px;
  border-radius: 10px;
  background-color: white;
   background-color: lavender;
}
h2{
  color: blue;
}
b{
  color:rgb(0, 128, 117);
}
i{
  color: #00ff9d;
}
/* form{background-image: url('../assets/img.jpeg'); */
/* } */
/* form{background-image: url('../assets/img.jpeg');} */
</style>