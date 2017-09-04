$(document).ready(function(){

	$(".parallax-fx").each(function(){
		var section = $(this);

		$(window).scroll(function(){
			var newPos = ($(window).scrollTop() - section.position().top) / 10;
			$(".full-image-section").css("background-position", "center " + newPos + "px");		
		});
	});

});