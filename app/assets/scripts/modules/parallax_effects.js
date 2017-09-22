class ParallaxSection{

	constructor(sectionID, bgSpeed, contentSpeed){
		this.section = $(sectionID);
		this.content = this.section.find(".full-image-section__content");
		this.bgSpeed = bgSpeed;
		this.contentSpeed = contentSpeed;

		if(this.validate)
			this.events();
	}

	validate()
	{
		return this.section.hasClass("parallax-fx");
	}

	events()
	{
		//make sure the parallax acts on a layout already set 
		//by forcing resize and scroll before triggering the effect
		$(window).trigger('resize').trigger('scroll');
		$(window).scroll(this.triggerParallax.bind(this));
	}

	triggerParallax()
	{
		var newPos = ($(window).scrollTop() - this.section.position().top);

		if($(window).width() >= 800)
			this.section.css("background-position", "center " + newPos * this.bgSpeed + "px");
		
		this.content.css("top", + newPos * this.contentSpeed + "px");		
	}
}


new ParallaxSection("#trekking-a-cavallo", -0.1, 1.5);
new ParallaxSection("#pony-game", 0.05, -1);
new ParallaxSection("#lavoro-in-piano", -0.1, 1.2);




