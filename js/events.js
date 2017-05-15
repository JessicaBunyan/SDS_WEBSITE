
console.log("poo");
$("div.past.event").height(100);

// var pastEvent = factory();

// var fun = ;
$("img.eventBanner.past").each(function (index){

	console.log("woo");
	var fun = expandContractFactory($(this));
	$(this).click( fun);
});



function expandContractFactory(element){

	// var d= $("#"+divID);
	var d = element;
	function expandContractDiv(){
		if(d.hasClass("data-expanded")){
			d.parent().height(100);
			d.removeClass("data-expanded")
		}else{
			console.log(d.parent());
			d.parent().height(485);
			d.addClass("data-expanded");
		}

		// d.height(470);
		// d.off("click");
		// var fun =contractFactory(divID);
		// console.log(divID);
		// console.log(d.children(".eventBanner"));
		// d.children(".eventBanner").click(fun);
	}
	return expandContractDiv;
}

// function contractFactory(divID){
// 	var d= $("#"+divID);
// 	function contractDiv(){
// 		d.height(100);
// 		d.click(expandFactory(divID));
// 	}
// 	return contractDiv;
// }