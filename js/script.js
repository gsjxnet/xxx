jQuery(document).ready(function($){
	/*------------ Fade plugin Start ------------*/
	$('html').addClass("hidden-c");
	animationSlider();
	$('.banner').addClass('bannera');
	/*------------ Fade plugin End --------------*/

	/*------------ Slider Start ------------*/
	$('.slider-wrap').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
	});
	/*------------ Slider End --------------*/

	/*------------ Language Start ------------*/
	$('.current-language').click(function(event) {
		event.preventDefault();
		$(this).next().slideToggle(300);
	});
	/*------------ Language End --------------*/

	/*------------ Modal Start ------------*/
	$('.open-modal').click(function(event) {
		event.preventDefault();
		$('.modal').css('display', 'flex').hide().fadeIn(300);
	});

	$('.reg-modal').click(function(event) {
		event.preventDefault();
		$(this).parents('.modal-box').hide();
		$('.signup').fadeIn(300);
	});
	$('.reg-modal-adv').click(function(event) {
		event.preventDefault();
		$(this).parents('.modal-box').hide();
		$('.signup-adv').fadeIn(300);
	});
	$('.login-modal').click(function(event) {
		event.preventDefault();
		$(this).parents('.modal-box').hide();
		$('.login').fadeIn(300);
	});
	/*------------ Modal End --------------*/

	/*------------ Close Modal Start ------------*/
	$('.close').click(function(event) {
		event.preventDefault();
		$('.modal').fadeOut(300);
	});
	/*------------ Close Modal End --------------*/

	/*------------ Projects more Start ------------*/
	$('.normal .more-btn').click(function(event) {
		event.preventDefault();
		$('.filter-wrap').toggleClass('open');
		$('.more').slideToggle(300);
		$('.projects-wrap-bottom').toggleClass('bg-change');
	});
	/*------------ Projects more End --------------*/

	/*------------ Projects change Start ------------*/
	$('.projects-wrap-top .switch li').eq(0).find('a').click(function(event) {
		event.preventDefault();
		$('.projects-wrap-top .switch li').removeClass('active').eq(0).addClass('active');
		$('.projects-wrap-bottom').addClass('change');
	});
	$('.projects-wrap-top .switch li').eq(1).find('a').click(function(event) {
		event.preventDefault();
		$('.projects-wrap-top .switch li').removeClass('active').eq(1).addClass('active');
		$('.projects-wrap-bottom').removeClass('change');
	});
	/*------------ Projects change End --------------*/

	/*------------ Home Banner Scroll Start ------------*/
	$('a.gotonext , .projects-count').click(function(event) {
		event.preventDefault();
		$('html,body').stop(true);
		$('html,body').animate({scrollTop: $('body > .wrapper > section').eq(1).offset().top}, 300);
	});
	/*------------ Home Banner Scroll End --------------*/

	/*------------ Hamburger Start ------------*/
	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
		$('.menu-hide').toggleClass('on');
		var windowScrollTop = $(window).scrollTop();
		if (!$('body').hasClass('scroll')) {
			$('.wrapper').css('transform','translate3d(0px,-'+windowScrollTop+'px, 0px)').attr('data-top',windowScrollTop);
			$('body').addClass('scroll');
		} else {
			$('body').removeClass('scroll');
			var top = $('.wrapper').attr('data-top');
			$('.wrapper').css('transform','translate3d(0px, 0px, 0px)');
			$('body,html').stop().animate({scrollTop:top},0);
		}
	})
	/*------------ Hamburger End --------------*/

	$(window).scroll(function(event) {
		/*------------ wowo Start ------------*/
		animationSlider();
		/*------------ wowo End --------------*/
	});

	/*------------ wowo Start ------------*/
	function animationSlider() {
	  	var wt = $(window).scrollTop();
	    wh = wt + $(window).height();
	  	jQuery('.wowo:not(.animated)').each(function () {
	    var me = $(this), eH = me.offset().top,
	    oH = eH + me.innerHeight();
	    if (wt <= eH && wh >= eH || wt <= oH && oH <= wh) {
	      me.addClass("animated");
	    }
	  });
	}
	/*------------ wowo End --------------*/

})



