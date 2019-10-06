/*http://callmenick.com/post/expanding-search-bar-using-css-transitions*/
(function($) {
    "use strict";
    var $navbar = $(".nav"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    //scroll top 0 sticky
    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 0) {
          $navbar.addClass("sticky");
        } else {
          $navbar.removeClass("sticky");  
        }
    });
})(jQuery, undefined);


////hamburger open/close
$(document).ready(function() {
  $(".nav").click(function(){
    if ($(".nav").hasClass("open")) {
      $(".nav").removeClass("open");  
    }
    /*
    else if ($(".nav").hasClass("open")==false){ //toggleClass("open");
      $(".nav").addClass("open");
    }*/
    else { //toggleClass("open");
      $(".nav").addClass("open");  
    }
  })
});