
console.log("running script");

$(window).load(function(){

	console.log("docment ready");

	$("iframe").each(function (index){

		console.log("in loop");
		var source = $(this).attr("data-src");
		$(this).attr("src", source);
	});

});