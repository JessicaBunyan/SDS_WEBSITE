
$(".noJS").hide();


$("div.details").hide();
 $("div.details").height(240);

$("div.button").each(function(){

	$(this).click(function(){
		$("div.button").removeClass("clicked");
		$(this).addClass("clicked");
		var id = $(this).attr("id");
		$("div.details").hide();
		$("div.details."+id).show();
	});

});


$("div.divForm").hide();
$("button.register").click(function(){

	// $("div.divForm").show();
	window.location.href= "http://goo.gl/forms/mFo2ej6koL";
	return false;

});

$("div#xContainer").click(function(){

	$("div.divForm").hide();

});

$("div#xContainer").hover(function(){

	// $("div.divForm").css("background", "url(./img/transparent.png)");
	$("div.divForm").css("opacity", "0.5");

}, function(){

	$("div.divForm").css("opacity", "1");
});



$("#teamPartner").hide();


$("#doublesCheckbox").click(function(){

	if ($("#doublesCheckbox").is(':checked')){
		$("#teamPartner").show();
	}else{
		$("#teamPartner").hide();
	}

});


