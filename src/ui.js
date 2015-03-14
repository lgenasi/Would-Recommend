var foundMovie;

function homePageSearch(criteria){
	var searchBtn = document.getElementById("searchBtn");
	var searchBox = document.getElementById("searchCriteria");
	var img = document.getElementById("img");
	var buttons = document.getElementById("buttons");

	foundMovie = search(searchBox.value);

	if(foundMovie){
		buttons.style.cssText="";
		img.src = foundMovie.image;
	} else{
		buttons.style.cssText="display:none;";
		img.src = "http://wiki.ggpsystems.co.uk/images/Dickbutt.jpg";
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

	wouldRecommendBtn.onclick = function(){
		foundMovie.wouldRecommend(true);
		window.alert(Math.round((foundMovie.numYes / foundMovie.numOfVotes)*100) + "% of people would recommend " + foundMovie.title);
	}

	nahBtn.onclick = function(){
		foundMovie.wouldRecommend(false);
		window.alert(Math.round((foundMovie.numYes / foundMovie.numOfVotes)*100) + "% of people would recommend " + foundMovie.title);
	}
}