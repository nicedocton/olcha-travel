// кнопка выбора языка
let lang_icon = document.querySelector('.lang__btn');
let lang_menu = document.querySelector('.lang');
lang_icon.addEventListener("click", function (e) {
	e.preventDefault();
	lang_menu.classList.toggle('_active');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.lang')) {
		lang_menu.classList.remove('_active');
	}
});

$('.checkbox__block').click(function() {
	$('.checkbox__block._active').removeClass('_active').find('.radio__input').prop("checked", false);
	$(this).addClass('_active').find('.radio__input').prop("checked", true);
	let newImg = $(this).find('.checkbox__block-image img').attr('src');
	$('.bg-content._slide2 img').fadeOut(300);
	setTimeout(function () {
		$('.bg-content._slide2 img').attr('src', newImg).fadeIn(300);
	}, 300)
})


jQuery(document).ready(function ($) {
	//initialise Stellar.js
	$(window).stellar();
	
	//Cache some variables
	var links = $('.navigation').find('li');
	slide = $('.slide');
	button = $('.btn');
	mywindow = $(window);
	htmlbody = $('html,body');
	
	//Setup waypoints plugin
	slide.waypoint(function (event, direction) {
		//cache the variable of the data-slide attribute associated with each slide
		dataslide = $(this).attr('data-slide');
		//If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and
		//remove the active class from the previous navigation link
		
		if (direction === 'down') {
			$('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
		}
			// else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and
		//remove the active class from the next navigation link
		else {
			$('.navigation li[data-slide="' + (dataslide - 1) + '"]').addClass('active').next().removeClass('active');
		}
	});
	
	document.addEventListener('scroll', (e) => {
		
		checkScrolling()
		
		if(scrollDir === 'bottom') {
			$(window).scroll(1000, 1000)
		} else {
			$(window).scroll(0, 0)
		}
	})
	
	//waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class
	//from navigation link slide 2 and adds it to navigation link slide 1.
	mywindow.scroll(function () {
		if (mywindow.scrollTop() == 0) {
			$('.navigation li[data-slide="0"]').addClass('active');
			$('.navigation li[data-slide="1"]').removeClass('active');
		}
		if ($('.navigation li[data-slide="1"],.navigation li[data-slide="2"],.navigation li[data-slide="3"],.navigation li[data-slide="4"],.navigation li[data-slide="5"],.navigation li[data-slide="6"],.navigation li[data-slide="7"]').hasClass('active')) {
			$('.navigation li').removeClass('light-menu').addClass('dark-menu');
		}  else if ($('.navigation li[data-slide="0"]').hasClass('active')) {
			$('.navigation li').removeClass('dark-menu').addClass('light-menu');
		}
	});
	
	//Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
	//easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
	function goToByScroll(dataslide) {
		htmlbody.animate({
			scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
		}, 2000, 'easeInOutQuint');
	}
	
	//When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
	links.click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
	});
	
	//When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
	button.click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
	});
	
});

var isScroll;
var lastScroll;
var scrollDir;

function checkScrolling () {
	let headerHeight = 100
	if (typeof window !== 'undefined') {
		headerHeight = document.getElementById('header')?.getBoundingClientRect().height
	}
	scrollDir = lastScroll > window.scrollY ? 'top' : 'bottom'
	lastScroll = window.scrollY
	isScroll = window.scrollY > headerHeight
}