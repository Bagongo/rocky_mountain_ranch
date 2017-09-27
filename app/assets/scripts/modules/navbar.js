$(".navbar-toggle").on("click", function(event) {
	event.preventDefault();
	var $navbar = $(this).closest(".navbar");
	$navbar.toggleClass("responsive");
});

$("#topnav a:not(:last)").on("click", function(e){
     e.preventDefault();

	// $("#topnav").removeClass("responsive");

	var target = this.hash;
	var scrollTo = $(target).offset().top - $("#topnav").height();

	console.log(scrollTo);

	$('html, body').stop().animate({'scrollTop': scrollTo}, 900, 'swing');
});



