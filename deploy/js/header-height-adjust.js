//calculates height of header - adds main-content-wrapper margin-top

$(document).ready(function(){
  var height = $("#luc-header").height();
	$("#main-content-wrapper").css("margin-top",height);
});

$(window).resize(function(){
  var height = $("#luc-header").height();
	$("#main-content-wrapper").css("margin-top",height);
});

$(document).ready(function(){
  var height = $("#luc-header").height();
	$("#main-content-wrapper-full-width").css("margin-top",height);
});

$(window).resize(function(){
  var height = $("#luc-header").height();
	$("#main-content-wrapper-full-width").css("margin-top",height);
});

$(window).resize(function(){
  var firstparagraph = $("#luc-header").height();
	$(".grid-area-two").css("margin-top",firstparagraph);
});
