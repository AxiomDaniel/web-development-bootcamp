// $('button').on('click', () =>
//   $('div').fadeOut(1000));

//The argument '1000' inside the fadeOut refers to the time in miliseconds to complete the animation. 1000 miliseconds == 1 second.

//Note: The code above only causes the elements to fade out. however, the elements still exist when we inspect the file. We could use the 2 argument for the fadeOut function, which will run that function one the fadeOut animation is completed.

// $('button').on('click', () =>
//   $('div').fadeOut(1000, function() {
//     $(this).remove()
//   })
// );

//Inspect the page after running this. The elements dont exist on the page already.

//The opposite of fadeOut is fadeIn. So lets try

// $('button').on('click', () =>
//   $('div').fadeOut(1000, function() {
//     $(this).fadeIn(1000);
//   })
// );

//after so much javascript, i've come to realise once there is a in and a out, there will also be a toggle.... So...

// $('button').on('click', () =>
//   $('div').fadeToggle(1000));

//Time for another animation: slideUp/slideDown/slideToggle

// $('button').on('click', () =>
//   $('div').slideUp(1000, function() {
//     $(this).slideDown(1000);
//   }));

$('button').on('click', () =>
  $('div').slideToggle(1000));