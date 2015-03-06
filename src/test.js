var movies = [
{title:"Magnolia", numYes:0, numNo:0, numOfVotes:0},
{title:"Boogie Nights", numYes:0, numNo:0, numOfVotes:0}
];

var filmChkBox;

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
		filmChkBox = document.getElementsByClassName("FilmCheckbox");
		for(var i = 0; i < filmChkBox.length; i++){
			if(filmChkBox[i].checked){
				for(var j = 0; j <movies.length; j++){
					if(filmChkBox[i].value == movies[j].title){
						movies[j].numYes++;
						movies[j].numOfVotes++;
						window.alert(Math.round((movies[j].numYes / movies[j].numOfVotes)*100) + "% of people would recommend " + movies[j].title);
					}
				}
			}
		}
	}
	var nahBtn = document.getElementById("nahBtn");
	nahBtn.onclick = function(){
		filmChkBox = document.getElementsByClassName("FilmCheckbox");
		for(var i = 0; i < filmChkBox.length; i++){
			if(filmChkBox[i].checked){
				for(var j = 0; j <movies.length; j++){
					if(filmChkBox[i].value == movies[j].title){
						movies[j].numNo++;
						movies[j].numOfVotes++;
						window.alert(Math.round((movies[j].numYes / movies[j].numOfVotes)*100) + "% of people would recommend " + movies[j].title);
					}
				}
			}
		}
	}
};

