import vue from 'vue';
import vuex from 'vuex';

vue.use(vuex)
export default new vuex.Store({
    actions:{
  
        addNewProductAction:(store,item) =>{
            store.commit('addNewProduct',item)
        }
    },
    mutations:{
        addNewProduct:(store,item)=>{
            store.list.push(item)
        }
    },
    state:{
        list:[
            {name:'mobile'},
            {name:'clothes'},
            {name:'shoes'},
    ]
    }
});