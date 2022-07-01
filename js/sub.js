$(function () {
    $(".tab1").click(function () {
        $(".overview").fadeIn();
        $(".system").fadeOut();
        $(".review").fadeOut();
        $("article").css({ height: 1450 });
        $(this).css("border-bottom", "3px solid #96c7e9");
        $(".tab2").css("border", "none");
        $(".tab3").css("border", "none");
    });
    $(".tab2").click(function () {
        $(".system").fadeIn();
        $(".overview").hide();
        $(".review").hide();
        $("article").css({ height: 700 });
        $(this).css("border-bottom", "3px solid #96c7e9");
        $(".tab1").css("border", "none");
        $(".tab3").css("border", "none");
    });
    $(".tab3").click(function () {
        $(".review").fadeIn();
        $(".overview").hide();
        $(".system").hide();
        $("article").css({ height: 950 });
        $(this).css("border-bottom", "3px solid #96c7e9");
        $(".tab1").css("border", "none");
        $(".tab2").css("border", "none");
    });
});