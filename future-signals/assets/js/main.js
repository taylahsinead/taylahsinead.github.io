$ (document).ready (function(){
console.log("The page is ready!");

jQuery(function($){
	$ ('.research-item').click(function(){
		var img = $(this)attr("src");
		var appear_image = "<div id='appear_image_div' onClick='closeimage()'></div>";
		appear_image= appear_image.concat ("img id='appear_image' src='"+img+"/>");
		appear_image= appear_image.concat ("img id='close_image' src=close.png' />");
		$('body').append(appear_image);
}

});
});

	function closeImage (){
		$('$appear_image_div').remove();
		$('appear_image_div').remove();
}