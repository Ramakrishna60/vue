<template>
  <div class="login">
      <form>
  First name:
  <input type="text" name="firstname" value="">
  <br>
  Last name:
  <input type="text" name="lastname" value="">
  <br><br>
  <button @click="navigation">submit</button>
  </form> 
  </div>
  
</template>
<script>
export default {
  name: 'Registration',
}