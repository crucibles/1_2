

var movie0 = {
	id: 0,
	title: "Alita",
	price: 150.00,
	cinema: 1,
	date_start: "Feb 23, 2019",
	date_end: "Feb 28, 2019",
	synopsis: "Alita a restored cyborg that is strong and pretty",
	img: '0.jpeg'
}

var movie1 = {
	id: 1,
	title: "A Dog's Way Home",
	price: 150.00,
	cinema: 2,
	date_start: "Feb 23, 2019",
	date_end: "Feb 28, 2019",
	synopsis: "A pretty dog that has a shoe",
	img: '1.jpeg'
}

var movie2 = {
	id: 2,
	title: "How to train your dragon 3",
	price: 150.00,
	cinema: 3,
	date_start: "Feb 23, 2019",
	date_end: "Feb 28, 2019",
	synopsis: "A new white dragon appears with toothless.",
	img: '2.jpeg'
}

var movie3 = {
	id: 3,
	title: "The Lego Movie 2",
	price: 150.00,
	cinema: 4,
	date_start: "Feb 23, 2019",
	date_end: "Feb 28, 2019",
	synopsis: "The Lego Movie 2",
	img: '3.jpeg'
}

var movie4 = {
	id: 4,
	title: "The Quake",
	price: 150.00,
	cinema: 1,
	date_start: "Mar 1, 2019",
	date_end: "Mar 8, 2019",
	synopsis: "Alita a restored cyborg that is strong and pretty.",
	img: '4.jpeg'
}

var movie5 = {
	id: 5,
	title: "The Knight of Shadows",
	price: 150.00,
	cinema: 2,
	date_start: "Mar 1, 2019",
	date_end: "Mar 8, 2019",
	synopsis: "Alita a restored cyborg that is strong and pretty.",
	img: '5.jpeg'
}

var movie6 = {
	id: 6,
	title: "The Prodigy",
	price: 150.00,
	cinema: 3,
	date_start: "Mar 1, 2019",
	date_end: "Mar 8, 2019",
	synopsis: "Alita a restored cyborg that is strong and pretty.",
	img: '6.jpeg'
}

var movie7 = {
	id: 7,
	title: "Cold Pursuit",
	price: 150.00,
	cinema: 4,
	date_start: "Mar 1, 2019",
	date_end: "Mar 8, 2019",
	synopsis: "Alita a restored cyborg that is strong and pretty.",
	img: "7.jpeg"
}


var movies = new Array(movie0, movie1, movie2, movie3, movie4, movie5, movie6, movie7);



function setSeatPlan(){

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
	var reserved_seats = [];

	for(var i=0; i<15; i++){
		rows.push(e.path[2].children[1].children[1].children[i]);
	}

	reserved_seats = rows.filter(seats => Array.from(seats.children).filter(seat => seat.className == "btn btn-success").length > 0 );


	console.warn(reserved_seats);

	
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
