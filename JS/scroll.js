$(window).scroll(function() {

    if ($(".main").offset.top > 15){

        $(".main").addClass(".cambiaFondo");

    }   else {

        $(".main").removeClass(".cambiaFondo")
    }
});