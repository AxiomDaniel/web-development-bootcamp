function printRevserse(alist) {
    for (var i = alist.length-1; i >=0; i--) {
        console.log(alist[i]);
    }
}

// printRevserse([1,2,3,4]);

function isUniform(alist) {
    let firstItem = alist[0];
    // alist.forEach((item) => (item!==firstItem) ? return false: {});
    // This one doesnt work...
    for (var i = 1; i < alist.length; i++) {
        if (alist[i] !== firstItem) {
            return false
        }
    }
    return true;
}

console.log(isUniform([1,1,1,1]));
console.log(isUniform([2,1,1,1]));


function sumArray(alist) {
    sum = 0
    // for (var i = 0; i < alist.length; i++) {
    //     sum += alist[i]
    // }
    alist.forEach(
        (item) => sum+=item);
    return sum
}

console.log(sumArray([1,2,3,4]));

//This one is confusing. WAtch fun fun function reduce video again and again...
console.log([1,2,3,4].reduce((accumulator,item) => accumulator + item, 0));


function findMax(alist) {
    let max = alist[0]
    // for (var i = 1; i < alist.length; i++) {
    //     if (alist[i] > max) {
    //         max = alist[i];
    //     }
    // }
    alist.forEach((item) => {
        if (item > max) {
            max = item;
        }
    })
    return max
}

console.log(findMax([10,3,10,4]));
