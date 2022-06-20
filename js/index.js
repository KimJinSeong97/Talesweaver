// menu hover submenu on/off
$(function () {
    $(".menu>li").mouseover(function () {
        $(".sub_menu").stop().slideDown();
    }).mouseout(function () {
        $(".sub_menu").stop().slideUp();
    });
});

// slide btn click next slide
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

// character hover and click explain




// skill icon click explain
$(function () {
    $(".cha_right .ability img:first-of-type").click(function () {
        $(".skill_text1").css("display", "block");
        $(".skill_text2").css("display", "none");
        $(".skill_text3").css("display", "none");
        $(this).css("opacity", 1);
        $(".cha_right .ability img:nth-of-type(2)").css("opacity", 0.5);
        $(".cha_right .ability img:nth-of-type(3)").css("opacity", 0.5);
    });

    $(".cha_right .ability img:nth-of-type(2)").click(function () {
        $(".skill_text2").css("display", "block");
        $(".skill_text1").css("display", "none");
        $(".skill_text3").css("display", "none");
        $(this).css("opacity", 1)
        $(".cha_right .ability img:first-of-type").css("opacity", 0.5);
        $(".cha_right .ability img:nth-of-type(3)").css("opacity", 0.5);
    });

    $(".cha_right .ability img:nth-of-type(3)").click(function () {
        $(".skill_text3").css("display", "block");
        $(".skill_text1").css("display", "none");
        $(".skill_text2").css("display", "none");
        $(this).css("opacity", 1)
        $(".cha_right .ability img:first-of-type").css("opacity", 0.5);
        $(".cha_right .ability img:nth-of-type(2)").css("opacity", 0.5);
    });
});