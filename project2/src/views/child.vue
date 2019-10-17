<template>
  <div class="hello">
  
  <input type="text" v-model="item"/>
  <button v-on:click="addItem(item)">add</button>
   <div v-for="(i, index) of list" :key="index">
     {{ i.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'child',

  data() {
    return {
      item : null
    }
  },
  computed : {
    list() {
      return this.$store.state.list;
    }
  },
  methods : {
    // addItem(item) {
    //   this.$store.commit("addNewProduct",{ name : item });
    // }
    addItem(item) {
      this.$store.dispatch("addNewProductAction",{ name : item });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
