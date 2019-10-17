var demo = new Vue({
	el: '#main',
	data: {
		// The layout mode, possible values are "grid" or "list".
		layout: 'grid',
		records: [],
		question:{
			info: null,
			category: null,
			correct_answer:null,
			type:null,
			difficulty:null,
			i:null,
		}

	},

	methods: {
	     add() {
			 this.records.push(this.question);
			 console.log(this.records);
		
		},
		remove(index){
			this.records.splice(index,1);
		},
		edit(item){
			console.log(item);
			this.question=item;
			console.log(this.question.category);

		},
		update(question){
			console.log(this.records[0].category);
			
		}
		

	},

	mounted() {
		// axios
		fetch('https://opentdb.com/api.php?amount=5')
			.then(response => { return response.json() }).then(data => {
				console.log(data);
				this.records = data.results;



			})
	}

});