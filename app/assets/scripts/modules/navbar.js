$(window).on("resize", function(){
	if($(this).width() >= 800)
		$(".navbar").removeClass("visible");
});

$(".navbar__toggle").on("click", function(event){
	$(".navbar").toggleClass("visible");
});

$(".navbar a").on("click", function(e){
     e.preventDefault();

	var target = this.hash;
	var compensateNavOffset = $(".navbar").height();

	if($(window).width() < 800)
	{
		compensateNavOffset = 0;
		$(".navbar").removeClass("visible");
	}

	var scrollTo = $(target).offset().top - compensateNavOffset;
	$('html, body').stop().animate({'scrollTop': scrollTo}, 900, 'swing');
});



