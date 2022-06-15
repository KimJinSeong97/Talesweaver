$(function(){
    $(".menu").mouseover(function(){
        $(".sub_menu").css("display", "block");
    });
    $(".menu").mouseout(function(){
        $(".sub_menu").css("display", "none");
    });
});

$(function(){
    $(".slide_btn1").click(function(){
        $(".slide_box1").css("display", "block");
        $(".slide_box2").css("display", "none");
        $(".slide_box3").css("display", "none");
    });

    $(".slide_btn2").click(function(){
        $(".slide_box1").css("display", "none");
        $(".slide_box2").css("display", "block");
        $(".slide_box3").css("display", "none");
    });

    $(".slide_btn3").click(function(){
        $(".slide_box1").css("display", "none");
        $(".slide_box2").css("display", "none");
        $(".slide_box3").css("display", "block");
    });
});