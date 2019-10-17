new Vue ({
    el:'#vue',
    data:{
        shoppingcart: 'Shopping',
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
        todo:[
            {name: "Shirts"},
            {name: "Clothes"},
            {name: "Shoes"},
            {name: "Watches"}
        ],
        // name:'rama',
        // website: 'https://www.Google.com'
    },
    // methods: {
    //     gre:function(time){
    //         return 'Good' +' '+ time +' '+ this.name
    //     }
    // }
});