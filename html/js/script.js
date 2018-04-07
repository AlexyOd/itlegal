$('.m-menu-bt').click(function(event) {
	/* Act on the event */
	$(this).toggleClass('active');
	$('.list').toggleClass('active');
	
});
 
$(window).resize(function(event) {
	/* Act on the event */
	/*$('.js-height').height('auto');*/
	$('.js-height').height('auto');
	if($(window).width() >= 750 && $(window).width() <= 1200 ){
		$('.js-height').height(	$('.js-height').max());
	}
	if($(window).width() >= 1200)
	{$('.js-height').height(	Math.round($('.js-height-img').height() /3)-30);}
	if($(window).width() <= 750){
		$('#main').css({
			paddingTop: $('.h-menu').innerHeight()+'px',
			
		});
	}
	else{
		$('#main').css({
			paddingTop:'0px',
			
		});
	}
}); 
window.onload = function(){
	var ap = true,speed = 3000;
	$('.slick.top').slick({
		autoplay:ap,
		autoplaySpeed: speed,
		dots:true,
		prevArrow:'<button type="button" class="slick-prev s-btn"><i class="icon-left-open"></i></button>',
		nextArrow:'<button type="button" class="slick-next s-btn"><i class="icon-right-open"></i></button>',
		responsive: [
			{
				breakpoint:768,
				settings:{
					arrows:false,
				}
			}
		]
	})
	$('.slick.sl-2').slick({
		autoplay:ap,
		autoplaySpeed: speed,
		dots:true,
		appendArrows:$('.sl-2.btn-holder'),
		prevArrow:'<button type="button" class="slick-prev s-btn"><i class="icon-left-open"></i></button>',
		nextArrow:'<button type="button" class="slick-next s-btn"><i class="icon-right-open"></i></button>',
		responsive: [
			{
				breakpoint:768,
				settings:{
					arrows:false,
				}
			}
		]
	});
	$('.slick.portfol-s').slick({
		autoplay:ap,
		autoplaySpeed: speed,
		dots:true,
		appendArrows:$('.portfol-s.btn-holder'),
		prevArrow:'<button type="button" class="slick-prev s-btn"><i class="icon-left-open"></i></button>',
		nextArrow:'<button type="button" class="slick-next s-btn"><i class="icon-right-open"></i></button>',
		responsive: [
			{
				breakpoint:768,
				settings:{
					arrows:false,
				}
			}
		]
	})
	$('.slick.rec').slick({
		autoplay:ap,
		autoplaySpeed: 5000,
		dots:true,
		appendArrows:$('.rec.btn-holder'),
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow:'<button type="button" class="slick-prev s-btn"><i class="icon-left-open"></i></button>',
		nextArrow:'<button type="button" class="slick-next s-btn"><i class="icon-right-open"></i></button>',
		responsive: [
			{
				breakpoint:992,
				settings:{
					slidesToShow: 2,
				},
			},
			{
				breakpoint:768,
				settings:{
					arrows:false,
					slidesToShow: 1,
				}
			}
		]
	})
	$('.slick.clients').slick({
		autoplay:ap,
		autoplaySpeed: 5000,
		dots:false,
		appendArrows:$('.clients.btn-holder'),
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow:'<button type="button" class="slick-prev s-btn"><i class="icon-left-open"></i></button>',
		nextArrow:'<button type="button" class="slick-next s-btn"><i class="icon-right-open"></i></button>',
		responsive: [
			{
				breakpoint:992,
				settings:{
					slidesToShow: 2,
				},
			},
			{
				breakpoint:768,
				settings:{
					arrows:false,
					slidesToShow: 1,
				}
			}
		]
	})
	$('.slick.clie-logo').slick({
		autoplay:ap,
		autoplaySpeed: 5000,
		dots:false,
		slidesToShow: 6,
		slidesToScroll: 4,
		arrows: false,
		responsive: [
			{
				breakpoint:992,
				settings:{
					slidesToShow: 4,
				},
			},
			{
				breakpoint:768,
				settings:{
					arrows:false,
					slidesToShow: 2,
				}
			}
		]
	})
	$(window).resize();
	$(window).scroll();
}
$('ul.m-menu a').click(function(event) {
	/* Act on the event */
	event.preventDefault();
	$(this).goto();
});
$('.goto').click(function(event) {
	/* Act on the event */
	$(this).goto();	
}); 
$('.icn-ell a').click(function(event) {
	/* Act on the event */
	event.preventDefault();
	$(this).parent().find('.hidden-s').toggleClass('active');
	$(this).toggleClass('active');
});

$.prototype.max = function(first_argument) {
	var max=0;
	$(this).each(function(index, el) {
		
		if($(this).height() > max){
			max = $(this).height();
		}
	});
	return max;
};
$('.pop_open,.pop_up .close').click(function(event) {
	/* Act on the event */
	$('.pop_up').toggleClass('active');
});

$.prototype.goto = function(first_argument) {
	var el = $(this.attr('href'));
	$('body,html').animate({
		scrollTop: ($(el).offset().top-$('.h-menu').innerHeight())}, 1500);
};
$(window).scroll(function(event) {
	/* Act on the event */
	var l_list = $('.scrool-h')
	var h = $(window).scrollTop()  
	l_list.each(function(index, el) {
		if(h>= $(el).offset().top - ($('.h-menu').innerHeight()+1) ){
			
			$('ul.m-menu .active').removeClass('active');
			$('a[href="#'+el.id+'"]').addClass('active');
		}
	});
});