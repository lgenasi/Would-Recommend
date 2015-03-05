var movies = [{title:"Magnolia", duration:128, rating:4},
{title:"Boogie Nights", duration:224, rating:5}];

var numbers = [1,2,3,4,5];

var test;

window.onload = function(){
	var filmDiv = document.getElementById("film");

	for (var i = 0; i < movies.length; i++){
		var br = document.createElement('br');
		var checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.name = "name";
		checkbox.value = movies[i].title;
		checkbox.id = i;
		checkbox.className = "FilmCheckbox";

		var span = document.createElement('span');
		span.innerHTML = movies[i].title;

		filmDiv.appendChild(checkbox);
		filmDiv.appendChild(span);
		filmDiv.appendChild(br);
	}

	var wouldRecommendBtn = document.getElementById("wouldRecommendBtn");
	wouldRecommendBtn.onclick = function(){
		test = document.getElementsByClassName("FilmCheckbox");
		for(var i = 0; i < test.length; i++){
			if(test[i].checked){
				for(var j = 0; j <movies.length; j++){
					if(test[i].value == movies[j].title){
						movies[j].rating++;
						window.alert(movies[j].title + ": " + movies[j].rating);
					}
				}
			}
		}
	}
	var nahBtn = document.getElementById("nahBtn");
	nahBtn.onclick = function(){
		test = document.getElementsByClassName("FilmCheckbox");
		for(var i = 0; i < test.length; i++){
			if(test[i].checked){
				for(var j = 0; j <movies.length; j++){
					if(test[i].value == movies[j].title){
						movies[j].rating--;
						window.alert(movies[j].title + ": " + movies[j].rating);
					}
				}
			}
		}
	}
};

