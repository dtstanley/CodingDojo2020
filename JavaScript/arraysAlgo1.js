console.log("Print values and sum of the array")

var sum = 0;
var testArr = [6, 3, 5, 1, 2, 4];
for (var j = 0; j < testArr.length; j++) {
    if (j === 0) {
        console.log("testArr[" + j + "] = " + testArr[j] + ", Sum so far is " + testArr[j]);
        sum = testArr[j];
    } else {
        sum = sum + testArr[j];
        console.log("testArr[" + j + "] = " + testArr[j] + ", Sum so far is " + sum);

    }

}
console.log("");
console.log("The sum of the array values is " + sum);
console.log("");
console.log("complete");