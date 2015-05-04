var main = function(){
	"use strict"

	console.log("Hello Vane!")

	//Reference: http://stackoverflow.com/questions/14051821/get-html-table-cells-values-in-a-rows-by-clicking-on-it
	$("#grid").click(function(cell){
		$("#clickResult p").text("You clicked: " + ($(cell.target).attr("id")))
	});
};

$(document).ready(main)
