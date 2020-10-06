var j;
var sum = 0;

console.log("Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way")
for (var j = 1; j < 6; j++) {

    if (j === 1) {
        console.log("Num: " + j + ", Sum: " + j)
        sum = j;
    } else {
        sum = sum + j;
        console.log("Num: " + j + ", Sum: " + sum);

    }

}
console.log("complete")