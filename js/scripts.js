$(function() {
	//play and pause buttons for carousel
	$('.carousel').carousel( { interval: 2000 } );
	$('#carouselButton').click(function() {
		if( $('#carouselButton').children('i').hasClass('fa-pause') ) {
			$('.carousel').carousel('pause');
			$('#carouselButton').children('i').removeClass('fa-pause').addClass('fa-play');
		} else {
			$('.carousel').carousel('cycle');
			$('#carouselButton').children('i').removeClass('fa-play').addClass('fa-pause');
		}
	});

	//open reserve and login modals
	$('#reserveButton').click(function() {
		$('#reserveModal').modal('toggle');
	});

	$('#loginButton').click(function() {
		$('#loginModal').modal('toggle');
	});
});
