$(document).ready(function() {
    alert('jQueryFunction.js is loading,yeah!');

    $('a').click(function() {
        Alert('you are now leaving the page!');
    })

    // .hide
    $('.header').click(function() {
        $('p').hide();
    })
    $('.main').click(function() {
        $('p').show();
    })

    $('.toggleMe').click(function() {
        $('h1.toggleMe').toggle("slow", function() {});
    });
    $('.slideMe').click(function() {
        console.log("testing slidetoggle header");
        console.log($('h1.slideMe'));
        $('h1.slideMe').slideUp("slow", function() {
            console.log("completed slideUp")
        });
    });
    $('.stmnt2').click(function() {
        console.log("testing slidetoggle phrase");
        $('h1.slideMe').slideDown("slow", function() {
            console.log("completed slidedown")
        });

    });
    $('.input2').click(function() {
        console.log("testing slidetoggle button");
        $('h1.slideMe').slideToggle("slow",
            function() {
                console.log("completed slidetoggle button")
            });
    });
    $('.input1').click(function() {
        $('p.stmnt1').addClass("selected");
    });
    $('.input3').click(function() {
        $('.stmnt3').append('<h4>.append adds HTML! <</h4>')
    });
    $('.stmnt3').click(function() {
        $('p.assignment').text()
    });
    $('.h1Apend').click(function() {
        var htmlString = $(this).html();
        $(this).text(htmlString);
        console.log("htmlString = ", htmlString)
    });

})