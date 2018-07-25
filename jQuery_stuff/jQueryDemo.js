// // To select an element
// document.querySelectorAll('h1');
// //is equivalent to
// $("h1");
// //Note that this works like querySelectorAll: it returns a list of items
//
//
// //Example #1: Change the colour of h1 to red
// var header = document.querySelector('h1');
// header.style.color = 'red';
//
// //Same action using jQuery:
// $('h1').css('color', 'blue');
//
// //Example #2: You want to change a bunch of stuff
// //Using vanillaJS, you'll have to create a property in the CSS file, then call header.classList.add('someProperty');
//
// //Same action in jQuery
// // var styles = {
// //   color: 'red',
// //   background: 'grey',
// //   border: '1px solid black'
// // }
// // $('h1').css(styles);
// //Alternatively:
// $('li').css({
//   color: 'red',
//   background: 'grey',
//   border: '1px solid black'
// });
//
//
// //Example #3: Suppose you wanna change all of the li into blue colour
// //VanillaJS:
// var lis = document.querySelectorAll('li');
// lis.forEach((li) => li.style.color = 'blue');
//
// //jQuery
// $('li').css('color', 'red');
// //We just saved time writing a whole loop


// Example #4: Retrieving text content from an element
// VanillaJS
var headText = document.querySelector('h1');
console.log(headText.textContent);

//jQuery
var headTextJQ = $('h1').text()
console.log(headTextJQ);

// Example #5: Updating text content of an element
// VanillaJS
var headText = document.querySelector('h1');
headText.textContent = "This is a VanillaJS Demo!"

//jQuery
$('h1').text("This is a jQuery Demo!");


//Example #6: Dealing with HTML
// VanillaJS
var ulHTML = document.querySelector('ul');
console.log(ulHTML.innerHTML);
// Let's change the elements
ulHTML.innerHTML = "<li>Strawberry</li><li>Orange</li><li>Custard Apple</li>"

//Lets hack it with jQuery
console.log($('ul').html());
$('ul').html("<li>Apple</li><li>Pear</li><li>Pineapple</li>")


// Example #6: Using attr
//But first, lets make the picture a little smaller
var pineMartenJQ = $('img')
pineMartenJQ.css('width', '300px')

//By using attr, we can change the attribute of an element in a tag
// From:
//<img src="http://i.imgur.com/zvANQeG.jpg" alt="">
// To:
//<img src="http://www.google.com" alt="">

$('img:first-of-type').attr('src', 'https://i.imgur.com/nHGKNsf.jpg')

//To select the last image of a type: Use the .last method

$('img').last().attr('src', 'https://i.imgur.com/nHGKNsf.jpg')

// Example #7: val method
//In the input element, i've manually changed the placeholder to value:
//<input type="text" value="John Smith">

// To extract the value using jQuery: (It's getting kinda intuitive already)
var value = $('input').val()
console.log(value);

// To change it:
$('input').val("JIMMY ONISHIII")

//Let's just reverted it back to what it was, placeholder instead of value
$('input').val("") //This is also important if your website wants to reuse that text box
$('input').attr('placeholder', 'John Smith');

//Another important application of this method is to retrieve the user's choice in the dropdown menu
console.log($('select').val());

//Example #8: Adding and removing class from element
// vanillaJS
let header = document.querySelector('h1');
header.classList.add('correct');
header.classList.remove('correct');

//jQuery
$('h1').addClass('wrong');
$('h1').removeClass('wrong');

//For a bunch of stuff
let lis = document.querySelectorAll('li');
lis.forEach(function(elem) {
  elem.classList.add('wrong')
});

//jQuery
$('li').addClass('error');

//jQuery also has toggle!
$('li').toggleClass('error');
$('li:first-of-type').toggleClass('error');