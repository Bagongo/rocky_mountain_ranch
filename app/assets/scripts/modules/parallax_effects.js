$(".parallax-fx").each(function(){
	var $section = $(this);
	//make sure the parallax acts on a layout already set 
	//by forcing resize and scroll before triggering the effect
	$(window).trigger('resize').trigger('scroll');
	$(window).scroll(function(){
		var newPos = - ($(window).scrollTop() - $section.position().top) * 0.1;
		$section.css("background-position", "center " + newPos + "px");		
	});
});
