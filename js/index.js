// resize
function detectMediaSize() {
    if (window.matchMedia('(min-width: 0px) and (max-width: 767px)').matches) {
    } else if (window.matchMedia('(min-width: 768px) and (max-width: 1199px)').matches) {
    } else {
    }
};

window.addEventListener('resize', detectMediaSize, false);

detectMediaSize();

// menu hover submenu on/off
if (window.matchMedia('(min-width: 0px) and (max-width: 767px)').matches) {
    $(function () {
        $("#mobile_menu").click(function () {
            $(".menu").slideToggle();
        });
        $(".menu>li:first-child").click(function () {
            $(".menu>li:first-child .sub_menu").stop().slideToggle();
            $(".menu>li:nth-of-type(2) .sub_menu").stop().hide();
            $(".menu>li:nth-of-type(3) .sub_menu").stop().hide();
            $(".menu>li:nth-of-type(4) .sub_menu").stop().hide();
            $(".menu>li:nth-of-type(5) .sub_menu").stop().hide();
        });

        $(".menu>li:nth-of-type(2)").click(function () {
            $(".menu>li:nth-of-type(2) .sub_menu").stop().slideToggle();
            $(".menu>li:nth-of-type(1) .sub_menu").stop().hide();
            $(".menu>li:nth-of-type(3) .sub_menu").stop().hide();
            $(".menu>li:nth-of-type(4) .sub_menu").stop().hide();
            $(".menu>li:nth-of-type(5) .sub_menu").stop().hide();
        });

        $(".menu>li:nth-of-type(3)").click(function () {
            $(".menu>li:nth-of-type(3) .sub_menu").stop().slideToggle();
            $(".menu>li:nth-of-type(1) .sub_menu").stop().hide();
            $(".menu>li:nth-of-type(2) .sub_menu").stop().hide();
            $(".menu>li:nth-of-type(4) .sub_menu").stop().hide();
            $(".menu>li:nth-of-type(5) .sub_menu").stop().hide();
        });

        $(".menu>li:nth-of-type(4)").click(function () {
            $(".menu>li:nth-of-type(4) .sub_menu").stop().slideToggle();
            $(".menu>li:nth-of-type(1) .sub_menu").stop().hide();
            $(".menu>li:nth-of-type(2) .sub_menu").stop().hide();
            $(".menu>li:nth-of-type(3) .sub_menu").stop().hide();
            $(".menu>li:nth-of-type(5) .sub_menu").stop().hide();
        });

        $(".menu>li:nth-of-type(5)").click(function () {
            $(".menu>li:nth-of-type(5) .sub_menu").stop().slideToggle();
            $(".menu>li:nth-of-type(1) .sub_menu").stop().hide();
            $(".menu>li:nth-of-type(2) .sub_menu").stop().hide();
            $(".menu>li:nth-of-type(3) .sub_menu").stop().hide();
            $(".menu>li:nth-of-type(4) .sub_menu").stop().hide();
        });
    });
} else {
    $(function () {
        $(".menu>li").mouseover(function () {
            $(".sub_menu").stop().slideDown(250);
        }).mouseout(function () {
            $(".sub_menu").stop().slideUp(250);
        });
    });
};

$(window).resize(function () {
    if (window.innerWidth < 768) {
        $(".menu").css("display", "none");
    } else {
        $(".menu").css("display", "flex");
    }
});

// menu hover color, background-color change
$(function () {
    $(".menu .main_menu").mouseover(function () {
        $(this).children().css("color", "#ffd02c");
    }).mouseout(function () {
        $(this).children().css("color", "#99a4c6");
    });
});

$(function () {
    $(".menu .main_menu").mouseover(function () {
        $(this).children(".sub_menu").css("background-color", "#191930");
    }).mouseout(function () {
        $(this).children(".sub_menu").css("background-color", "#000");
    });
});

$(function () {
    $(".sub_menu li").mouseover(function () {
        $(this).children('a').css("color", "#b579ff");
    }).mouseout(function () {
        $(this).children('a').css("color", "#99a4c6");
    });
});

// auto slide
let i = 0;

