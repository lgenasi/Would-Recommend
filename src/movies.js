function Movie (title, numYes, numNo, numOfVotes, image){
	this.title = title;
	this.numYes = numYes;
	this.numNo = numNo;
	this.numOfVotes = numOfVotes;
	this.image = image;
	this.wouldRecommend = function(would){
		if (would){
			this.numYes++;
		} else {
			this.numNo++;
		}
		this.numOfVotes++;
		return this;
	}
}

var Magnolia = new Movie("Magnolia", 0, 0, 0, "http://ia.media-imdb.com/images/M/MV5BNzMzMDgyNTIzOF5BMl5BanBnXkFtZTcwOTk0MDg2OQ@@._V1__SX1857_SY903_.jpg");
var Birdman = new Movie("Birdman", 0, 0, 0, "http://ia.media-imdb.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1__SX1857_SY903_.jpg");
var GGP = new Movie("GGP", 0, 0, 0, "https://pbs.twimg.com/profile_images/486010323/logo_buffer_400x400.jpg");

var movies = [
Magnolia,
Birdman,
GGP
];