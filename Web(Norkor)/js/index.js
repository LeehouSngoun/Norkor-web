// window.onresize = function() { 
//     // if(window.width>575.98)
//     location.reload();
// };

$(document).ready(function(){
    if($(window).scrollTop()>0){
        // $('#sec-menu').css('position','fixed');
        $('#nav').css({
            "top":"0",
            "position":"fixed"
        });
    }
    else{
        // $('#sec-menu').css('position','sticky');
        $('#nav').css('position','sticky');
    }
    $(window).on("scroll",function(){
        //alert("Hello");
    if($(window).scrollTop()>100){
        // $('#nav').addClass("sticky");
        $('#nav').css({
            "top":"0",
            "position":"fixed"
        });
        // $('#nav').css('position','fixed');
    }
    else{
        $('#nav').css('position','sticky');
    }
// if($(window).scrollTop()>0){
//     // $('#sec-menu').css('position','fixed');
//     $('#nav').css({
//         "top":"0",
//         "position":"fixed"
//     });
// }
// else{
//     // $('#sec-menu').css('position','sticky');
//     $('#nav').css('position','sticky');
// }

    });
    // $("#nav #menu ul li a").hover(function(){
    //     $("home").css({"background-color":"transparent"});
    // });
    // if($(window).width())
    // location.reload();
    // if ($(window).width() < 767.98){
    var i=1;
    $("#burger-nav").on("click",function(){
        i++;
        if(i==2){
        $('#nav').css({
            "position":"absolute",
            "top":"50px",
            "background-color":"black",
            "height":"auto"
            // "overflow": "scroll"
        }).slideDown(500);
        // $('#nav').slideDown(2000);
        $('#nav #menu').css({
            "width":"100%",
            "float":"right",
            "text-align":"right"
        });
        $('#nav #menu ul').css({
            "display":"block",
            "float":"right",
            "width":"100%"
        });
        $('#nav #menu ul li').css({
            "display":"block",
            "float":"right",
            "clear":"right",
            "width":"100%",
            "padding":"0"
        });
        $('#nav #menu ul li a').css({
            "display":"block"
        });
        
        // $("li").click(function(){
        //     $(this).css("background-color", "yellow");
        // });
    }
    else {
        i=1;
        $('#nav').slideUp(500);
        $(this).removeAttr('style');
    }
        
    });

    // location.reload();
});

