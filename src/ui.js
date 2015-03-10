function bindControls(){
	var wouldRecommendBtn = document.getElementById("wouldRecommendBtn");
	wouldRecommendBtn.onclick = function(){
		var filmChkBox = document.getElementsByClassName("FilmCheckbox");
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
		var filmChkBox = document.getElementsByClassName("FilmCheckbox");
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
}