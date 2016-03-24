$(document).ready(function() {
	//mixItUp
	$(function(){
		// Instantiate MixItUp:
		$('#container').mixItUp();
	});

	//Slick Carousel
	$('#js-slider').slick({
		//cssEase: 'ease',
		//fade: true,  // Cause trouble if used slidesToShow: more than one
		arrows: false,
		dots: true,
		infinite: true,
		//speed: 500,
		autoplay: true,
		//autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1
	});


	jQuery("input,textarea").each(function() {
		jQuery(this).data('holder',jQuery(this).attr('placeholder'));

		jQuery(this).focusin(function(){
			jQuery(this).attr('placeholder','');
		});

		jQuery(this).focusout(function(){
			jQuery(this).attr('placeholder',jQuery(this).data('holder'));
		});
	});
	
});

