$(document).ready(function() {
    "use strict";

    // 1. Smooth Scrolling for all internal links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();

            // Offset calculation: 60px is the height of your fixed navbar
            // This prevents the header from covering your section titles
            var navHeight = $('.main-nav').outerHeight();

            $('html, body').stop().animate({
                scrollTop: target.offset().top - navHeight
            }, 800); // 800ms for the scroll speed

            // If on mobile, close the hamburger menu after clicking
            $("#nav-toggle").prop("checked", false);
        }
    });

    // 2. Hamburger Menu: Auto-close when a link is clicked
    // Since we use a CSS checkbox (#nav-toggle), we just need to uncheck it
    $(".nav-links a").on("click", function() {
        $("#nav-toggle").prop("checked", false);
    });

    // 3. Back to Top Button Logic
    var mybutton = document.getElementById("myBtn");

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };
});

// 4. Back to Top Function (Global)
function topFunction() {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 800);
}

$(window).on('scroll', function() {
    var scrollDistance = $(window).scrollTop();
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + scrollDistance;

    // A. Fix for the "Contact" (Bottom of page)
    // If the distance from the bottom is less than 10px, highlight Contact
    if ((scrollHeight - scrollPosition) / scrollHeight <= 0.01) {
        $('.nav-links a').removeClass('active');
        $('.nav-links a[href="#contact"]').addClass('active');
        return; // Exit function so it doesn't get overridden by section loop
    }

    // B. Fix for "About Me" and other sections
    $('section, .container-fluid').each(function() {
        var targetSection = $(this);
        // We use 100px as a buffer to account for the fixed nav height
        if (targetSection.position().top <= scrollDistance + 100) {
            var id = targetSection.attr('id');
            if (id) {
                $('.nav-links a').removeClass('active');
                $('.nav-links a[href="#' + id + '"]').addClass('active');
            }
        }
    });
});