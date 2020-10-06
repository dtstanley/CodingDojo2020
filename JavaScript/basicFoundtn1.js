//1. Write a function that returns an array with all the numbers from 1 to 255.
var num;
var getArray = [];
var resultArray = [];

function getAll(num) {
    for (var i = 0; i < num; i++) {
        getArray[i] = i + 1;
    }
    return getArray;
}
resultArray = getAll(255);
console.log("1. The resulting array is: " + resultArray);
console.log("");

//2. Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
var num = 0;
var sum = 0;
var result = 0;
var value = 1000;

function sumEven(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            sum = sum + i;
        }
    }
    return sum;
}
result = sumEven(value);
console.log("2. The sum of even numbers from 1 to " + value + " = " + result);
console.log("");

// 3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
var num = 0;
var sum = 0;
var result = 0;
var value = 5000;

function sumOdd(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 2 != 0) {
            sum = sum + i;
        }
    }
    return sum;
}
result = sumOdd(value);
console.log("3. The sum of odd numbers from 1 to " + value + " = " + result);
console.log("");

//4. Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
var num = [];
var sum = 0;
var result = 0;
var getArray = [];
var testArr = [-5, 2, 5, 12];

function iterateArray(num) {
    for (var i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum;
}

result = iterateArray(testArr);
console.log("4. The sum of all the values within the array is " + result);
console.log("");

//5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
var maximum = 0;
var testArr = [-3, 7, 5, 7];
var num = [];

function maxNum(num) {
    maximum = Math.max.apply(null, num);
    return maximum;
}

result = maxNum(testArr);
console.log("5. The max number in the array is " + result);
console.log("");

// //6. Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
var num = [];
var sum = 0;
var ave = 0
var result = 0;
var getArray = [];
var testArr = [1, 3, 5, 7, 20];

function aveArray(num) {
    for (var i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }

    ave = sum / num.length;
    return ave;
}
result = aveArray(testArr);
console.log("6. The average of the numbers in the array is " + result);
console.log("");

//7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
var num = 0;
var sum = 0;
var j = 0;
var result = 0;
var value = 50;
var oddArray = [];

function againOdd(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 2 != 0) {
            oddArray.push(i);
        }
    }
    return oddArray;
}
result = againOdd(value);
console.log("7. Here is an array of all the odd numbers between 1 and " + value + " = [" + result + "]");
console.log("");

//8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
var num = [];
var sum = 0;
var ave = 0
var j = 0;
var result = 0;
var getArray = [];
var testArr = [1, 3, 5, 7, 20];
var compareValue = 3;

function greaterArray(num) {
    for (var i = 0; i <= num.length; i++) {
        if (num[i] > compareValue) {
            getArray.push(num[i]);
        }
    }
    return getArray;
}
result = greaterArray(testArr);
console.log("8. Here is an array (of the numbers from the given array) greater than " + compareValue + " = [" + result + "]");
console.log("");

// 9. Squares - Given an array with multiple values, write a
// function that replaces each value in the array with the value squared by itself.(e.g.[1, 5, 10, -2] will become[1, 25, 100, 4])
var num = [];
var sum = 0;
var ave = 0
var j = 0;
var result = 0;
var getArray = [];
var testArr = [1, 5, 10, -2];

function squareArray(num) {
    // Nothing to do when array size is 1
    if (num.length <= 1) return;
    else {
        for (var i = 0; i < num.length; i++) {
            getArray[i] = Math.pow((num[i]), 2);
        }
        return getArray;
    }
}
result = squareArray(testArr);
console.log("9. Here is the result of a function that replaces each value in the original array with the value squared by itself: " + "[" + result + "]");
console.log("");

// 10. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
var num = [];
var sum = 0;
var ave = 0
var j = 0;
var result = 0;
var getArray = [];
var testArr = [1, 5, 10, -2];

function noNegArray(num) {
    for (var i = 0; i < num.length; i++) {
        if (num[i] < 0) {
            num[i] = 0;
        }
    }
    return num;
}
result = noNegArray(testArr);
console.log("10. These are the results of a function that reads an array with negative number(s) and replaces the negative number(s) with zero so when it is done the array contains no negative values.: " + "[" + result + "]");
console.log("");

// 11. Max / Min / Avg - Given an array with multiple values, write a
// function that returns a new array that only contains the maximum, minimum, and average values of the original array.(e.g.[1, 5, 10, -2] will return [10, -2, 3.5])
var num = [];
var sum = 0;
var ave = 0;
var maximum = 0;
var minimum = 0;
var j = 0;
var result = 0;
var getArray = [];
var finResult = [];
var testArr = [1, 5, 10, -2];

//Note: If I was assured you would not run #11 alone, I could remove this function due #5 and get the same result.
function maxNum(num) {
    maximum = Math.max.apply(null, num);
    return maximum;
}

function minNum(num) {
    minimum = Math.min.apply(null, num);
    return minimum;
}

//Note: If I was assured you would not run #11 alone, I could remove this function due #6 and get the same result.
function aveArray(num) {
    for (var i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }

    ave = sum / num.length;
    return ave;
}

function multipleArray(testArr) {
    result = maxNum(testArr);
    getArray.push(result);
    result = minNum(testArr);
    getArray.push(result);
    result = aveArray(testArr);
    getArray.push(result);
    return getArray
}

finResult = multipleArray(testArr);
console.log("11. Here is the result of a function that returns a new array that only contains the maximum, minimum, and average values of the original array: " + "[" + finResult + "]");
console.log("");

// 12. Swap Values - Write a
// function that will swap the first and last values of any given array.The
// default minimum length of the array is 2.(e.g.[1, 5, 10, -2] will become[-2, 5, 10, 1]).
var num = [];
var sum = 0;
var arra = 0;
var arra = [];
var testArr = [1, 5, 10, -2];

function swap(arra) {
    if (arra.length <= 2) {
        return
    } else {
        [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
        return arra;
    }
}
console.log("12. Here is the result of a function that will swap the first and last values of any given array with more than 2 parameters: ");
console.log(swap(testArr));
console.log("");

// 13. Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
var num = [];
var sum = 0;
var ave = 0
var j = 0;
var result = 0;
var getArray = [];
var testArr = [-1, -3, 2];

function noDojoArray(num) {
    for (var i = 0; i < num.length; i++) {
        if (num[i] < 0) {
            num[i] = 'Dojo';
        }
    }
    return num;
}
result = noDojoArray(testArr);
console.log("13. These are the results of a function that reads an array with negative number(s) and replaces the negative number(s) with 'Dojo' so when it is done the array contains no negative values.: " + "[" + result + "]");
console.log("");