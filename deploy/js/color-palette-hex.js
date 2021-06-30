function rgb2hex(orig){
 var rgb = orig.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : orig;
}

$(".grid-square").each(function() {
	var name = $(this).data("id");
	var color = $(this).css("background-color");
	var hexed = (rgb2hex(color));
  $(this).html("<p class='grid-square-content'><span class='color-name'>" + name + "</span><span class='hex'>" + hexed + "</span></p>");
});
