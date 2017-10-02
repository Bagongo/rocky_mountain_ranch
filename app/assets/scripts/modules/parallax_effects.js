class ParallaxSection{

	constructor(sectionID, bgSpeed, contentSpeed){
		this.section = $(sectionID);
		this.content = this.section.find(".full-image-section__content");
		this.bgSpeed = bgSpeed;
		this.contentSpeed = contentSpeed;

		this.events();
	}

	events()
	{
		//makes sure the parallax acts on a layout already set 
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
new ParallaxSection("#pony-game", -0.1, 1.7);
new ParallaxSection("#corsi-equitazione", -0.1, 1.2);
// new ParallaxSection("#valle-arroscia", -0.1, 1.5);
new ParallaxSection("#c-mariano", -0.1, 1.5);





