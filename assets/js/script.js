//Imports 
// @codekit-prepend "jquery.js"
// @codekit-prepend "bootstrap.js"
// @codekit-prepend "modernizr.js"

jQuery(function() {
	jQuery("nav li a.scrollable").click(function(event) {
		event.preventDefault(); 
		if ( !jQuery(this).hasClass("active") ) {
			
			jQuery("body").removeClass("menu"); 
			jQuery("nav").removeClass("open"); 
			jQuery("nav li a").removeClass("active");
			jQuery(this).addClass("active"); 
			
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = jQuery(this.hash);
				target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					jQuery('html,body').animate({
						scrollTop: target.offset().top
					}, 400);
					return false;
				}
			}
			
		} 
	}); 
}); 

jQuery(function() {
	jQuery("#menutrigger").click(function(event) {
		event.preventDefault(); 
		jQuery("nav").toggleClass("open");
		jQuery("body").toggleClass("menu");
	}); 	
}); 