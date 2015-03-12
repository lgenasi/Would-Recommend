function homePageSearch(criteria){
	var searchBtn = document.getElementById("searchBtn");
	var searchBox = document.getElementById("searchCriteria");
	var img = document.getElementById("img");
	var buttons = document.getElementById("buttons");

	var imgPath = search(searchBox.value);

	if(imgPath == ""){
		buttons.style.cssText="display:none;";
		img.src = "http://wiki.ggpsystems.co.uk/images/Dickbutt.jpg";
	} else{
		buttons.style.cssText="";
		img.src = imgPath;
	}

	}

function bindControls(){
	searchBtn.onclick = function(){
		homePageSearch(searchBox.value);
	}

	searchBox.onkeyup = function(event){
		if (event.keyCode == 13){
			homePageSearch(searchBox.value);
		}
	}

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