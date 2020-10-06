//Predicted Output: No ouput, because the function is never invoked with a parameter.


function highFive(num) {
    for (var i = 0; i < num; i++) {
        if (i == 5) {
            console.log("High Five!");
        } else {
            console.log(i);
        }
    }
}