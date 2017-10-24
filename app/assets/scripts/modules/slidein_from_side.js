var lastScrollTop = 0;

class slideInElement{

	constructor(element, parent, side){
		this.element = element;
		this.parent = parent;
		this.margin = "margin-" + side;
		this.stickOnScroll = true;

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

		var newPos = parseInt($(window).scrollTop() - this.parent.position().top);
		var elementMargin = parseInt(this.element.css(this.margin));

		if(newPos < 0)
			this.element.css(this.margin, newPos + "px");
		if(newPos > 0 && !this.stickOnScroll)
			this.element.css(this.margin, -newPos + "px");
	}

}

new slideInElement($(".istruttore").eq(0), $("#instructors"), "left");
new slideInElement($(".istruttore").eq(1), $("#instructors"), "right");


