var my_transactions = {
	my_transactions: []
}

window.onload = function(){
	var myStorage = window.localStorage;

	if(myStorage.getItem("my_transactions") == undefined){
		myStorage.setItem("my_transactions", JSON.stringify(my_transactions) );
	} else {
		getTransactions();
	}

}

function getTransactions(){
	var myStorage = window.localStorage;
	var transactions = JSON.parse(myStorage.getItem("my_transactions")).my_transactions;
	var list = "";

	for(var i=1; i<=transactions.length; i++){
		var movie = getMovie(transactions[i-1].movie_id);


		list += '<tr> <th scope="row">' + i +'</th> <td>'+ movie.title +'</td> <td>'+  movie.cinema +'</td> <td>'  + transactions[i-1].date +  '</td> <td>'+transactions[i-1].total_price+ '</td> </tr>'
	}

	document.getElementById("transaction-rows").innerHTML = list; 

}


function getMovie(movie_id){
	var myStorage = window.localStorage;
	return JSON.parse(myStorage.getItem("movie" + movie_id));
}