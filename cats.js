document.addEventListener("DOMContentLoaded",function() { //Dom must be loaded before JS executes at all.

	let buttoncats = document.querySelector('.summon-cats'); ///makes buttoncats = the literal cat button in the index file
		buttoncats.addEventListener('click',function(e) {
			e.preventDefault() //prevent something from loading so AJAX request can successfully send.
			$.ajax ({ //ajax request
				url: 'http://bitkittens.herokuapp.com/cats.json', //from bitkittens
				method: 'GET' , //says it is a get request
				datatype:  'JSON' //says it is JSON datatype

			}).done(function(data){ //runs when the request is successful


	 let cats= data.cats

// Creates a new <img> tag -> var element = document.createElement('img');

for (let i=0 ;i < cats.length; i++){
	console.log(cats[i])


let catbox = document.getElementById("cat"+(i+1));
//iterate through every cat in the API and insert its photo
			let newcat = document.createElement("IMG"); //so we are creating a image element for the image.
			 //so we are getting a space in the div to insert the picture
			newcat.src = cats[i].photo; // says please add the image in the space ".
			newcat.alt="photo of " + cats[i].name; //so we are making its alt in the img descriptor show the cats name

			catbox.appendChild(newcat);
// Inserts that <img> into one of the empty .cat-box divs'
}
// create a for loop to go thru the cats and add
			})


		})
	})




var newcat = document.createElement("IMG");
