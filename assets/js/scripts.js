$(document).ready(function() {
	//mixItUp
	// $(function(){
	// 	// Instantiate MixItUp:
	// 	$('#container').mixItUp();
	// });

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

	// external js: masonry.pkgd.js, imagesloaded.pkgd.js

	// var grid = document.querySelector('.grid');
	// var msnry;

	// imagesLoaded( grid, function() {
	//   // init Isotope after all images have loaded
	//   msnry = new Masonry( grid, {
	//   	itemSelector: '.grid-item',
	//   	columnWidth: '.grid-sizer',
	//   	fitWidth: true
	//   	//percentPosition: true,
	//   	// originLeft: false,
	//   	//originTop: false
	//   });
	// });

	$('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
	    // use outer width of grid-sizer for columnWidth
	    columnWidth: '.grid-sizer'
	  }
	})

});



