

var movie1 = {
	id: 1,
	title: "Alita",
	price: 150.00,
	cinema: 1,
	date: "Feb 6, 2019",
	synopsis: "Alita a restored cyborg that is strong and pretty.",
	rate: 4.0,
	image: "alita.jpg"
}

var movie2 = {
	id: 2,
	title: "A Dog's Way Home",
	price: 250.00,
	cinema: 1,
	date: "Feb 6, 2019",
	synopsis: "A dog travels 400 miles in search of her owner.",
	rate: 4.0,
	image: "adog.jpg"
}


var movies = new Array(movie1, movie2, movie1, movie2, movie1, movie2, movie1);



function getMovieTitle(id) {
	return (movies[id].title);
}

function getPrice(id) {
	return (movies[id].price);
}

function getCinema(id) {
	return (movies[id].cinema);
}

function getDate(id) {
	return (movies[id].date);
}

function getSynopsis(id) {
	return (movies[id].synopsis);
}

function getRate(id) {
	return (movies[id].rate.toFixed(1));
}

var tempImg = new Image();

tempImg.onload = function(){
   appendImage();
}

function movieList() {
	var movie = "";

	for (var id = 0; id <= movies.length - 1; id++){
		movie = movie + "<li>" + '<div class="card">' + ' <div class="popup">' + "<img src=\"" + id + ".jpg\"" + 'class="card-img-top" alt="..." > <div class="rating"> <div class="rate">' + getRate(id) +'&#9734</div> </div> </div> <div class="card-body"> <strong>Php '+ getPrice(id) + '</strong> <div class="movie-details"> <p class="card-text"> <h5 class="card-title"><strong>' + getMovieTitle(id) + '</strong></h5> <strong>Cinema ' + getCinema(id) + '</script> |	' + getDate(id) + '</strong> <p>' + getSynopsis(id) + '</p> </p> </div> <a data-backdrop="static" data-toggle="modal" data-target=".bd-example-modal-lg" href="" class="btn btn-primary">' + "Book Now" + '</a> </div> </div> </li>';

			document.getElementById("horizontal-list").innerHTML = movie; 
	}
}

function setSeatPlan() {

	var seat = "";

	for (var row = 'A'; row<='O';) {
		seat = seat +  '<div class="row-space" id="'+ row + '">' + '<span class="row">'+ row +"</span>";
		for(var i=1; i<=10; i++){
			seat = seat +'<button class="btn btn-secondary">' + i + "</button>";
		}
		seat = seat + "</div>"

		row = nextChar(row);
		console.log(row);
	}
	console.log(seat);

	document.getElementById("sp").innerHTML = seat;

}
