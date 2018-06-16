jQuery( document ).ready( function( $ ) {

	"use strict";

	/* START */

	var gmt = false;
	var sidebar_opened = false;
	var gliu_slider_launched = false;
	var gfs_int, gfs_int_spa;
	var gs_mouse_top = 0;
	var gs_mouse_left = 0;
	gliu_mouse_tracker();

	/* Scroll to top */
	$('.btn-to-top').on( 'click', function() {
		$('html, body').animate( { scrollTop: 0 }, 500 );
		return false;
	} );

	/* Fitvids */
	$('.to_fit_vids').fitVids();
	/* */

	/* Added to avoid iframe confusion on Chrome, Safari and Opera */
	$('iframe').each( function() {
        this.src = this.src;
    } );
	/* */

	/* Top Search */
	$( '.top-search-button' ).on( 'click', function() {
		window.location = $('#siteUrl').html() + '/?s=' + $(this).parent().find('.top-search-input').val();
	} );
	/* */

	/* Default WP Search Widget without Title */
	if ( !$('.widget-item.widget_search').find( 'h2' ).contents().length ) { $('.widget-item.widget_search').css( { 'padding': 0, 'background' : 'none' } ); }
	if ( document.getElementById('s') !== null && document.getElementById('s_top') !== null ) {
		var searchPlaceholder = document.getElementById('s_top').value;
		document.getElementById('s').placeholder = searchPlaceholder;
	}
	/* */

	/* Menu Button */
	$( '.mobile-menu-button' ).on( 'click', function() {
		$( '#site-menu' ).slicknav( 'toggle' );
	} );

	$( '.mobile-menu-button' ).toggle(
    function() {
			$( '.mobile-logo-outer' ).addClass( 'mb10' );
			$( '.mobile-logo-container img, .mobile-header h1.logo-text' ).removeClass( 'mlc-closed' ).addClass( 'mlc-opened' );
		},
    function() {
			$( '.mobile-logo-outer' ).removeClass( 'mb10' );
			$( '.mobile-logo-container img, .mobile-header h1.logo-text' ).removeClass( 'mlc-opened' ).addClass( 'mlc-closed' );
		},
	);
	/* */

	/* Sidebar */
	$( '.sidebar-button' ).on( 'click', function() {
		gliu_sidebar_toggle();
	} );

	$( '.sidebar-lens' ).on( 'click', function() {
		gliu_close_sidebar();
	} );

	function gliu_sidebar_toggle() {
		if ( sidebar_opened ) {
			gliu_close_sidebar();
		} else {
			$( '.sidebar-outer' ).addClass( 'sidebar-active' );
			$( '.single-hero' ).addClass( 'hero-margin' );
			$( 'body' ).addClass( 'body-margin' );
			$( '.gliu-post-navi-prev.gpn-full' ).addClass( 'navi-margin-prev' );
			$( '.gliu-post-navi-next.gpn-full' ).addClass( 'navi-margin-next' );
			$( '.sidebar-button' ).addClass( 'sb-opened' );
			$( '#gliu-tracker' ).css( 'display', 'none' );
			sidebar_opened = true;
		}
	}

	function gliu_close_sidebar() {
		$( '.sidebar-outer' ).removeClass( 'sidebar-active' );
		$( '.single-hero' ).removeClass( 'hero-margin' );
		$( 'body' ).removeClass( 'body-margin' );
		$( '.gliu-post-navi-prev.gpn-full' ).removeClass( 'navi-margin-prev' );
		$( '.gliu-post-navi-next.gpn-full' ).removeClass( 'navi-margin-next' );
		$( '.sidebar-button' ).removeClass( 'sb-opened' );
		sidebar_opened = false;
		gliu_mouse_tracker();
	}
	/* */

	/* Body Mouse Move */
	$( 'body' ).on( 'mousemove', function( event ) {
		gs_mouse_top = event.pageY;
		gs_mouse_left = event.pageX;
		gliu_mouse_tracker();
	} );
	/* */

	/* Mouse Tracker */
	function gliu_mouse_tracker() {
		if ( ( $('#indexArchive').html() || $( '.search-results' )[0] ) && $( window ).width() >= $( '#trigger-slicknav-value' ).html() - 17 && !sidebar_opened ) {
			if ( !gmt && $( '#gliu-tracker' ).offset().top > 0 ) {
				$( '#gliu-tracker' ).addClass( 'gliu-tracker-alive' );
				gmt = true;
			}
			$( '#gliu-tracker' ).css( 'display', 'block' );
			$( '#gliu-tracker' ).css( 'top', gs_mouse_top - $( '#gliu-tracker' ).outerHeight()/2 - $( window ).scrollTop() );
		} else {
			$( '#gliu-tracker' ).css( 'display', 'none' );
		}

		if ( $( '.single-post' )[0] ) {
			$( '.gliu-post-navi-prev .gliu-post-navi-title' ).css( { 'top': gs_mouse_top + 20 - $( window ).scrollTop(), 'left': gs_mouse_left + 20 } );
			$( '.gliu-post-navi-next .gliu-post-navi-title' ).css( { 'top': gs_mouse_top + 20 - $( window ).scrollTop(), 'right': $( window ).width() - gs_mouse_left + 13 } );
		}
	}
	/* */

	/* Icon Flashing */

	// New Icon
	var iconNewInt, iconNewRand, iconNewDone;
	iconNewDone = 0;
	iconNewRand = 1500 + Math.floor(Math.random() * 2000);
	if ( $( '.new-icon' )[0] ) {
		iconNewInt = setInterval( gliu_new_flash, iconNewRand );
	}
	function gliu_new_flash() {
		$( '.new-icon' ).fadeTo(100, 0.1).fadeTo(100, 1).fadeTo(100, 0.1).fadeTo(100, 1).fadeTo(100, 0.1).fadeTo(100, 1);
		iconNewRand = 3000 + Math.floor(Math.random() * 5000);
		clearInterval(iconNewInt);
		iconNewDone += 1;
		if ( iconNewDone <= 4 ) {
			iconNewInt = setInterval( gliu_new_flash, iconNewRand );
		}
	}

	// Hot Icon
	var iconHotInt, iconHotRand, iconHotDone;
	iconHotDone = 0;
	iconHotRand = 1000 + Math.floor(Math.random() * 2000);
	if ( $( '.hot-icon' )[0] ) {
		iconHotInt = setInterval( gliu_hot_flash, iconHotRand );
	}
	function gliu_hot_flash() {
		$( '.hot-icon' ).fadeTo(100, 0.1).fadeTo(100, 1).fadeTo(100, 0.1).fadeTo(100, 1).fadeTo(100, 0.1).fadeTo(100, 1);
		iconHotRand = 3000 + Math.floor(Math.random() * 5000);
		clearInterval(iconHotInt);
		iconHotDone += 1;
		if ( iconHotDone <= 4 ) {
			iconHotInt = setInterval( gliu_hot_flash, iconHotRand );
		}
	}
	/* */

	/* Apply Slicknav */
	$( '#site-menu' ).slicknav( {
		label: '',
		prependTo: '#touch-menu',
		allowParentLinks: false,
		closedSymbol: '<i class="fas fa-angle-right"></i>',
		openedSymbol: '<i class="fas fa-angle-down"></i>',
		init: gliu_appendSearch,
		open: gliu_showSearch,
	} );
	/* */

	/* Append search to Slicknav */
	function gliu_appendSearch() {
		if ( $('.top-search').html() != 'undefined' && $('.top-search').html() != undefined && $('.top-search').html() != '' ) {
			$('#touch-menu .slicknav_menu').append( '<div class="top-search-touch"><i class="fas fa-search"></i>' + $('.top-search').html() + '</div>' );
			$('.top-search-touch').hide();
		}
	}

	$('.mobile-menu-button').on( 'click', function() {
		$('.top-search-touch').hide();
	} );

	function gliu_showSearch() {
		$('.top-search-touch').show();
	}
	/* */

	// Top Search Box Focus
	var gliu_topSearchDefaultVal_custom = $( '#s_top' ).val();

	$( '.top-search-input' ).on( 'focus', function() {
		if ( $( this ).val() == gliu_topSearchDefaultVal_custom ) {
			$( this ).val( '' );
		}
	} );

	$( '.top-search-input' ).on( 'focusout', function() {
		if ( $( this ).val() == '' ) {
			$( this ).val( gliu_topSearchDefaultVal_custom );
		}
	} );

	$( '.top-search-input' ).on( 'keyup', function( event ) {
		if ( event.which == 13 ) {
			//ENTER
			window.location = $( '#siteUrl' ).html() + '/?s=' + $( this ).val();
		}
	} );
	/* */

	/* Passive a style */
	$( '.menu-item-passive' ).find( 'a' ).removeAttr( 'href' );
	/* */

	/* Leave a reply */
	$( '.comment-reply-title' ).on( 'click', function() {
		$( '.comment-form' ).css( 'display', 'block' );
	} );

	$( '.comment-reply-link' ).on( 'click', function() {
		$( '.comment-form' ).css( 'display', 'block' );
		$( '.comment-respond' ).addClass( 'comment-respond-opened' );
	} );

	$( '#cancel-comment-reply-link' ).on( 'click', function() {
		$( '.comment-respond' ).removeClass( 'comment-respond-opened' );
		$( '.comment-form' ).addClass( 'comment-respond-closing' );
		setTimeout( function() { $( '.comment-form' ).removeClass( 'comment-respond-closing' ); $( '.comment-form' ).css( 'display', 'none' ); }, 1 );
	} );
	/* */

	/* Instagram Media Effect */
	function gliu_apply_instagram_effect() {
		if ( $( '.instagram-media' )[0] ) {

			var random_instagram_num = 0;
			var random_instagram_id = '';

			$( '.instagram-media' ).each( function( index, element ) {
				random_instagram_num = 9999 + Math.floor(Math.random() * 9999);
				random_instagram_id = 'gliu_instagram_' + random_instagram_num;
				$( '<div id="' + random_instagram_id + '" class="twitter_effect"></div>' ).insertBefore( this );
				$( '#' + random_instagram_id + '.twitter_effect' ).css( 'height', $( element ).outerHeight() + 80 );
			} );

		}
	}
	/* */

	/* Twitter Media Effect */
	function gliu_apply_twitter_effect() {
		if ( $( '.twitter-tweet' )[0] ) {

			var random_twitter_num = 0;
			var random_twitter_id = '';

			$( '.twitter-tweet' ).each( function( index, element ) {
				random_twitter_num = 9999 + Math.floor(Math.random() * 9999);
				random_twitter_id = 'gliu_twitter_' + random_twitter_num;
				$( '<div id="' + random_twitter_id + '" class="twitter_effect"></div>' ).insertBefore( this );
				$( '#' + random_twitter_id + '.twitter_effect' ).css( 'height', $( element ).outerHeight() + 80 );
			} );
		}

		gliu_apply_instagram_effect();
	}
	setTimeout( gliu_apply_twitter_effect, 3000 );
	/* */

	/* Swiper Slider */
	var swipe_autoplay = false;
	if ( Number( $( '#swipe_autoplay' ).html() ) ) { swipe_autoplay = true; }
	var swipe_duration = Number( $( '#swipe_duration' ).html() );
	var swipe_infinite = Number( $( '#swipe_infinite' ).html() );

	// Gallery Slider
	if ( $( '.single-format-gallery' )[0] && $( '.swiper-container' )[0] ) {

		var gallery_swiper = new Swiper ( '.single-format-gallery .swiper-container', {
			slidesPerView: 'auto',
			centeredSlides: true,
			spaceBetween: 0,
			loop: false,
			roundLengths: true,
			autoplay: false,
		} );

		setTimeout( function() { gallery_swiper.slideTo(0); }, 500 );

		function gliu_gallery_default_cursor() {
			$( '.single-format-gallery .swiper-slide-active' ).css( 'cursor', 'default' );
		}

		gliu_gallery_default_cursor();

		$( '.single-format-gallery .swiper-slide' ).on( 'click', function() {
			gallery_swiper.slideTo( gallery_swiper.clickedIndex );
		} );

		gallery_swiper.on( 'slideChangeTransitionStart', function() {
			$( '.single-format-gallery .swiper-slide' ).css( 'cursor', 'pointer' );
			gliu_gallery_default_cursor()
		} );

	}

	// Home Slider
	var stbl_body_margin = 0;

	function gliu_slider_title_box_left() {
		if ( $( '.home' )[0] && $( '.swiper-container' )[0] && $( window ).width() >= $( '#trigger-slicknav-value' ).html() - 17 ) {
			if ( sidebar_opened ) { stbl_body_margin = 380; }
			$( '.slider-title-box' ).css( 'left', $( '.site-top-container' ).offset().left + 30 + stbl_body_margin );
		} else {
			$( '.slider-title-box' ).css( 'left', -10 );
		}
	}

	function gliu_slider_title_box_top() {
		if ( $( '.home' )[0] && $( '.swiper-container' )[0] && $( window ).width() >= $( '#trigger-slicknav-value' ).html() - 17 ) {
			$( '.slider-title-box' ).css( 'top',  130 - $( '.slider-title-box' ).outerHeight() / 2 );
		} else {
			$( '.slider-title-box' ).css( 'top',  300 );
		}
	}

	function gliu_slider_launch() {
		$( '.home .swiper-slide-active' ).find( '.swiper-button-mask' ).hide();
		$( '.home .swiper-slide-active' ).find( '.slide-lens' ).removeClass( 'slide-lens-passive' ).addClass( 'slide-lens-active' );
		$( '.home .swiper-slide-active' ).find( '.slide-number' ).removeClass( 'slide-lens-active' ).addClass( 'slide-number-passive' );
		$( '.slider-title' ).text( $( '.swiper-slide-active' ).find( '.slide-temp-title' ).text() );
		$( '.slider-title-box' ).attr( 'href', $( '.home .swiper-slide-active a' ).attr( 'href' ) );
		gliu_slider_title_box_top();
	}

	if ( $( '.home' )[0] && $( '.swiper-container' )[0] ) {

		var home_swiper = new Swiper ( '.home .swiper-container', {
			slidesPerView: 'auto',
			centeredSlides: true,
			spaceBetween: 30,
			loop: swipe_infinite,
			roundLengths: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction',
			},
			autoplay: {
		    delay: swipe_duration,
		  },
			autoplay: swipe_autoplay,
		} );

		$( '.home .swiper-slide' ).on( 'click', function() {
			home_swiper.slideTo( home_swiper.clickedIndex );
		} );

		home_swiper.on( 'slideChangeTransitionStart', function() {
			if ( gliu_slider_launched ) {
				if ( $( window ).width() >= $( '#trigger-slicknav-value' ).html() - 17 ) {
					gliu_attach_sparkles();
				}
				$( '.swiper-button-mask' ).show();
				$( '.slide-lens' ).removeClass( 'slide-lens-active' ).addClass( 'slide-lens-passive' );
				$( '.slide-number' ).removeClass( 'slide-number-passive' ).addClass( 'slide-lens-active' );
				gliu_slider_launch();
			}
		} );

	}

	// Slider Sparkles
	var sparkles_attached = false;
	var random_sparkle, random_top, random_left, random_rotation, random_scale;
	var sparkle_count = Number( $( '#swipe_sparkles' ).html() );
	if ( sparkle_count > 200 ) {
		sparkle_count = 200;
	} else if ( sparkle_count < 0 ) {
		sparkle_count = 0;
	}

	function gliu_attach_sparkles() {
		if ( $( '.home' )[0] && $( '.swiper-container' )[0] && sparkle_count ) {

			if ( !sparkles_attached ) {
				var sparkle_shapes = [ 'circle', 'triangle', 'star', 'heart', 'infinity', 'square' ];
				var sparkles = [];

				for ( var i = 0; i < sparkle_shapes.length; i++ ) {
					sparkles.push( '<div class="sparkle-' + sparkle_shapes[i] + '"></div>' );
				}

				for ( var j = 0; j < sparkle_count; j++ ) {
					random_sparkle = Math.floor(Math.random() * sparkles.length );
					$( '.slider-background-inner' ).append( sparkles[random_sparkle] );
				}
			}

			$( '.slider-background-inner div' ).each( function() {
				if ( !sparkles_attached ) {
					$( this ).css( { 'transform': 'translate(' + $( window ).width()/2 + 'px, ' + $( window ).height() + 'px) rotate(0deg) scale(0)' } );
				} else {
					random_top = -50 + Math.floor(Math.random() * 400);
					random_left = -100 + Math.floor(Math.random() * $( window ).width() );
					random_rotation = Math.floor(Math.random() * 720);
					random_scale = 0.2 + Math.random() * 1;
					if ( $( this ).hasClass( 'sparkle-square' ) ) { random_scale = 0.2 + Math.random() * 0.7; }
					if ( $( this ).hasClass( 'sparkle-star' ) ) { random_scale = 0.05 + Math.random() * 0.1; }
					if ( $( this ).hasClass( 'sparkle-heart' ) ) { random_scale = 0.1 + Math.random() * 0.3; }
					if ( $( this ).hasClass( 'sparkle-infinity' ) ) { random_scale = 0.07 + Math.random() * 0.2; }
					$( this ).css( { 'transform': 'translate(' + random_left + 'px, ' + random_top + 'px) rotate(' + random_rotation + 'deg) scale(' + random_scale + ')' } );
				}
			} );

			sparkles_attached = true;

		}
	}

	function gliu_initial_animate_sparkles() {
		clearInterval(gfs_int_spa);
		$( '.slider-background-inner div' ).each( function() {
			random_top = -50 + Math.floor(Math.random() * 400);
			random_left = -100 + Math.floor(Math.random() * $( window ).width() );
			random_rotation = Math.floor(Math.random() * 720);
			random_scale = 0.2 + Math.random() * 1;
			if ( $( this ).hasClass( 'sparkle-square' ) ) { random_scale = 0.2 + Math.random() * 0.7; }
			if ( $( this ).hasClass( 'sparkle-star' ) ) { random_scale = 0.05 + Math.random() * 0.1; }
			if ( $( this ).hasClass( 'sparkle-heart' ) ) { random_scale = 0.1 + Math.random() * 0.3; }
			if ( $( this ).hasClass( 'sparkle-infinity' ) ) { random_scale = 0.07 + Math.random() * 0.2; }
			$( this ).css( { 'transform': 'translate(' + random_left + 'px, ' + random_top + 'px) rotate(' + random_rotation + 'deg) scale(' + random_scale + ')' } );
			$( this ).addClass( 'animate-sparkles ');
		} );
	}

	if ( $( '.gliu-slider-container' )[0] ) {
		$( '.gliu-slider-container' ).prepend( '<div class="slider-preloader"><div class="slider-preloader-inner"><svg xmlns="http://www.w3.org/2000/svg" width="80px" height="60px" viewBox="5 0 80 60"><path id="wave" fill="none" stroke="#333333" stroke-width="4" stroke-linecap="round"></path></svg></div></div>' );
		gliu_attach_preloader();
		if ( $( window ).width() >= $( '#trigger-slicknav-value' ).html() - 17 ) {
			gfs_int = setInterval( gliu_fire_slider, 2000 );
		} else {
			gfs_int = setInterval( gliu_fire_slider, 5000 );
		}
	}

	function gliu_fire_slider() {

		clearInterval(gfs_int);

		home_swiper.slideTo(0);
		if ( swipe_autoplay ) { home_swiper.autoplay.start(); }

		gliu_slider_title_box_left();
		gliu_slider_wrapper_coming();
		gliu_attach_sparkles();
		gfs_int = setInterval( gliu_call_slider_launch, 500 );
		gfs_int_spa = setInterval( gliu_initial_animate_sparkles, 300 );

		$( '.home .swiper-container' ).css( 'opacity', 1 );
		$( '.slider-preloader' ).addClass( 'sp-animate' );

		gliu_slider_launched = true;

	}

	function gliu_slider_wrapper_coming() {
		$( '.slider-background' ).addClass( 'sb-animate' );
		$( '.swiper-slide' ).each( function( i, el ) {
			$( el ).css( 'margin-left', '3000px' );
			setTimeout( function() {
				$( el ).animate( {
					'margin-left': 0
				}, 500 );
			}, 100 + ( i * 100 ) );
		} );
	}

	function gliu_call_slider_launch() {
		clearInterval(gfs_int);
		gliu_slider_launch();
		$( '.slider-title-box' ).addClass( 'stb-animate' );
	}
	/* */

	/* Post Navigation */
	function gliu_responsive_post_navigation() {
		if ( $( '.single-post' )[0] && $( window ).width() < 1140 - 17 ) {
			$( '.gliu-post-navi-prev' ).addClass( 'gpn-mobile' ).removeClass( 'gpn-full' ).removeClass( 'navi-margin-prev' );
			$( '.gliu-post-navi-next' ).addClass( 'gpn-mobile' ).removeClass( 'gpn-full' ).removeClass( 'navi-margin-next' );
		} else {
			$( '.gliu-post-navi-prev' ).removeClass( 'gpn-mobile' ).addClass( 'gpn-full' );
			$( '.gliu-post-navi-next' ).removeClass( 'gpn-mobile' ).addClass( 'gpn-full' );
			if ( sidebar_opened ) {
				$( '.gliu-post-navi-prev' ).addClass( 'navi-margin-prev' );
				$( '.gliu-post-navi-next' ).addClass( 'navi-margin-next' );
			}
		}
		gliu_set_pn_position();
	}
	gliu_responsive_post_navigation();

	function gliu_set_pn_position() {
		if ( $( '.single-post' )[0] && $( '.article-pure-content' )[0] ) {
			if ( $( '.article-pure-content' ).offset().top + $( '.article-pure-content' ).outerHeight() <= $( window ).scrollTop() + 50 + $( window ).height()/2 ) {
				$( '.gpn-full' ).css( { 'top': $( '.article-pure-content' ).offset().top + $( '.article-pure-content' ).outerHeight() - 80, 'margin-top': 0, 'position': 'absolute' } );
			} else {
				if ( $( '.article-pure-content' ).offset().top - $( window ).scrollTop() + 30 <= $( window ).height()/2 ) {
					$( '.gpn-full' ).css( { 'top': '50%', 'margin-top': '-30px', 'position': 'fixed' } );
				} else {
					$( '.gpn-full' ).css( { 'top': $( '.article-pure-content' ).offset().top, 'margin-top': 0, 'position': 'absolute' } );
				}
			}
		}
	}
	/* */

	/* on Resize */
	function gliu_resizing() {
		gliu_mouse_tracker();
		gliu_responsive_post_navigation();
		if ( gliu_slider_launched ) {
			gliu_slider_title_box_top();
			gliu_slider_title_box_left();
			gliu_attach_sparkles();
		}
	}
	$( window ).on( 'resize', gliu_resizing );
	/* */

	/* on Scroll */
	$( window ).on( 'scroll', function() {
		gliu_set_pn_position();
	} );
	/* */

	/* Slider Preloader */
	function gliu_attach_preloader() {

		const path = document.querySelector('#wave');
		const animation = document.querySelector('#moveTheWave');
		const m = 0.512286623256592433;

		function gliu_buildWave(w, h) {

			const a = h / 4;
			const y = h / 2;

			const pathData = [
				'M', w * 0, y + a / 2,
				'c',
				a * m, 0,
				-(1 - a) * m, -a,
				a, -a,
				's',
				-(1 - a) * m, a,
				a, a,
				's',
				-(1 - a) * m, -a,
				a, -a,
				's',
				-(1 - a) * m, a,
				a, a,
				's',
				-(1 - a) * m, -a,
				a, -a,

				's',
				-(1 - a) * m, a,
				a, a,
				's',
				-(1 - a) * m, -a,
				a, -a,
				's',
				-(1 - a) * m, a,
				a, a,
				's',
				-(1 - a) * m, -a,
				a, -a,
				's',
				-(1 - a) * m, a,
				a, a,
				's',
				-(1 - a) * m, -a,
				a, -a,
				's',
				-(1 - a) * m, a,
				a, a,
				's',
				-(1 - a) * m, -a,
				a, -a,
				's',
				-(1 - a) * m, a,
				a, a,
				's',
				-(1 - a) * m, -a,
				a, -a
			].join(' ');

			path.setAttribute('d', pathData);
		}

		gliu_buildWave(90, 60);
	}
	/* */

	/* END */

} );
