jQuery( document ).ready( function( $ ) {

	"use strict";

	/* START */

	var buttonText = $('.gliu_loadmore').text();

	$('.gliu_loadmore').on( 'click', function() {

		var button = $(this),
		data = {
			'action': 'loadmore',
			'query': gliu_loadmore_params.posts,
			'page': gliu_loadmore_params.current_page
		};

		$.ajax({
			url: gliu_loadmore_params.ajaxurl,
			data: data,
			type: 'POST',
			beforeSend: function ( xhr ) {
				button.text('...');
			},
			success: function( data ){
				if( data ) {
					button.text( buttonText ).before(data);
					gliu_loadmore_params.current_page++;

					if ( gliu_loadmore_params.current_page == gliu_loadmore_params.max_page )
					button.remove();

				} else {
					button.remove();
				}
			}
		});
	});

	/* END */

} );
