$(window).resize(function () {
    if (window.innerWidth < 768) {
        $(".menu").css("display", "none");
    } else {
        $(".menu").css("display", "flex");
    }
});

// mobile size
if (window.matchMedia('(min-width: 0px) and (max-width: 767px)').matches) {
    $(function () {
        // 햄버거 버튼 누르면 메뉴 슬라이드 토글
        $("#mobile_menu").click(function () {
            $(".menu").slideToggle();
        });
        $(".menu>li:first-child").click(function () {
            $(".menu>li:first-child .sub_menu").stop().slideToggle();
            $(".menu>li:nth-of-type(2) .sub_menu, .menu>li:nth-of-type(3) .sub_menu, .menu>li:nth-of-type(4) .sub_menu, .menu>li:nth-of-type(5) .sub_menu").stop().hide();
        });

        $(".menu>li:nth-of-type(2)").click(function () {
            $(".menu>li:nth-of-type(2) .sub_menu").stop().slideToggle();
            $(".menu>li:nth-of-type(1) .sub_menu, .menu>li:nth-of-type(3) .sub_menu, .menu>li:nth-of-type(4) .sub_menu, .menu>li:nth-of-type(5) .sub_menu").stop().hide();
        });

        $(".menu>li:nth-of-type(3)").click(function () {
            $(".menu>li:nth-of-type(3) .sub_menu").stop().slideToggle();
            $(".menu>li:nth-of-type(1) .sub_menu, .menu>li:nth-of-type(2) .sub_menu, .menu>li:nth-of-type(4) .sub_menu, .menu>li:nth-of-type(5) .sub_menu").stop().hide();
        });

        $(".menu>li:nth-of-type(4)").click(function () {
            $(".menu>li:nth-of-type(4) .sub_menu").stop().slideToggle();
            $(".menu>li:nth-of-type(1) .sub_menu, .menu>li:nth-of-type(2) .sub_menu, .menu>li:nth-of-type(3) .sub_menu, .menu>li:nth-of-type(5) .sub_menu").stop().hide();
        });

        $(".menu>li:nth-of-type(5)").click(function () {
            $(".menu>li:nth-of-type(5) .sub_menu").stop().slideToggle();
            $(".menu>li:nth-of-type(1) .sub_menu, .menu>li:nth-of-type(2) .sub_menu, .menu>li:nth-of-type(3) .sub_menu, .menu>li:nth-of-type(4) .sub_menu").stop().hide();
        });

        // 메인 메뉴 클릭시 컬러 변경
        $(".menu>li").click(function () {
            $(this).children("a").addClass("click");
            $(this).siblings().children("a").removeClass("click");
            $(this).children(".sub_menu").css("background-color", "#191930");
        });
    });
} else { //table, pc size
    // 메인 메뉴 마우스 오버, 아웃하면 슬라이드 업, 다운
    $(function () {
        $(".menu>li").mouseover(function () {
            $(".sub_menu").stop().slideDown(250);
        }).mouseout(function () {
            $(".sub_menu").stop().slideUp(250);
        });

        // 메인 메뉴 마우스 오버, 아웃하면 컬러, 백그라운드 색 변경
        $(".menu>li").mouseover(function () {
            $(this).children().css("color", "#ffd02c");
        }).mouseout(function () {
            $(this).children().css("color", "#99a4c6");
        });

        $(".menu>li").mouseover(function () {
            $(this).children(".sub_menu").css("background-color", "#191930");
        }).mouseout(function () {
            $(this).children(".sub_menu").css("background-color", "#000");
        });

        $(".sub_menu li").mouseover(function () {
            $(this).children('a').css("color", "#b579ff");
        }).mouseout(function () {
            $(this).children('a').css("color", "#99a4c6");
        });
    });
};

// 5초마다 자동 슬라이드
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

// 슬라이드 버튼 클릭시 다음 슬라이드 변경
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

// 캐릭터 박스 클릭시 해당 캐릭터 정보 표시
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

// 스킬 아이콘 클릭시 정보 표시
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

//세계관 썸네일 클릭시 정보 표시
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