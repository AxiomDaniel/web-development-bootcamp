window.setTimeout(() => {
    let todolist = [];
    let choice;

    while ( choice !== "quit") {
        choice = prompt("What would you like to do?");

        if (choice === 'new') {
            let newItem = prompt("What would you like to add?");
            todolist.push(newItem);
            console.log(newItem + " added to the list.");
        } else if (choice === 'list') {
            prettyPrintToDo(todolist);
        } else if (choice === "delete") {
            let index = prompt("Enter index of todo to delete");
            todolist.splice(index,1);
            //Splice takes in two arguments. first one is which arguement to delete
            //Second argument specifies how many items to delete following that index.
            console.log("Deleted todo.");
        } else if (choice === 'quit') {
            console.log("Goodbye!");
        } else {
            console.log("Invalid command, please try again")
        }
    }
}, 500);

function prettyPrintToDo(alist) {
    console.log("**************");
    // for (var i = 0; i< todolist.length; i++) {
    //     console.log(i + ": " + todolist[i]);
    // }
    alist.forEach(
        (item,index) => console.log(index + ": " + item));
    console.log("**************");
}
