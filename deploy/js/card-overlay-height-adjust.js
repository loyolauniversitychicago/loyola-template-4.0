$(document).ready(function(){
  var height = $(".image-wrapper").height() + 42 - $(".flex-item.content h4").height() - $(".flex-item.content p").height();
	$("#card-image-overlay .flex-item.content").css("height",height);
});

$(window).resize(function(){
  var height = $(".image-wrapper").height() + 42 - $(".flex-item.content h4").height() - $(".flex-item.content p").height();
  $("#card-image-overlay .flex-item.content").css("height",height);
});
