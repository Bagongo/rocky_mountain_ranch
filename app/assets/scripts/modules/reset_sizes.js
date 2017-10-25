$(window).on("resize", function(){
	var windowH = $(window).height(); 
	var topnavH = $(".navbar").height();
	var newSectionH = windowH - topnavH;
	newSectionH += Math.ceil(newSectionH/100);

	if($(this).width() < 800)
	{
		$(".section").css( "height", "100vh");
		$("body").css("margin-top", 0);
	}
	else
	{
		$(".section").css( "height", newSectionH + "px" );
		$("body").css("margin-top", Math.round(topnavH));
	}

	$(".full-image-section").each(function(){
		$(this).css("background-position", "center center");
	});
});

