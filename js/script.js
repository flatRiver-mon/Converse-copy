$(document).ready(function(){

    $(".top-bar-wrap .left > ul > li").click(function(){
        let indexNum = $(this).index();

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".nav-2-depth-wrap").removeClass("active");
            $(".nav-2-depth-wrap .left > .nav").eq(indexNum).removeClass("active");
        }else if($(this).hasClass("active") == false){
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            $(".nav-2-depth-wrap").addClass("active");
            $(".nav-2-depth-wrap .left > .nav").eq(indexNum).addClass("active");
            $(".nav-2-depth-wrap .left > .nav").eq(indexNum).siblings().removeClass("active");
        }
    })

    $(".nav-2-depth-wrap .right").click(function(){
        $(".top-bar-wrap .left > ul > li").removeClass("active");
        $(".nav-2-depth-wrap").removeClass("active");
        $(".nav-2-depth-wrap .left > .nav").removeClass("active");
    })

    $(".mo-top-bar-wrap > .mo-menu-btn").click(function(){
        $(".mo-nav-wrap").addClass("active");
        $("html").css({
            overflow : "hidden"
        });
    })

    $(".mo-nav-box .close").click(function(){
        $(".mo-nav-wrap").removeClass("active");
        $("html").css({
            overflow : "auto"
        });
    })
})