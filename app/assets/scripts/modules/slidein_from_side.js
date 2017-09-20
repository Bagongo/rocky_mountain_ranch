var lastScrollTop = 0;

class slideInElement{

	constructor(element, side, speed){
		this.element = element;
		this.margin = "margin-" + side;
		this.section = this.element.closest(".section");

		this.events();
	}

	events()
	{
		$(window).scroll(this.triggerSlide.bind(this));
	}

	triggerSlide()
	{
		if($(window).width() < 800)
		{
			this.element.css("margin", 0);
			return;
		}

		var newPos = parseInt($(window).scrollTop() - this.section.position().top);
		var elementMargin = parseInt(this.element.css(this.margin));

		if(newPos < 0)
			this.element.css(this.margin, newPos + "px");
		else
			this.element.css(this.margin, -newPos + "px");

	}

}

new slideInElement($(".istruttore").eq(0), "left", 10);
new slideInElement($(".istruttore").eq(1), "right", 10);

