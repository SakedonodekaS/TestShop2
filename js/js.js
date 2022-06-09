src="https://code.jquery.com/jquery-3.6.0.js"
    $(document).ready(function(){
    $('.slider').bxSlider({
        auto:true,
        speed:300,
        pager: null,
        controls: null,
    });
    });
$(function () {
    $(".gallery").click(function(e){
    $(".C_1 .C_banner").css("display","block").siblings().css(
        "display","none"
    );
 

    })

    $(".notice").click(function(e){
        $(".exwrap").css("display","block").siblings().css(
            "display","none"
        );
     
    
        })
    
   

   $(".tabmenu li").click(function(e){
      e.preventDefault();
     if(!$(this).hasClass("active")){
        $(this).addClass("active").siblings().removeClass("active");
      }
    
   })


})