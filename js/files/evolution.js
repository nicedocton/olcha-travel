$(document).ready(function () {
	slide1 = $('.slide');
	slide1.waypoint(function (event, direction) {
		//cache the variable of the data-slide attribute associated with each slide
		dataslide0 = $(this).attr('data-slide');
		dataslide1C = 'slide' + dataslide0; //Current
		dataslide2P = 'slide' + (dataslide0 - 1); //Previous
		dataslide3 = parseInt(dataslide0) + 1;
		dataslide4N = 'slide' + dataslide3; //Next
		yearhashtag = $('section[id="' + dataslide1C + '"] audio').attr('id')
		//If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and
		//remove the active class from the previous navigation link
		if (direction === 'down') {
			$('section[id="' + dataslide1C + '"] div.year').fadeIn(2000);
			$('section[id="' + dataslide2P + '"] a.button').fadeOut(1000);
			parent.location.hash = yearhashtag;
		}
			// else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and
		//remove the active class from the next navigation link
		else {
			$('section[id="' + dataslide1C + '"] div.year').fadeOut(1000);
			$('section[id="' + dataslide2P + '"] a.button').fadeIn(1000);
			parent.location.hash = yearhashtag;
		}
	}, {
		offset: '50%'
	});
});