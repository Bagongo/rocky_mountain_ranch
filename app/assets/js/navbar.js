$(".navbar-toggle").on("click", function(event) {
	event.preventDefault();
	var $navbar = $(this).closest(".navbar");
	$navbar.toggleClass("responsive");
});
