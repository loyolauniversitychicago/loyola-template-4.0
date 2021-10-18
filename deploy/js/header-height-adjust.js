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

$(document).ready(function(){
  var height = $("#content-pagination-breadcrumbs" + "h1").height();
	$("nav#secondary").css("margin-top",height);
});
