// menu hover submenu on/off
$(function () {
    $(".menu>li").mouseover(function () {
        $(".sub_menu").stop().slideDown();
    }).mouseout(function () {
        $(".sub_menu").stop().slideUp();
    });
});

// auto slide
let i = 0;

function slide() {
    i++;

    if (i > 2) {
        i = 0;
    }
    $(".slide").eq(i).stop().show();
    $(".slide").eq(i - 1).stop().hide();
}

setInterval(slide, 5000);

// slide btn click next slide
$(function () {
    $(".slide_btn1").click(function () {
        $(".slide_box1").css("display", "block");
        $(".slide_box2").css("display", "none");
        $(".slide_box3").css("display", "none");
    });

    $(".slide_btn2").click(function () {
        $(".slide_box1").css("display", "none");
        $(".slide_box2").css("display", "block");
        $(".slide_box3").css("display", "none");
    });

    $(".slide_btn3").click(function () {
        $(".slide_box1").css("display", "none");
        $(".slide_box2").css("display", "none");
        $(".slide_box3").css("display", "block");
    });
});

// character click detail info
$(function () {
    $(".cha1_back").click(function () {
        $(".cha_info1").css("display", "block");
        $(".cha_info2").css("display", "none");
        $(".cha_info3").css("display", "none");
        $(".cha_info4").css("display", "none");
    });

    $(".cha2_back").click(function () {
        $(".cha_info1").css("display", "none");
        $(".cha_info2").css("display", "block");
        $(".cha_info3").css("display", "none");
        $(".cha_info4").css("display", "none");
    });

    $(".cha3_back").click(function () {
        $(".cha_info1").css("display", "none");
        $(".cha_info2").css("display", "none");
        $(".cha_info3").css("display", "block");
        $(".cha_info4").css("display", "none");
    });

    $(".cha4_back").click(function () {
        $(".cha_info1").css("display", "none");
        $(".cha_info2").css("display", "none");
        $(".cha_info3").css("display", "none");
        $(".cha_info4").css("display", "block");
    });
});

// skill icon click explain
$(function () {
    $(".cha_right .ability img:first-of-type").click(function () {
        $(".skill_text1").css("display", "block");
        $(".skill_text2").css("display", "none");
        $(".skill_text3").css("display", "none");
        $(".cha_right .ability img:first-of-type").css("opacity", 1);
        $(".cha_right .ability img:nth-of-type(2)").css("opacity", 0.5);
        $(".cha_right .ability img:nth-of-type(3)").css("opacity", 0.5);
    });

    $(".cha_right .ability img:nth-of-type(2)").click(function () {
        $(".skill_text2").css("display", "block");
        $(".skill_text1").css("display", "none");
        $(".skill_text3").css("display", "none");
        $(".cha_right .ability img:nth-of-type(2)").css("opacity", 1)
        $(".cha_right .ability img:first-of-type").css("opacity", 0.5);
        $(".cha_right .ability img:nth-of-type(3)").css("opacity", 0.5);
    });

    $(".cha_right .ability img:nth-of-type(3)").click(function () {
        $(".skill_text3").css("display", "block");
        $(".skill_text1").css("display", "none");
        $(".skill_text2").css("display", "none");
        $(".cha_right .ability img:nth-of-type(3)").css("opacity", 1)
        $(".cha_right .ability img:first-of-type").css("opacity", 0.5);
        $(".cha_right .ability img:nth-of-type(2)").css("opacity", 0.5);
    });
});

//worldview click event
$(function () {
    $(".thumbnail img:first").click(function () {
        $(this).css("opacity", 1).css("border", "2px solid #96c7e9");
        $(".thumbnail img:nth-of-type(2)").css("opacity", 0.5).css("border", "2px solid #bbb");
        $(".thumbnail img:nth-of-type(3)").css("opacity", 0.5).css("border", "2px solid #bbb");
        $(".worldview1").css("display", "block");
        $(".worldview2").css("display", "none");
        $(".worldview3").css("display", "none");
    });

    $(".thumbnail img:nth-of-type(2)").click(function () {
        $(this).css("opacity", 1).css("border", "2px solid #96c7e9");
        $(".thumbnail img:first").css("opacity", 0.5).css("border", "2px solid #bbb");
        $(".thumbnail img:nth-of-type(3)").css("opacity", 0.5).css("border", "2px solid #bbb");
        $(".worldview2").css("display", "block");
        $(".worldview1").css("display", "none");
        $(".worldview3").css("display", "none");
    });

    $(".thumbnail img:nth-of-type(3)").click(function () {
        $(this).css("opacity", 1).css("border", "2px solid #96c7e9");
        $(".thumbnail img:first").css("opacity", 0.5).css("border", "2px solid #bbb");
        $(".thumbnail img:nth-of-type(2)").css("opacity", 0.5).css("border", "2px solid #bbb");
        $(".worldview3").css("display", "block");
        $(".worldview1").css("display", "none");
        $(".worldview2").css("display", "none");
    });
});


