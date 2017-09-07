$(window).on("resize", function(){
	var windowH = $(window).height(); 
	var topnavH = $("#topnav").height();

	var newSectionH = windowH - topnavH;
	newSectionH += Math.ceil(newSectionH/100);
	$(".section").css( "height", newSectionH + "px" );

	$("body").css("margin-top", Math.round(topnavH));
});

// function logSectionsHeight(){
// 	$(".section").each(function() {	
// 		var id = $(this).attr("id");
// 		var height = $(this).height();
// 		console.log(id + ": " + height);	
// 	});
// }
