//Predict 1:

//Console prediction: 8,6,7,5,3.0.9


console.log("")
console.log("Predict 1 begins")
var arr = [8, 6, 7, 5, 3, 0, 9]
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//Predict 2:

//Console prediction:
//That is odd!
//That is odd!
//8
//4
//2
//That is odd!
//That is odd!

console.log("")
console.log("Predict 2 begins")
var arr = [7, 3, 8, 4, 2, 0, 1];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    } else {
        console.log("That is odd!");
    }
}

//Predict 3:

//Console Prediction:
// 0,2,7,-6, zero,-3,3,2
//-5,-2,-1

console.log("")
console.log("Predict 3 begins")
var arr = [1, 3, 8, -5, 0, -2, 4, -1];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    } else if (arr[i] == 0) {
        arr[i] = "Zero";
    } else {
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);

console.log("")
console.log("Fine'")