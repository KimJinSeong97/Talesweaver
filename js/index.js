$(function () {
    $(".menu>li").mouseover(function () {
        $(".sub_menu").stop().slideDown();
    }).mouseout(function () {
        $(".sub_menu").stop().slideUp();
    });
});

$(function () {
    $(".slide_btn1").click(function () {
        $(".slide_box1").css("display", "block");
        $(".slide_box2").css("display", "none");
        $(".slide_box3").css("display", "none");
        $(".slide_btn1").css("background-color", "white");
        $(".slide_btn2").css("background-color", "gray");
        $(".slide_btn3").css("background-color", "gray");
    });

    $(".slide_btn2").click(function () {
        $(".slide_box1").css("display", "none");
        $(".slide_box2").css("display", "block");
        $(".slide_box3").css("display", "none");
        $(".slide_btn2").css("background-color", "white");
        $(".slide_btn1").css("background-color", "gray");
        $(".slide_btn3").css("background-color", "gray");
    });

    $(".slide_btn3").click(function () {
        $(".slide_box1").css("display", "none");
        $(".slide_box2").css("display", "none");
        $(".slide_box3").css("display", "block");
        $(".slide_btn3").css("background-color", "white");
        $(".slide_btn1").css("background-color", "gray");
        $(".slide_btn2").css("background-color", "gray");
    });
});

