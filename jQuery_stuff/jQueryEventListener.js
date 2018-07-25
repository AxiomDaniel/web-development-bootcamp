// Write a function for h1 to console.log when clicked

$('h1').click(() => console.log('h1 was clicked!'));


//Write a listener for all buttons:
//The click function for jQuery is just like the addEventListener function for vanillaJS
$('button').click(function() {
  $(this).css('backgroundColor', 'green');
  console.log('Clicked ' + $(this).text());
});

//NOTE! $(this) <- You must use the jQuery wrapper for 'this' keyword


// Using keydown, keyup, and keypress
// keydown triggers when the key is pressed
// keyup triggers when the key is released
// keypress triggers IN BETWEEN keyup and keydown
// NOTE: If you press shift + a
// keydown & keyup will trigger 'shift' first then 'a'
// keypress will trigger "A"

// Keypress demostration
//$('input') //the sweeping version. To be more precise on what input, use:
$("input[type='text']").keypress(function() {
  console.log("You pressed a key!");
})

//This will trigger on ANY key press. If you want to be more precise in what keys the event will trigger, then you'll need to add a parameter

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    console.log("You pressed the enter key!");
  }
})

//To know the corresponding keycode to key, use http://keycode.info/
// 13 happens to be the enter key. So we could use that like webpages to submit a query/login etc.


// The ON method, the universal tool for eventListeners
$('h1').on('click', function() {
  $(this).css('color', 'red');
})

//IMPORTANT: NOTE THAT I USED $(this) in this function. Why?
//Because if i wrote it like this:

// $('h1').on('click', function() {
//   $('h1').css('color', 'red');
// })

//And there are more than one h1 on the page, once I clcked one of them, ALL OF THE HEADERS WILL TURN TO RED!
//try it!


//IMPORTANT NOTE: There's a subtle difference using .click() and .on('click')
//.on('click') will add listeners on all potential future elements whilst .click() snapshots at the start

//Using on function with mouseover
//NOTE: in jQuery, mouseover aka hover is known as mouseenter
// mouseout is known as mouseleave
//Remember this!
$('h1').on('mouseenter', function() {
  $(this).css({
    color: 'steelblue',
    fontWeight: 'bold'
  })
});

$('h1').on('mouseout', function() {
  $(this).css({
    color: 'black',
    fontWeight: 'normal'
  })
});

//Actually, in jQuery you can use mouseout as well. It works
// But.... look at this:
//https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_mouseleave_mouseout