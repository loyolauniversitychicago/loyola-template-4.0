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
  var element = document.getElementById('interior-header');
  var position = element.getBoundingClientRect();
  var x = position.left;
  var y = position.top;
  $("#main-aside-wrapper").css("margin-top",y);
});