function slide() {
    i++;

    if (i > 2) {
        i = 0;
    }

    $(".slide").eq(i).stop().fadeIn()
    $(".slide").eq(i - 1).stop().fadeOut();
}

setInterval(slide, 5000);

// slide btn click slide fadein/out
$(function () {
    $(".slide_btn1").click(function () {
        $(".slide_box1").stop().fadeIn();
        $(".slide_box2, .slide_box3").stop().fadeOut();
    });

    $(".slide_btn2").click(function () {
        $(".slide_box2").stop().fadeIn();
        $(".slide_box3, .slide_box1").stop().fadeOut();
    });

    $(".slide_btn3").click(function () {
        $(".slide_box3").stop().fadeIn();
        $(".slide_box1, .slide_box2").stop().fadeOut();
    });
});

// character click detail info
$(function () {
    $(".cha1_back").click(function () {
        $(".cha_info1").fadeIn();
        $(".cha_info2, .cha_info3, .cha_info4").hide();
    });

    $(".cha2_back").click(function () {
        $(".cha_info2").fadeIn();
        $(".cha_info1, .cha_info3, .cha_info4").hide();
    });

    $(".cha3_back").click(function () {
        $(".cha_info3").fadeIn();
        $(".cha_info1, .cha_info2, .cha_info4").hide();
    });

    $(".cha4_back").click(function () {
        $(".cha_info4").fadeIn();
        $(".cha_info1, .cha_info2, .cha_info3").hide();
    });
});

// skill icon click explain
$(function () {
    $(".cha_right .ability img:first-of-type").click(function () {
        $(".skill_text1").show();
        $(".skill_text2, .skill_text3").hide();
        $(".cha_right .ability img:first-of-type").css("opacity", 1);
        $(".cha_right .ability img:nth-of-type(2), .cha_right .ability img:nth-of-type(3)").css("opacity", 0.5);
    });

    $(".cha_right .ability img:nth-of-type(2)").click(function () {
        $(".skill_text2").show();
        $(".skill_text1, .skill_text3").hide();
        $(".cha_right .ability img:nth-of-type(2)").css("opacity", 1)
        $(".cha_right .ability img:first-of-type, .cha_right .ability img:nth-of-type(3)").css("opacity", 0.5);
    });

    $(".cha_right .ability img:nth-of-type(3)").click(function () {
        $(".skill_text3").show();
        $(".skill_text1, .skill_text2").hide();
        $(".cha_right .ability img:nth-of-type(3)").css("opacity", 1)
        $(".cha_right .ability img:first-of-type, .cha_right .ability img:nth-of-type(2)").css("opacity", 0.5);
    });
});

//worldview click event
$(function () {
    $(".thumbnail img:first, .thumb_text>h4:first").click(function () {
        $(".thumbnail img:first").css("opacity", 1).css("border", "2px solid #96c7e9");
        $(".thumbnail img:nth-of-type(2), .thumbnail img:nth-of-type(3)").css("opacity", 0.5).css("border", "2px solid #bbb");
        $(".worldview1").fadeIn();
        $(".worldview2, .worldview3").hide();
    });

    $(".thumbnail img:nth-of-type(2), .thumb_text>h4:nth-of-type(2)").click(function () {
        $(".thumbnail img:nth-of-type(2)").css("opacity", 1).css("border", "2px solid #96c7e9");
        $(".thumbnail img:first, .thumbnail img:nth-of-type(3)").css("opacity", 0.5).css("border", "2px solid #bbb");
        $(".worldview2").fadeIn();
        $(".worldview1, .worldview3").hide();
    });

    $(".thumbnail img:nth-of-type(3), .thumb_text>h4:nth-of-type(3)").click(function () {
        $(".thumbnail img:nth-of-type(3)").css("opacity", 1).css("border", "2px solid #96c7e9");
        $(".thumbnail img:first, .thumbnail img:nth-of-type(2)").css("opacity", 0.5).css("border", "2px solid #bbb");
        $(".worldview3").fadeIn();
        $(".worldview1, .worldview2").hide();
    });
});