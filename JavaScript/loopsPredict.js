    var num;
    var i;
    var j;

    console.log("JS File begins")
    for (var num = 0; num < 15; num++) {
        console.log(num);
    }
    console.log("Second JS File begins")
    for (var i = 1; i < 10; i += 2) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }

    console.log("Third JS File begins")
    for (var j = 1; j <= 15; j++) {
        if (j % 2 == 0) {
            j += 2;
        } else if (j % 3 == 0) {
            j++;
        }
        console.log(j);
    }
    console.log("All JS Files complete")

    //     Predictions:
    // 1st JS File:
    // 1 thru 14

    // 2nd JS file:
    // 3,9

    // 3rd JS file:
    // 1,4,5,8,10,11,14,16