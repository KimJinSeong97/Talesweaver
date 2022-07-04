// tab click
$(function () {
    $(".tab1").click(function () {
        $(".overview").show();
        $(".system").hide();
        $(".review").hide();
        $("article").css({ height: 1450 });
        $(this).css("border-bottom", "3px solid #96c7e9");
        $(".tab2").css("border", "none");
        $(".tab3").css("border", "none");
    });
    $(".tab2").click(function () {
        $(".system").css("display", "flex");
        $(".overview").hide();
        $(".review").hide();
        $("article").css({ height: 700 });
        $(this).css("border-bottom", "3px solid #96c7e9");
        $(".tab1").css("border", "none");
        $(".tab3").css("border", "none");
    });
    $(".tab3").click(function () {
        $(".review").css("display", "flex");
        $(".overview").hide();
        $(".system").hide();
        $("article").css({ height: 950 });
        $(this).css("border-bottom", "3px solid #96c7e9");
        $(".tab1").css("border", "none");
        $(".tab2").css("border", "none");
    });
});

// screenshot slide
$(function () {
    $("#prev").click(function () {
        $(".shot img:last").prependTo(".shot");
        $(".shot").css({ marginLeft: "-35%" });
        $(".shot").stop().animate({ marginLeft: 0 }, 500);
    });

    $("#next").click(function () {
        $(".shot").stop().animate({ marginLeft: "-35%" }, 500, function () {
            $(".shot img:first").appendTo(".shot");
            $(".shot").css({ marginLeft: 0 });
        })
    });
});

// screenshot zoom 
$(function () {
    $(".shot1").click(function () {
        $(".ss1").show();
        $(".exit").show();
    });
    $(".shot2").click(function () {
        $(".ss2").show();
        $(".exit").show();
    });
    $(".shot3").click(function () {
        $(".ss3").show();
        $(".exit").show();
    });
    $(".shot4").click(function () {
        $(".ss4").show();
        $(".exit").show();
    });
});

$(function () {
    $(".exit").click(function () {
        $(".ss1, .ss2, .ss3 , .ss4").hide();
        $(this).hide();
    });
});