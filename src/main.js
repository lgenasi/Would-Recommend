window.onload = function(){
	var filmDiv = document.getElementById("film");
	var img = document.getElementById("img");

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

	bindControls();
};

