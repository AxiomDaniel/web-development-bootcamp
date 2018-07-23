//Now that we have learnt how to use getElement and querySelector, we can use that knowledge to effect change on elements in the HTMl through the use of javascript.

//One of such things is changing the CSS style elements of an element

//Suppose:
//<h1>Chameleon</h1>

//We first select it through a plethora of ways
var h1 =  document.querySelector("h1");

//Now we can change its CSS properties!
h1.style.color = 'blue';
h1.style.border = '10px solid grey';
h1.style.fontSize = "70px";
//Note that for each property we mention, there must be quotes! Unlike CSS where there isn't a need for quotes
//On the above, its not a very good idea to use multiple lines to change a property of an element. We can use a smarter way!


//In the CSS file, we can make a property!
//.green-chameleon {
//     color: green,
//     border = 10px solid green,
//     font-size = green
// }

//Now we can just call:
h1.classList.add('green-chameleon');
//note! It is using classList now, NOT style!

//Within classList, there are three functions that are extremely useful!
//We've seen add, which adds styling to an element
//There's also remove, which removes that style from the element
h1.classList.remove('green-chameleon');
//Finally, there's toggle. Which is to switch on or off a style.
h1.classList.toggle("green-chameleon");
//Explicit explanation: If its on, turn it off. If its off, turn it on.


//Nugget of wisdom: Separation of Concerns
//By doing it this way,
//The HTML still only cares about the structure of the page
//The CSS cares about the various stylings that an element can adopt
//And the javascript just helps to change from one style to another
