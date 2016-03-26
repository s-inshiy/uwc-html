$(document).ready(function() {

	//Slick Carousel
	$('#js-slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	// Remove placeholder
	$("input,textarea").each(function() {
		
		$(this).data('holder',$(this).attr('placeholder'));

		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});

		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});

	});

	// Masonry
	$('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
	    // use outer width of grid-sizer for columnWidth
	    columnWidth: '.grid-sizer'
	  }
	})

	// Scroll Top
	$( ".b-footer__imgUp").click(function(){
		$('html, body').animate({scrollTop: 0}, 'slow');
	});

});



