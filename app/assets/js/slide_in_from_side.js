var lastScrollTop = 0;
var scrollDir;

$(document).on("scroll", function(){
	var scrollTop = $(this).scrollTop();
	// determine scroll direction
	scrollDir = scrollTop > lastScrollTop ? "down" : "up";
	lastScrollTop = scrollTop;

	if(scrollTop >= $("#istruttori").position().top && scrollDir === "down")
	{
        pullInFromSide($(".istruttore").eq(0), "margin-left", 10);
        pullInFromSide($(".istruttore").eq(1), "margin-right", 10);
    }
    else if(scrollTop <= $("#istruttori").position().top && scrollDir === "up")
    {
    	pushOutFromSide($(".istruttore").eq(0), "margin-left", 10);
        pushOutFromSide($(".istruttore").eq(1), "margin-right", 10);
    }
});

function pullInFromSide(element, margin, speed)
{
	var elementMargin = parseInt(element.css(margin));

	if(elementMargin < 0)
	{
		elementMargin += Math.abs(elementMargin) < speed ? 1 : speed;
		element.css(margin, elementMargin + "px");
	}
}

function pushOutFromSide(element, margin, speed)
{
	var elementMargin = parseInt(element.css(margin));

	if(elementMargin > - parseInt($("#istruttori").css("width")) / 2)
	{
		elementMargin -= speed;
		element.css(margin, elementMargin + "px");
	}
}

