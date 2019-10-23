import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
    actions:{
  
        addNewProductAction:(store,item) =>{
            store.commit('addNewProduct',item)
        }
    },
    mutations:{
        addNewProduct:(store,item)=>{
            store.question=item;
            // this.data.push(item);
        }
    },
    state:{
        question:[]
    },
    getters:{
      question:state => state.question,
    }
});