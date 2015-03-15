window.onload = function(){
	bindControls();
};

function search(criteria){
	for(var i = 0; i < movies.length; i++){
		if (criteria.toUpperCase() === movies[i].title.toUpperCase()){
			return movies[i];
		}
	} 
	return false;
}
