// REFER TO: 
// Random Number Generator: https://teamtreehouse.com/library/javascript-basics/working-with-numbers/create-a-random-number
// Concatenation: https://teamtreehouse.com/library/javascript-basics/storing-and-tracking-information-with-variables/combining-strings-2
// addClass() : api.jquery.com/addClass/
// text() : api.jquery.com/text/
// eval() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

// Generate random number between for three images
var randBg = 'bg' + Math.floor( Math.random() * 3 );




// Create & Store 3 different greetings. You choose. 


var randGreet = 'g' + Math.floor( Math.random() * 3 );

console.log(randGreet)

$('h2').addClass(randGreet)

$('.g0').text('Hello')
$('.g1').text('Welcome')
$('.g2').text('Go Away')

// On Page Load insert random greeting
// NOTE. Wrap/pass the option with eval() method
// use eval() to convert string to variable-object


// On Page Load add random body class to <body> element
// See CSS body class `bg0`, `bg1`, `bg2`
$('body').addClass(randBg)