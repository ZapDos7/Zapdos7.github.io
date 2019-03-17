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
    
    //section sticky
    /*$(document).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if ($(window).height() > scrollTop) {
          $navbar.removeClass("sticky");
        } else {
          $navbar.addClass("sticky");  
        }
    });*/

})(jQuery, undefined);

$(".menu").click(function(){
  
  $("#nav").toggleClass("open");
});
//....................change nav when while scrolling......................
function onScroll(event){
  var scrollPos = $(document).scrollTop();
//console.log('SCROLL '+(new Date).getTime());
  $('.navbar ul li a').removeClass("activation");
  $('.navbar a').each(function () {
    var $currLink = $(this);
    var $refElement = $($currLink.attr("href"));
    if (!$refElement.length) return;
    if ($refElement.position().top <= scrollPos && ($refElement.position().top + $refElement.height()) > scrollPos) {
      $currLink.addClass("activation");
    }
  });
}
$(document).on("scroll", onScroll);

/*
function openNav() {
  hamburger.classList.add("is-active");
  document.getElementById("popUpNav").style.display = "block";
}

function closeNav() {
  hamburger.classList.remove("is-active");
  document.getElementById("popUpNav").style.display = "none";
}

// Hamburger Menu Spin
var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', () => hamburger.classList.contains('is-active') ? closeNav() : openNav());

closeNav();
*/