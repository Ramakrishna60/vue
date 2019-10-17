<template>
 <form  v-cloak>

    <div class="bar">
      <a class="list-icon" v-bind:class="{ 'active': layout == 'list'}" v-on:click="layout = 'list'"></a>
      <a class="grid-icon" v-bind:class="{ 'active': layout == 'grid'}" v-on:click="layout = 'grid'"></a>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Add </button>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <label><b>Category </b></label>
            <input type="text" required v-model="ques.category"> <br>

            <label><b>correct_answer </b></label>
            <input type="text" required v-model="ques.correct_answer"><br>

            <label><b>Type</b></label>
            <input type="text" required v-model="ques.type"> <br>
            <label><b>Difficulty</b></label>
            <input type="text" required v-model="ques.difficulty"> <br>
          </div>
          <div class="modal-footer">
            <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="remove">Remove</button> -->
            <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="add(ques)">Add</button>
            <!-- <button type="button" class="btn btn-primary" v-on:click="edit(question)" >Edit</button> -->
          </div>
        </div>
      </div>
    </div>




    <div class="container" v-if="layout == 'grid'">
      <div class="row">

        <div class="col-md-4 col-xl-4" v-for="(item,index) in question" :key="index">
          <div class="card">

            <div class="card-body">
              <p class="card-text">
                <b>Category:</b>{{item.category}}
              </p>
              <p class="card-text">
                <b>Correct_answer:</b>{{item.correct_answer}}
              </p>
              <p class="card-text">
                <b> Type:</b>{{item.type}}                                                                                                                                                                              
              </p>
              <p class="card-text">
                <b>Difficulty:</b>{{item.difficulty}}
              </p>
              <button type="button" class="btn btn-secondary" v-on:click="remove(index)">Remove</button>
              <!-- <button type="button" class="btn btn-primary" v-on:click="update(item)" >Update</button> -->
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2"
              data-dismiss="modal"  v-on:click="edit(item)">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- model2 -->
    <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Update</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <label><b>Category </b></label>
            <input type="text" required v-model="ques.category"> <br>

            <label><b>correct_answer </b></label>
            <input type="text" required v-model="ques.correct_answer"><br>

            <label><b>Type</b></label>
            <input type="text" required v-model="ques.type"> <br>
            <label><b>Difficulty</b></label>
            <input type="text" required v-model="ques.difficulty"> <br>
          </div>
          <div class="modal-footer">
            <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="remove">Remove</button> -->
            <!-- <button type="button" class="btn btn-primary" v-on:click="add()">Add</button> -->
            <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="update(question)" >Update</button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <table class="table" v-if="layout == 'list'">
        <tr>
          <th>Category</th>
          <th>Correct_answer</th>
          <th>Type</th>
          <th>Difficulty</th>
        </tr>
        <tr v-for="(item,index) in question" :key="index">
          <td>{{item.category}}</td>
          <td>{{item.correct_answer}}</td>
          <td>{{item.type}}</td>
          <td>{{item.difficulty}}</td>
        </tr>
      </table>

    </div>
  </form>
</template>

<script>
import store from '../store'
import { log } from 'util';
export default {
  data(){
    return{
    layout: 'grid',
    ques:{info: null,
			category: null,
			correct_answer:null,
		type:null,
      difficulty:null,
      }
		// question: [],
		// question:{
		// 	info: null,
		// 	category: null,
		// 	correct_answer:null,
		// 	type:null,
		// 	difficulty:null,
		// 	i:null,
		// }
    }
  },
   computed : {
    question() {
      return this.$store.getters.question;
    }
  },
methods: {
	     add(quest) {
        //  this.store.dispatch("addNewProductAction",{ category : item });
        //  console.log(this.$store);
			 this.question.push(quest);
       console.log(this.question);
       this.ques={info: null,
			category: null,
			correct_answer:null,
		type:null,
      difficulty:null,}
       
		
		},
		remove(index){
			this.question.splice(index,1);
		},
		edit(item){
			console.log(item);
			this.ques=item;
			console.log(this.ques.category);

		},
		update(question){
			console.log(this.question[0].category);
			
		}
		

	},

	mounted() {
		// axios
		fetch('https://opentdb.com/api.php?amount=5')
			.then(response => { return response.json() }).then(data => {
        console.log(data);
        store.dispatch("addNewProductAction", data.results );
        
        // this.question = data.results;
        // console.log(question);
        


			})
	}

}
</script>

<style>

[v-cloak] {
  display: none;
}

*{
    margin:0;
    padding:0;
}

 body{
    font:15px/1.3 'Open Sans', sans-serif;
    color: #5e5b64;
    text-align:center;
}

a, a:visited {
    outline:none;
    color:#389dc1;
}

a:hover{
    text-decoration:none;
}

section, footer, header, aside, nav{
    display: block;
}



.bar{
    background-color:#5c9bb7;

    background-image:-webkit-linear-gradient(top, #5c9bb7, #5392ad);
    background-image:-moz-linear-gradient(top, #5c9bb7, #5392ad);
    background-image:linear-gradient(top, #5c9bb7, #5392ad);

    box-shadow: 0 1px 1px #ccc;
    border-radius: 2px;
    width: 1080px;
    padding: 10px;
    margin: 45px auto 25px;
    position:relative;
    text-align:right;
    line-height: 1;
}

.bar a{
    background:#4987a1 center center no-repeat;
    width:32px;
    height:32px;
    display:inline-block;
    text-decoration:none !important;
    margin-right:5px;
    border-radius:2px;
    cursor:pointer;
}

.bar a.active{
    background-color:#c14694;
}

.bar a.list-icon{
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzNkFCQ0ZBMTBCRTExRTM5NDk4RDFEM0E5RkQ1NEZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzNkFCQ0ZCMTBCRTExRTM5NDk4RDFEM0E5RkQ1NEZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjM2QUJDRjgxMEJFMTFFMzk0OThEMUQzQTlGRDU0RkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjM2QUJDRjkxMEJFMTFFMzk0OThEMUQzQTlGRDU0RkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7h1bLqAAAAWUlEQVR42mL8////BwYGBn4GCACxBRlIAIxAA/4jaXoPEkMyjJ+A/g9MDJQBRhYg8RFqMwg8RJIUINYLFDmBUi+ADQAF1n8ofk9yIAy6WPg4GgtDMRYAAgwAdLYwLAoIwPgAAAAASUVORK5CYII=);
}

.bar a.grid-icon{
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBEQkMyQzE0MTBCRjExRTNBMDlGRTYyOTlBNDdCN0I4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBEQkMyQzE1MTBCRjExRTNBMDlGRTYyOTlBNDdCN0I4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MERCQzJDMTIxMEJGMTFFM0EwOUZFNjI5OUE0N0I3QjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MERCQzJDMTMxMEJGMTFFM0EwOUZFNjI5OUE0N0I3QjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4MjPshAAAAXklEQVR42mL4////h/8I8B6IGaCYKHFGEMnAwCDIAAHvgZgRyiZKnImBQsACxB+hNoDAQyQ5osQZIT4gH1DsBZABH6AB8x/JaQzEig++WPiII7Rxio/GwmCIBYAAAwAwVIzMp1R0aQAAAABJRU5ErkJggg==);
}

.bar input{
    background:#fff no-repeat 13px 13px;

    border: none;
    width: 100%;
    line-height: 19px;
    padding: 11px 0;

    border-radius: 2px;
    box-shadow: 0 2px 8px #c4c4c4 inset;
    text-align: left;
    font-size: 14px;
    font-family: inherit;
    color: #738289;
    font-weight: bold;
    outline: none;
    text-indent: 40px;
}

</style>