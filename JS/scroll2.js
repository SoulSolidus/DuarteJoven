$(document).ready(function(){
    var flag = false;
    var scroll;

    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        if(scroll > 50){
            $(".nav").css({"background-color": "red"});
        } else{
            $(".nav").css({"background-color": "transparent"});
        }
    });
});