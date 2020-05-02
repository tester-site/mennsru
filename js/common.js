var Common = {
	init: function() {;
        Common.menu();
        Common.main();
	},
    menu: function() {
        $('.nav_b > a').on('click',function(e){
			
			if ($('.nav_b a').next('div').length) {
				e.preventDefault();
				if(!$(this).hasClass('open')) {
					$('.nav_b a').removeClass('open').next('div').stop().slideUp();
					$(this).addClass('open').next('div').stop().slideDown();
				}else {
					$(this).removeClass('open').next('div').stop().slideUp();
				}
			}
		});
		
		$('.mob_btn').on('click',function(e){
			e.preventDefault();
			$(this).toggleClass('open').next('div').stop().slideToggle();
			
		});
		$(window).resize(function(){
			if($(window).width() > 750) {
				$('.mob_btn').removeClass('open').next('.wrapper').attr('style','')
			}
		})
    },
	main: function() {
        $('.tabs_top a').on('click',function(e){
			e.preventDefault();
			$('.tabs_top a').removeClass('active');
			$(this).addClass('active'); 
			$('.tabs_item').removeClass('active').filter(':eq('+$(this).index()+')').addClass('active'); 
		});
		
		$('.slider').owlCarousel({
			margin:0,
			items:2,
			dots: false,
			nav: true,
		})
    },
};

$(function() {
	Common.init();
});