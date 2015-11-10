// REFER TO: 
// click() : http://api.jquery.com/click/
// addClass() : http://api.jquery.com/addClass/
// removeClass() : http://api.jquery.com/removeClass/

// On click Night Button....
	$('.night-btn').click(function() {

  // Remove Day Class
  $('body').removeClass('day');

  // Add Night Class
  $('body').addClass('night');


});

// On click Day Button....
	$('.day-btn').click(function() {

  // Remove Day Class
  $('body').removeClass('night');

  // Add Night Class
  $('body').addClass('day');


});
