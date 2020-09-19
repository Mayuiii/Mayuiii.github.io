//一键返回顶部
$(document).ready(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() > 140){
            $("#back-top").fadeIn(500);
        }else {
            $("#back-top").fadeOut(500);
        }
    });
    $("#back-top","").click(function () {
        $("body,html").animate({
            scrollTop:0
        },700);
    });
});
