class ParallaxSection{

	constructor(sectionID, bgSpeed, contentSpeed, contentDirection){
		this.section = $(sectionID);
		this.bgSpeed = bgSpeed;
		this.content = this.section.find(".full-image-section__content");
		this.contentDirection = contentDirection;
		this.contentSpeed = contentSpeed;

		this.events();
		this.init();
	}

	init()
	{
		if(this.contentDirection === "left")
		{
		}
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
		var newPos = parseInt($(window).scrollTop() - this.section.position().top);

		if($(window).width() >= 800)
			this.section.css("background-position", "center " + newPos * this.bgSpeed + "px");
		
		if(Math.abs(parseInt(this.content.css("margin-" + this.contentDirection))) < this.content.width())
		{
			this.content.css("margin-" + this.contentDirection, newPos*2 + "px");
		}
		else
			this.content.css("margin-" + this.contentDirection, -newPos*2 + "px");

		// if(this.contentDirection === "left")
		// 	this.content.css("margin-" + this.contentDirection, - newPos*2 + "px");	
		// else if(this.contentDirection === "center")
		//this.content.css("top", this.section.height()/2 - this.content.height()/2 + newPos * this.contentSpeed + "px");	
	}
}


new ParallaxSection("#trekking-a-cavallo", -0.1, 1.5, "left");
new ParallaxSection("#pony-game", -0.1, 1.7);
new ParallaxSection("#corsi-equitazione", -0.1, 1.2);
new ParallaxSection("#valle-arroscia", -0.1, 1.5);





