$(document).ready(function(){
  $('button.content-activate-symbol').click(function(){
    $('.button.content-activate-symbol').not(this).removeClass('active');
    $(this).toggleClass('active');
    $('button.content-activate-symbol').not(this).parent('div.content-image-overlay').removeClass('active');
    $(this).parent('div.content-image-overlay').toggleClass('active');
  })
});