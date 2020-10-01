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

//close menu upon clicking a nav>ul>li>a element and moving there:
$(document).ready(function() {
  $(".nav").find("a").on("click", closeMenu);
});
function closeMenu()
{
  $(".nav").removeClass("open");
  //console.log("time to remove OPEN class from menu");
}

/*Button to top by W3S */
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}