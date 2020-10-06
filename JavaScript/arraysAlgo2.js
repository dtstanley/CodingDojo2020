console.log("Multiply each value in the array by its array position")

var prod = 0;
var testArr = [0, 3, 5, 1, 2, 4];
for (var j = 0; j < testArr.length; j++) {

    prod = testArr[j] * j;
    console.log("testArr[" + j + "] X " + j + " = " + prod);

    // sum = j * testArr[j];
    // console.log("testArr[" + j + "] = " + testArr[j] + ", Sum so far is " + sum);

}
console.log("");
console.log("Here is the array: [" + testArr + "]");
console.log("");
console.log("complete");