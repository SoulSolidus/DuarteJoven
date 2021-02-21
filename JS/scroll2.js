$(document).ready(function(){
    var flag = false;
    var scroll;

    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        if(scroll > 150){
            $(".nav").css({"background-color": "#2A3D45", "transition": "0.6s ease"});
            $(".nav").css({"position": "sticky", "transition": "0.6s ease"});
        } else{
            $(".nav").css({"background-color": "transparent"});
            $('.nav').css({"position": "absolute"})
        }
    });
});