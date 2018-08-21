$(document).ready(function(){

// Відкриття попапа нажаттям на фото-мініатюру

	$('.photo-list__mask').on('click', function() {
		$(this).siblings('.overlay').fadeIn(100);
		$('body').addClass('body-inactive');
	});

// Закриття попапа нажаттям на хрестик

	$('.close-popup').click(function() {
		$('.overlay').fadeOut(100);
		$('body').removeClass('body-inactive');
	});

// Закриття попапа нажаттям на "Esc"

	$(this).keydown(function(eventObject){
		if (eventObject.which == 27)
			$('.overlay').fadeOut(100);
			$('body').removeClass("body-inactive");
	});

});