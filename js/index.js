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


//hamburger open/close
$(document).ready(function() {
  $(".nav").click(function(){
    //toggleClass("open"); //doesnt work
    if ($(".nav").hasClass("open")) {
      $(".nav").removeClass("open");  
    }
    else { 
      $(".nav").addClass("open");  
    }
  })
});

//close menu upon clicking a li element and moving there:
$(document).ready(function() {
  $(".nav").find("a").on("click", closeMenu);
});

function closeMenu()
{
  $(".nav").removeClass("open");
  console.log("time to remove OPEN class from menu");
}
