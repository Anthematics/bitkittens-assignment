document.addEventListener("DOMContentLoaded",function() {

	let buttoncats = document.querySelector('.summon-cats');
		buttoncats.addEventListener('click',function(e) {
			e.preventDefault()
			$.ajax ({
				url: 'http://bitkittens.herokuapp.com/cats.json',
				method: 'GET' ,
				datatype:  'JSON'

			}).done(function(data){
console.log(data.cats[0].photo)
// Creates a new <img> tag -> var element = document.createElement('img');


			let newcat = document.createElement("IMG"); //so we are creating a image element for the image

			
			let catbox = document.getElementById("cat1"); //so we are getting a picture of a cat
			newcat.src = data.cats[0].photo; // so we are grabbing a picture from the api
			newcat.alt="photo of " + data.cats[0].name; //so we are making its
			//alt in the img descriptor show the cats name


			catbox.appendChild(newcat);
// Inserts that <img> into one of the empty .cat-box divs'

create a for loop to go thru the cats and add
			})


		})
	})




var newcat = document.createElement("IMG");
