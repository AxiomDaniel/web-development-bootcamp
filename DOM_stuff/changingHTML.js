//In changingStyle.js , we explored how we can change styling on a HTML element.
//Now, we can explore how we can change the text in a HTML element!

//Suppose:
//<p>This is an <strong>awesome</strong> paragraph</p>

//First step: select the element we want to alter
var firstpara = document.querySelector("p");

//We retrieve the text content of the element by:
firstpara.textContent

//We can also change the text content by:
firstpara.textContent = "Nah, its NOT"
//Now, this will obliterate whatever was in that element previous, including its html tags and stuff, so beware!

//Now, DONT BE A SMART ASS AND DO THIS:
firstpara.textContent = "Nah, its <strong>NOT</strong>"
//THIS DOESNT WORK, IT WILL NOT MARK UP TO A BOLDED TEXT!
//textContent is textContext is only TEXT CONTENT!

//If you wanna do this, use innerHTML, as a matter of fact, innerHTML is much better. But w/e...
firstpara.innerHTML = "Nah, its <strong>NOT</strong>"
//This will render properly
