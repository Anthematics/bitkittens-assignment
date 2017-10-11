document.addEventListener("DOMContentLoaded",function() {

	let buttoncats = document.querySelector('.summon-cats');
		buttoncats.addEventListener('click',function(e) {
			e.preventDefault()
			$.ajax ({
				url: 'http://bitkittens.herokuapp.com',
				method: 'GET' ,
				datatype:  'JSON'

			})

// Creates a new <img> tag -> var element = document.createElement('img');
			let newcat = document.createElement("IMG");

			let visitcat = document.getElementById("imageid");
			a.src="../template/save.png";
			a.alt
// Sets the src attribute of the <img> to the cat's photo
// Sets the alt attribute of the <img> to "Photo of (insert cat name here)"

			var addcat = cat-box.appendChild(newcat);
// Inserts that <img> into one of the empty .cat-box divs'
		})
	})




var newcat = document.createElement("IMG");
