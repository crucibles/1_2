

var movie0 = {
	id: 0,
	title: "Alita",
	price: 150.00,
	cinema: 1,
	date_start: "Feb 23, 2019",
	date_end: "Feb 28, 2019",
	synopsis: "Alita a restored cyborg that is strong and pretty",
	img: '0.jpg',
	seat_plan: ["A1"],
	rate: 4.0
}

var movie1 = {
	id: 1,
	title: "A Dog's Way Home",
	price: 150.00,
	cinema: 2,
	date_start: "Feb 23, 2019",
	date_end: "Feb 28, 2019",
	synopsis: "A pretty dog that has a shoe",
	img: '1.jpg',
	rate: 4.0
}

var movie2 = {
	id: 2,
	title: "How to train your dragon 3",
	price: 150.00,
	cinema: 3,
	date_start: "Feb 23, 2019",
	date_end: "Feb 28, 2019",
	synopsis: "A new white dragon appears with toothless.",
	img: '2.jpg',
	rate: 4.0
}

var movie3 = {
	id: 3,
	title: "The Lego Movie 2",
	price: 150.00,
	cinema: 4,
	date_start: "Feb 23, 2019",
	date_end: "Feb 28, 2019",
	synopsis: "The Lego Movie 2",
	img: '3.jpg',
	rate: 4.0
}

var movie4 = {
	id: 4,
	title: "The Quake",
	price: 150.00,
	cinema: 1,
	date_start: "Mar 1, 2019",
	date_end: "Mar 8, 2019",
	synopsis: "Alita a restored cyborg that is strong and pretty.",
	img: '4.jpg',
	rate: 4.0
}

var movie5 = {
	id: 5,
	title: "The Knight of Shadows",
	price: 150.00,
	cinema: 2,
	date_start: "Mar 1, 2019",
	date_end: "Mar 8, 2019",
	synopsis: "Alita a restored cyborg that is strong and pretty.",
	img: '5.jpg',
	rate: 4.0
}

var movie6 = {
	id: 6,
	title: "The Prodigy",
	price: 150.00,
	cinema: 3,
	date_start: "Mar 1, 2019",
	date_end: "Mar 8, 2019",
	synopsis: "Alita a restored cyborg that is strong and pretty.",
	img: '6.jpg',
	rate: 4.0
}

var movie7 = {
	id: 7,
	title: "Cold Pursuit",
	price: 150.00,
	cinema: 4,
	date_start: "Mar 1, 2019",
	date_end: "Mar 8, 2019",
	synopsis: "Alita a restored cyborg that is strong and pretty.",
	img: "7.jpg",
	rate: 4.0
}


var movies = new Array(movie0, movie1, movie2, movie3, movie4, movie5, movie6, movie7);

var selected_movie = {};

function getMovieTitle(id) {
	return (movies[id].title);
}

function getPrice(id) {
	return (movies[id].price);
}

function getCinema(id) {
	return (movies[id].cinema);
}

function getStartDate(id) {
	return (movies[id].date_start);
}

function getEndDate(id) {
	return (movies[id].date_end);
}

function getSynopsis(id) {
	return (movies[id].synopsis);
}

function getRate(id) {
	return (movies[id].rate.toFixed(1));
}

function getImage(id) {
	return (movies[id].img);
}

function movieList() {
	var movie = "";

	for (var id = 0; id <= movies.length - 1; id++){
		movie = movie + "<li>" + '<div class="card">' + ' <div class="popup">' + '<img src="' + getImage(id) + '"class="card-img-top" alt="..." > <div class="rating"> <div class="rate">' + getRate(id) +'&#9734</div> </div> </div> <div class="card-body"> <strong>Php '+ getPrice(id) + '</strong> <div class="movie-details"> <p class="card-text"> <h5 class="card-title"><strong>' + getMovieTitle(id) + '</strong></h5> <strong>Cinema ' + getCinema(id) + '|	' + getStartDate(id) + ' - ' + getEndDate(id) +'</strong> <p>' + getSynopsis(id) + '</p> </p> </div> <a data-backdrop="static" data-toggle="modal" data-target=".bd-example-modal-lg" href="" class="btn btn-primary" onclick="bookNow('+ id +')">Book Now</a> </div> </div> </li>';

			document.getElementById("horizontal-list").innerHTML = movie; 
	}
}

