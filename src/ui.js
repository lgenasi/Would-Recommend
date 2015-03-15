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

			var c = document.getElementById("myCanvas");
			var ctx = c.getContext("2d");
			ctx.fillStyle = "rgb(0,0,255)"; 
			ctx.fillRect(0, 0, c.width, c.height);
			//ctx.drawImage(img, 0, 0);
			var imgData = ctx.getImageData(0, 0, c.width, c.height);
			console.log(imgData.data[0]);
			console.log(imgData.data[1]);
			console.log(imgData.data[2]);
			/*for (var i = 0; i < imgData.data.length; i += 4) {
    		console.log(imgData[i  ]); // red
    		console.log(imgData[i+1]); // green
    		console.log(imgData[i+2]); // blue
    		// i+3 is alpha (the fourth element)
    	}*/

    	document.body.style.backgroundColor = "rgb(" + imgData.data[0] + "," + imgData.data[1] + "," + imgData.data[2] + ")";
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
}