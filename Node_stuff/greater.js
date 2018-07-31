function averageScore(arrayOfInts) {
  let sum = arrayOfInts.reduce((accumulator, addend) => accumulator + addend, 0)
  let avg = Math.round(sum / arrayOfInts.length);
  return avg;
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(averageScore(scores));