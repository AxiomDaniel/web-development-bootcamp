// let alist = [1,2,3,4];
//
// console.log(alist.shift());
// // shift method is to pop the first item in the array
//
// alist.unshift(0);
// // Unshift is to add items into the front of the array
//
// console.log(alist);

let colors = ["red","orange","yellow","green"];

colors.forEach((color)=> console.log(color));

// I figured if i'm gonna land a job doing front end in the immediate future, I should probably practice writing ES5 code, just in case i need it. At this point, I'm not even familiar of how to write a for loop in javascript the old way

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
