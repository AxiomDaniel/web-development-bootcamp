//Note: If you want to know what are the available events to listen to: go to MDN Event reference


var button = document.querySelector("button");
var body = document.querySelector("body");
isPurple = false;

button.addEventListener("click", ()=> {
    body.classList.toggle("body-purple")
});


//Alternatively, if you wanna be lazy and not create a CSS file or property for this. You can do:

// button.addEventListener("click", ()=> {
//     if (isPurple) {
//         document.body.style.background = 'white';
//     } else {
//         body.style.background = 'purple'
//     }
//     isPurple = !isPurple;
// });
//Note here that using document.body.style is the same as body.style
//But be cause, that's because I did a querySelector to find body above. If you dont want to do that, you gotta use document.body
