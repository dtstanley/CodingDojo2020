$(document).ready(function() {
    alert('jQueryFunction.js is loading,yeah!');

    // $('p').hide();
    $('a').click(function() {
        Alert('you are now leaving the page!');
    })

    // .hide
    $('.header').click(function() {
            $('p').hide();
            // console.log("working");
        })
        //.show 
        // $('.header').click(function() {
    $('.main').click(function() {
            $('p').show();
        })
        // $(document.body).click(function() {
        //     if ($(".header").first().is(":hidden")) {
        //         $(".header").slideDown("slow");
        //     } else {
        //         $(".header").hide();
        //     }
        // });
        //hover
        // $('h3').hover(function() {
        //     $('h1').text('Please, where your mask when in public!');
        // }, );

    // $('h3').hover(function() {
    //     $('h1').text('Go Zoom your family, they miss you!');
    // }, function() { alert("now invoking the second function!") });

    $('.toggleMe').click(function() {
        $('h1.toggleMe').toggle("slow", function() {
            // Animation complete.
        });
    });
    $('.slideMe').click(function() {
        console.log("testing slidetoggle header");
        console.log($('h1.slideMe'));
        $('h1.slideMe').slideUp("slow", function() {
            // Animation complete.
            console.log("completed slideUp")
        });
        // console.log("slideDown code here")
    });
    $('.stmnt2').click(function() {
        console.log("testing slidetoggle phrase");
        //      console.log($('h1.slideMe'));
        $('h1.slideMe').slideDown("slow", function() {
            // Animation complete.
            console.log("completed slidedown")
        });

    });
    $('.input2').click(function() {
        console.log("testing slidetoggle button");
        //      console.log($('h1.slideMe'));
        //  $('input.input2').slideToggle("slow", 
        $('h1.slideMe').slideToggle("slow",
            function() {
                // Animation complete.
                console.log("completed slidetoggle button")
            });
    });
    $('.input1').click(function() {
        console.log("testing addClass button");
        $('p.stmnt1').addClass("selected");
        console.log("finished addClass button");
    });
    $('.input3').click(function() {
        $('.stmnt3').append('<h4>.append adds HTML! <</h4>')
    });
    $('.stmnt3').click(function() {
        $('p.assignment').text()
    });
    $('.h1Apend').click(function() {
        console.log("testing html & text code");
        var htmlString = $(this).html();
        $(this).text(htmlString);
        console.log("htmlString = ", htmlString)
        console.log("completed html & text code")
    });

})