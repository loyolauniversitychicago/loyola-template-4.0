// accesibility for sliding nav

var MS = {};
MS.App = (function() {
  var ESCAPE_CODE = 27;
  var navButton = $('#menu-button-mobile'),
      navMenu = $('#side-nav');
  var navLinks = navMenu.find('a');

  function initApp() {
    navMenu.on('keydown', handleKeydown);
    navButton.on('click', handleClick);
    disableNavLinks();
  }
  function handleKeydown(event) {
    if (event.keyCode === ESCAPE_CODE) {
      document.body.classList.toggle('active');
      disableNavLinks();
      navButton.toggleClass('open');
      navButton.focus();
    }
  }
  function handleClick(event) {
    if (document.body.classList.contains('active')) {
      document.body.classList.remove('active');
      disableNavLinks();
    }
    else {
      document.body.classList.add('active');
      enableNavLinks();
      navLinks.eq(0).focus();
    }
  }
  function enableNavLinks() {
    navButton.attr('aria-label', 'Menu expanded');
    navMenu.removeAttr('aria-hidden');
    navLinks.removeAttr('tabIndex');
  }
  function disableNavLinks() {
    navButton.attr('aria-label', 'Menu collapsed');
    navMenu.attr('aria-hidden', 'true');
    navLinks.attr('tabIndex', '-1');
  }
  return {
    init: function(){
      initApp();
    }
  }
})();

$(document).ready(function($) {
  new MS.App.init();
});

//animation for mobile menu button

$(document).ready(function(){
	$('#menu-button-mobile').click(function(){
		$(this).toggleClass('open');
//   $('#side-nav-search-wrapper input').focus();
	});
});

//open and close search

$(document).ready(function(){
	$('#search-button').click(function(){
    $('#search-overlay-wrapper').toggleClass('open');
		$('#search-overlay').toggleClass('open');
    $('#search-overlay input').focus();
	});
});

$(document).ready(function(){
	$('#search-close').click(function(){
    $('#search-overlay-wrapper').toggleClass('open');
		$('#search-overlay').toggleClass('open');
	});
});

$(document).keydown(function(e){
  if(e.keyCode == 27) {
    if ($('#search-overlay').hasClass('open')) {
      $('#search-overlay').removeClass('open');
      $('#search-button').focus();
    }
      if ($('#search-overlay-wrapper').hasClass('open')) {
      $('#search-overlay-wrapper').removeClass('open');
    }
  }
});

//hide sliding nav - browser window 1024px

$(window).resize(function(){
  if (screen.width > 1024) {
    $("body.active .sidenav").hide();
  }
  else {
    $("body.active .sidenav").show();
  }
});

//END
