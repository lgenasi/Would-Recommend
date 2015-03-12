function homePageSearch(criteria){
	var searchBtn = document.getElementById("searchBtn");
	var searchBox = document.getElementById("searchCriteria");
	var img = document.getElementById("img");
	var buttons = document.getElementById("buttons");

	var imgPath = search(searchBox.value);

	if(imgPath == ""){
		buttons.style.cssText="display:none;";
		//img.src = "http://wiki.ggpsystems.co.uk/images/Dickbutt.jpg";
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

			var c = document.getElementById("myCanvas");
			var ctx = c.getContext("2d");
			ctx.fillStyle = "blue"; 
			ctx.fillRect(0, 0, c.width, c.height);
			//ctx.drawImage(img, 0, 0);
			var imgData = ctx.getImageData(0, 0, c.width, c.height);

			/*for (var i = 0; i < imgData.data.length; i += 4) {
    		console.log(imgData[i  ]); // red
    		console.log(imgData[i+1]); // green
    		console.log(imgData[i+2]); // blue
    		// i+3 is alpha (the fourth element)
    	}*/

		var bg = "rgb(" + imgData.data[0] + "," + imgData.data[1] + "," + imgData.data[2] + ")"
    	document.bgColor = bg;
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
}