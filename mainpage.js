



new Vue ({
    el:'#vue',
    data:{
       cart: [],
        shoes:[
            {
              name:'Adidas',
              image :"shoe.jpg",
              price:1850
            },
            {
             name:"Sports",
             image :"shoe1.jpg",
             price:2200
             },
             {
               name:"Nike",
               image :"shoe2.jpg",
               price:2000
               },
               {
                 name:"Puma",
                 image :"shoe3.jpg",
                 price:2500
                 }
          ],
       
    },
    methods:{
        passdata(shoe) {
          this.cart.push(shoe);
          }
          
    }
    
});