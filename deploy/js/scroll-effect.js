$(window).scroll(function(){
    $("#social-icon-bar").css("opacity", 1 - $(window).scrollTop() / 250);
  });

$(window).scroll(function(){
    $("#footer-fixed").css("opacity", 1 - $(window).scrollTop() / 300);
  });

$(function() {
    var header = $("#footer-fixed");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 320) {
            header.removeClass('footer-fixed-show').addClass("footer-fixed-hide");
        } else {
            header.removeClass("footer-fixed-hide").addClass('footer-fixed-show');
        }
    });
});
