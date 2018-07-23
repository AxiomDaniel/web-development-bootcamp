//Create 4 ways of selecting the first paragraph
//<p id="first" class="special">Hello</p>

document.getElementsByTagName('p')[0]
document.getElementById('first')
document.getElementsByClassName('special')[0]
document.querySelector('p')
document.querySelector('#first')
document.querySelector('.special')
document.querySelector("h1 + p")
document.querySelectorAll("p")[0]
document.querySelectorAll(".special")[0]
