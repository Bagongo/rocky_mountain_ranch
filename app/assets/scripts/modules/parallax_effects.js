var parallaxSpeed = .1;

$(".parallax-fx").each(function(){
	var $section = $(this);
	var $content = $(this).find(".section__content");
	//make sure the parallax acts on a layout already set 
	//by forcing resize and scroll before triggering the effect
	$(window).trigger('resize').trigger('scroll');
	$(window).scroll(function(){
		var newPos = - ($(window).scrollTop() - $section.position().top) * parallaxSpeed;
		$section.css("background-position", "center " + newPos + "px");
		$content.css("top", - newPos + "px");		
	});
});