function bookNow(id) {
	selected_movie = movies[id];
	console.log(selected_movie);
}

window.onload = function(){
	var myStorage = window.localStorage;

	for(var i=0; i<movies.length; i++){		
		myStorage.setItem("movie" + i, JSON.stringify(movies[i]));
	}

	console.log(myStorage);
}

function getMovie(movie_id){
	return movies.filter(movie => movie.id == movie_id)[0];
}

function getSeatPlan(movie_id){

	var seat = "";

	var r_seats = getMovie(movie_id).seat_plan;

	for (var row = 'A'; row<='O';) {

		// isolating the hot seat
		if(row == 'F' || row == 'K'){
			seat = seat +  '<div class="row-space-hot" id="'+ row + '">' + '<span class="row">'+ row +"</span>";
		} else {
			seat = seat +  '<div class="row-space" id="'+ row + '">' + '<span class="row">'+ row +"</span>";
		}


		for(var i=1; i<=10; i++){
			var cs = "" + row + i; 

			if(r_seats == cs){
				console.log(cs);
				seat = seat +'<button class="btn btn-danger">' + i + "</button>";
			} else {
				seat = seat +'<button class="btn btn-secondary">' + i + "</button>";
			}

		}
		seat = seat + "</div>"

		row = nextChar(row);
	}

	document.getElementById("sp").innerHTML = seat;

}

function initializeSeatPlan(){

	var seat = "";

	for (var row = 'A'; row<='O';) {

		// isolating the hot seat
		if(row == 'F' || row == 'K'){
			seat = seat +  '<div class="row-space-hot" id="'+ row + '">' + '<span class="row">'+ row +"</span>";
		} else {
			seat = seat +  '<div class="row-space" id="'+ row + '">' + '<span class="row">'+ row +"</span>";
		}


		for(var i=1; i<=10; i++){
			seat = seat +'<button class="btn btn-secondary">' + i + "</button>";
		}
		seat = seat + "</div>"

		row = nextChar(row);
	}

	document.getElementById("sp").innerHTML = seat;

}

function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}

function seatClick(e){

	if (e.target.className == 'btn btn-secondary') {
		e.target.className = 'btn btn-success';
	} else if(e.target.className == 'btn btn-success'){
		e.target.className = 'btn btn-secondary';
	}

}

function createBooking(e){

	var rows = [];
	var reserved_rows = [];
	var seats_string = [];
	var seat_names = [];
	var temp_string = "";
	var total_price = 0;

	for(var i=0; i<15; i++){
		rows.push(e.path[2].children[1].children[1].children[i]);
	}

	reserved_rows = rows.filter(seats => Array.from(seats.children).filter(seat => seat.className == "btn btn-success").length > 0 );


	for(var i=0; i<reserved_rows.length; i++){

		var current_row = reserved_rows[i];

		Array.from(current_row.children).filter(seat => { 

			if(seat.className == "btn btn-success"){
				seat_names.push(current_row.id + seat.innerHTML);
				// printing seats that will be reserved before confirming or checking it out
				document.getElementById("modal-seats").innerHTML += current_row.id + seat.innerHTML + ",";
				total_price += calculatePrice(current_row.id);
			}

		});

	}

	// printing the total price of the seats to be reserved
	document.getElementById("modal-price").innerHTML += total_price;

	// if given the seel

	var hidden = document.createAttribute("hidden");
	var seat_plan = document.getElementById("seat-plan");
	seat_plan.setAttributeNode(hidden);


	var confirm_booking = document.getElementById("confirm-booking");
	confirm_booking.removeAttribute("hidden");

	var modal_label =  document.getElementById("modal-label");
	modal_label.innerHTML = "Booking Details";

	var legends = document.getElementsByClassName("legend");
	var hidden = document.createAttribute("hidden");
	legends[0].setAttributeNode(hidden);

	/*
	Show the reserved seats here.
	*/

	console.log("showing the other one now")

}

function calculatePrice(seat){

	var price = selected_movie.price;

	if(seat >= 'F' && seat <= 'J'){
		return (price * 1.2);
	} else {
		return price;
	}

}
