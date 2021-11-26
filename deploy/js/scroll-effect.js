// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {
//
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();
//
//       // Store hash
//       var hash = this.hash;
//
//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top - 200
//       }, 600, function(){
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         // window.location.hash = hash;
//       });
//     } // End if
//   });
// });

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

/*win.scroll(function(){
  scrollPosition = win.scrollTop();
  scrollRatio = 1 - scrollPosition / 300;
  $(".top").css("opacity", scrollRatio);
*/
