console.log("test");

$("div.body").hide();


$("article.ruleset").each(function (index){


	var fun = expandContractFactory($(this));
	$(this).children("div.head").click(fun);

	// $(this).click(fun);

});
 


function expandContractFactory(element){

	// var d= $("#"+divID);
	var body = element.children("div.body");
	// var body = element;
	// console.log(element);
	console.log(body);
	function expandContractDiv(){

		body.toggle();

		// d.height(470);
		// d.off("click");
		// var fun =contractFactory(divID);
		// console.log(divID);
		// console.log(d.children(".eventBanner"));
		// d.children(".eventBanner").click(fun);
	}
	return expandContractDiv;
}