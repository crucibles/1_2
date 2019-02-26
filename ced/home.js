

var movie0 = {
	id: 0,
	title: "Alita",
	price: 150.00,
	cinema: 1,
	date_start: "Feb 23, 2019",
	date_end: "Feb 28, 2019",
	synopsis: "Alita a restored cyborg that is strong and pretty",
	img: '0.jpg',
	seat_plan: [],
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
	seat_plan: [],
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
	seat_plan: [],
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
	seat_plan: [],
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
	seat_plan: [],
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
	seat_plan: [],
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
	seat_plan: [],
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
	seat_plan: [],
	rate: 4.0
}


var movies = new Array(movie0, movie1, movie2, movie3, movie4, movie5, movie6, movie7);
var myStorage = window.localStorage;

var selected_movie = {};
var selected_date = "";


window.onload = function(){

	for(var i=0; i<movies.length; i++){
		if(myStorage.getItem("movie" + i) == undefined){
			if(i == 0){
				initializeSeatPlan();
			}
			myStorage.setItem("movie" + i, JSON.stringify(movies[i]));
		}
	}

	if(myStorage.getItem("my-transactions") == undefined){
		myStorage.setItem("my-transactions", JSON.stringify([]))
	}
}

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
	}

	document.getElementById("horizontal-list").innerHTML = movie; 

}

function bookNow(id) {
	selected_movie = movies[id];
	getSeatPlan(id, selected_movie.date_start);
	console.log(selected_movie);
	selected_date = selected_movie.date_start;
	showDateChoices();

}

function showDateChoices() {
	console.log("Printing....")
	var date_choices = "";
	var cd = selected_movie.date_start;
	var ed = nextDate(selected_movie.date_end);
	var ed = longDateFormat(ed);


	do{

		cd = new Date(cd);
		var string_cd = longDateFormat(cd);
		console.log(string_cd);

		date_choices = date_choices + '<a class="dropdown-item" href="#" onclick=\'chooseDate("' + string_cd + '")\'>' + string_cd + '</a>';

		// <a class="dropdown-item" href="#">Feb</a>


		cd = nextDate(cd);
		cd = longDateFormat(cd);
	}while(cd != ed);

	document.getElementById("date-choices").innerHTML = date_choices;
	document.getElementById("movie-date").innerHTML = selected_movie.date_start;
	console.log("end -=");

}

function longDateFormat(date){
	var months = ["Jan ", "Feb ", "Mar ", "Apr ", "May ", "Jun ", "Jul ", "Aug ", "Sep ", "Oct ", "Nov ", "Dec "];

	return months[date.getMonth()] + date.getDate() + ", " + date.getFullYear();
}

function chooseDate(date) {
	document.getElementById("movie-date").innerHTML = date;
	getSeatPlan(selected_movie.id, date);
	selected_date = date;
}

function nextDate(date){
	var sd = new Date(date);
	var day = 60 * 60 * 24 * 1000;
	var ed = new Date(sd.getTime() + day);
	return ed;
}



function getMovie(movie_id){
	return movies.filter(movie => movie.id == movie_id)[0];
}

function getSeatPlan(movie_id, date){

	var seat = "";

	var r_seats = JSON.parse(myStorage.getItem("movie" + movie_id)).seat_plan.filter(x => x.date == date)[0].sp;

	console.log(r_seats); 


	for (var row = 'A'; row<='O';) {

		// isolating the hot seat
		if(row == 'F' || row == 'K'){
			seat = seat +  '<div class="row-space-hot" id="'+ row + '">' + '<span class="row">'+ row +"</span>";
		} else {
			seat = seat +  '<div class="row-space" id="'+ row + '">' + '<span class="row">'+ row +"</span>";
		}


		for(var i=1, x=0; i<=10; i++){
			var cs = "" + row + i;

			if(r_seats.filter(rs => rs == cs).length > 0){
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

	for(var i=0; i<movies.length; i++){
		var cur_movie = movies[i];
		var sd = new Date(cur_movie.date_start);
		var sd_string = longDateFormat(sd);
		var ed = nextDate(cur_movie.date_end);
		var ed = longDateFormat(ed);

		do{
			sd = new Date(sd);
			sd_string = longDateFormat(sd);
			cur_movie.seat_plan.push({date: sd_string, sp: []});
			sd = nextDate(sd);
			sd = longDateFormat(sd);
		}while(sd != ed);
	}

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
	var updated = JSON.parse(myStorage.getItem("movie" + selected_movie.id));
	console.log(updated);
	var updated_sp = updated.seat_plan.filter(sp => sp.date == selected_date)[0].sp;
	console.log(updated_sp);

	for(var i=0; i<15; i++){
		rows.push(e.path[2].children[1].children[1].children[i]);
	}

	reserved_rows = rows.filter(seats => Array.from(seats.children).filter(seat => seat.className == "btn btn-success").length > 0 );


	for(var i=0; i<reserved_rows.length; i++){

		var current_row = reserved_rows[i];

		Array.from(current_row.children).filter(seat => { 

			if(seat.className == "btn btn-success"){
				seat_names.push(current_row.id + seat.innerHTML);
				updated_sp.push(current_row.id + seat.innerHTML);
				// printing seats that will be reserved before confirming or checking it out
				document.getElementById("modal-seats").innerHTML += current_row.id + seat.innerHTML + ",";
				total_price += calculatePrice(current_row.id);
			}

		});

	}

	console.log(updated);

	selected_movie = updated;
	showBookingDetails(total_price);

}

function checkOut(){
	myStorage.setItem("movie" + selected_movie.id, JSON.stringify(selected_movie));
	var my_transactions = myStorage.getItem("my-transactions");

	console.log(my_transactions);

	//  set to be reserved in my transactions

	// temporary make new modal for the booking details
	location.reload();
}

function closeModal(){
	//temporary make new modal for the booking details
	location.reload();
}

function showBookingDetails(total_price){
	// printing the total price of the seats to be reserved
	document.getElementById("modal-price").innerHTML += total_price;
	document.getElementById("modal-movie-title").innerHTML += selected_movie.title;
	document.getElementById("modal-cinema-num").innerHTML += selected_movie.cinema;

	var hidden = document.createAttribute("hidden");
	var seat_plan = document.getElementById("seat-plan");
	seat_plan.setAttributeNode(hidden);


	var confirm_booking = document.getElementById("confirm-booking");
	confirm_booking.removeAttribute("hidden");

	var modal_label =  document.getElementById("modal-seat-plan");
	modal_label.innerHTML = "Booking Details";

	var legends = document.getElementsByClassName("legend");
	hidden = document.createAttribute("hidden");
	legends[0].setAttributeNode(hidden);

	var create_booking = document.getElementById("create-booking");
	hidden = document.createAttribute("hidden");
	create_booking.setAttributeNode(hidden);

	var movie_date = document.getElementById("movie-date");
	hidden = document.createAttribute("hidden");
	movie_date.setAttributeNode(hidden);

	var check_out = document.getElementById("check-out");
	check_out.removeAttribute("hidden");

}



function calculatePrice(seat){

	var price = selected_movie.price;

	if(seat >= 'F' && seat <= 'J'){
		return (price * 1.2);
	} else {
		return price;
	}

}
