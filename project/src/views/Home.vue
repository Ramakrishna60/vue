<template>
  <!-- <h1> {{ shoe.name}}</h1> -->
    <ul>
      <li v-for="shoe in shoes" :key="shoe.id" >
        <h2>{{shoe.name}}</h2>
      </li>
    </ul>
  
</template>
<script>
export default {
  data() {
    return {
      // shoe:{
      //   name:'siva',
      //   name:'rama',
      //   name:'siva',
      //   name:'siva',
      //   name:'siva',
      // },
      shoes: [
        {
          name: "Adidas",

          price: 1850
        },
        {
          name: "Sports",

          price: 2200
        },
        {
          name: "Nike",

          price: 2000
        },
        {
          name: "Puma",

          price: 2500
        }
      ]
    }
  }
};
</script>

