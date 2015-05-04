var main = function(){
	"use strict"

	console.log("Hello Vane!")

	//Reference: http://stackoverflow.com/questions/14051821/get-html-table-cells-values-in-a-rows-by-clicking-on-it
	$("#grid").click(function(cell){
		console.log("Clicked: " + $(cell.target).attr("id"));
		//Show what was clicked.
		$("#clickResult p").text("You clicked: " + ($(cell.target).attr("id")))

		//Get the list of classes for clicked item.
		var classList = $(cell.target).attr("class").split(" ");
		var isHit = 0;

		//Go through list of classes to see if the square contained a ship.
		classList.forEach(function(element){
			if(element === "ship"){
				console.log("You hit a ship");
				isHit = 1;
				$(cell.target).addClass("hit");  //If it held a ship, mark it as "hit".
			}
		});

		//If cell did not contain ship, then mark it as miss.
		if(isHit === 0){
			$(cell.target).addClass("miss");
		}

		//Make cell unclickable.
		$(cell.target).click(false);
		
	});
};

$(document).ready(main)
