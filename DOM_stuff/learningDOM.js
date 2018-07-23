//Get the element with the id 'highlight'
let tag = document.getElementById('highlight');

let elemByClass = document.getElementByClassName('bolded');
//This is gonna return the two li with class='bolded'
//This returns it as a node list, which is sort of like a lightweight array without some features of the array.

let elemByTagName = document.getElementsByTagName('li');
//Note the plural elements, not element
//This will get all the li in the html file.
//This will return the results in a node list

//STANDBY: OP Function coming in: querySelector
//This function allows us to select items by their CSS selector, which makes things a lot easier. We dont have to remember all the getElementByWhatever. We can just rely on this one for all tool

//Example 1:
//<li id='highlight'>List Item 1</li>
//If we were to refer to this in CSS, we would have written something #highlight {}
// The # is to address something with the id parameter
//So, same idea with querySelector
let listItemOne = document.querySelector("#highlight");

//It can also do primitive stuff like:
let getHeaderOne = document.querySelector('h1');
let getHeaderOne = document.querySelector('body');

//Example 3:
//For addressing class items, we use .bolded{}
//<li class='bolded'>List Item 2</li>
let listClassBolded = document.querySelector('.bolded');
//HOLD UP, IMPORTANT STUFF!
//querySelector ONLY RETURNS THE FIRST ITEM WITH THE CLASS, NOT A LIST OF ITEMS

//It can also work on complex CSS queries like:
//Suppose you have:
//<li><a class='special' href="http://google.com">GGRKS</a></li>
//The anchor tag has class='special' and also nested inside an li tag
//Sooooooo
let specialItem = document.querySelector('li a.special');


//Remember that querySelector only returns the first element that matches?
//If we use querySelectorAll , it returns all matching elements! HAX

let allHeadersOne = document.querySelectorAll("h1");
let allBolded = document.querySelectorAll(".bolded");



//Example:
// <ul>
//     <li>Blue</li>
//     <li>Yellow</li>
// </ul>

//Noteworthy point: Suppose you did
let uls = document.querySelector("ul");
//Now, this is one item, ONE ul
// Then you did:
uls.textContent
//This will result in
// "Blue Yellow"
// The text is concatenated!

//If we dont want this to happen, and we wanna keep the tags, we can use:
uls.innerHTML
//This will result in:
// " <li>Blue</li> <li>Yellow</li>"

//Ahhhh, much better
