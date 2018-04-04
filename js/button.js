var $root = $('html, body');
		$('a[href^="#"]').click(function () {
    		$root.animate({
        		scrollTop: $( $.attr(this, 'href') ).offset().top
    		}, 500);
	    	return false;
		});
/* Table Expansion*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
