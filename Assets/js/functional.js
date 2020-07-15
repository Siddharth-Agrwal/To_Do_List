console.log("connected");

$('ul').on("click","li", function(){
	$(this).toggleClass("clicked");
});

$('ul').on("click","span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	})
	event.stopPropagation();
})

$('input[type = "text"]').on("keypress", function(event){
	if( event.which === 13)
	{
		console.log("To-do-added");
		var todotext = $(this).val();
		$(this).val("");
		$('ul').append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todotext + "</li>");
	}
})

$('.fa-pencil').on("click",function(){
	$('input').fadeToggle();
})