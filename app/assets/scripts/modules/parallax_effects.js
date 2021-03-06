class ParallaxSection{

	constructor(sectionID, bgSpeed, contentSpeed, contentSide){
		this.section = $(sectionID);
		this.bgSpeed = bgSpeed;
		this.content = this.section.find(".full-image-section__content");
		this.contentSide = contentSide;
		this.contentSpeed = contentSpeed;
		this.stickOnScroll = true;
		this.contentMargin = 5;

		this.init();
		this.events();
	}

	init()
	{
		if(this.contentSide !== "center" && $(window).width() >= 800)
		{
			this.content.addClass("full-image-section__content--slidein");
			this.contentSpeed = 0;
		}
		else
		{	
			this.content.css("left", "auto");
			this.content.css("right", "auto");
			this.content.removeClass("full-image-section__content--slidein");
			this.contentSpeed = 1;
		}
	}

	events()
	{
		//makes sure the parallax acts on a layout already set 
		//by forcing resize and scroll before triggering the effect
		$(window).trigger('resize').trigger('scroll');
		$(window).resize(this.init.bind(this));
		$(window).scroll(this.moveBg.bind(this));
		$(window).scroll(this.moveContent.bind(this));
	}

	moveBg()
	{
		var newPos = parseInt($(window).scrollTop() - this.section.position().top);

		if($(window).width() >= 800)
			this.section.css("background-position", "center " + newPos * this.bgSpeed + "px");
	}

	moveContent()
	{
		var newPos = parseInt($(window).scrollTop() - this.section.position().top);

		if (this.contentSide !== "center" && $(window).width() >= 800)
		{
			var contentLatPos;

			if(this.stickOnScroll)
				contentLatPos = Math.min(- this.contentMargin, newPos + $(".navbar").height());
			else
				contentLatPos = Math.min(- this.contentMargin, -Math.abs(newPos + $(".navbar").height()));

			this.content.css(this.contentSide, contentLatPos + "px");
		}
		
		this.content.css("top", Math.round(this.section.height()/2  - this.content.height()/2 + newPos * this.contentSpeed) + "px");	
	}
}

new ParallaxSection("#trekking-a-cavallo", -0.1, 1, "right");
new ParallaxSection("#corsi-equitazione", -0.1, 0, "left");
new ParallaxSection("#pony-game", -0.1, 0, "right");
new ParallaxSection("#valle-arroscia", -0.1, 0, "left");


