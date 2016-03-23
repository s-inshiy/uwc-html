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
		//autoplay: true,
		//autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1
	});
});

