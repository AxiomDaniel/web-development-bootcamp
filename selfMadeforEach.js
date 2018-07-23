//This is how a forEach function in java works.

[1,2,3,4].forEach(
    (num) => console.log(num));

//The forEach function takes in two arguments, one list and one function.
//It uses the list iterable and runs the function on each item of the list
//It works something like this:

function naiveforEach(alist, func) {
    for (var i=0; i < alist.length; i++) {
        func(alist[i]);
    }
}

alist = [5,6,7,8]
naiveforEach(alist, console.log);


//We've got the general idea of how the forEach works already.
//All we gotta do is alter how the function is called
//Instead of forEach(list, func), we gotta do list.forEach(func)
//To that end, we just gotta add it into the javascript Array prototype

// Array.prototype.myForEach = ((func) => {
//     for (var i = 0; i < this.length; i++) {
//         func(this[i]);
//     }
// });

//Note! Apparently arrow notation does not work for this. I vaguely remember reading this in programming paradigms. Got to check it out next time.

Array.prototype.myForEach = function(func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

mylist = [9,10,11,12]
mylist.myForEach(console.log);
