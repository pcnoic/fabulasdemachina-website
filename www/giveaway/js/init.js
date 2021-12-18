//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "1 feb 2022 18:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	