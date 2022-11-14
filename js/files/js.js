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

// Выбор страны
jQuery('.btn-links .btn').click(function () {
	let parent = jQuery(this).closest('.btn-links');
	parent.find('.btn._active').removeClass('_active');
	jQuery(this).addClass('_active');
});



// Выбор турпакета и смена слайда
jQuery('.checkbox__block').click(function() {
	let parent = jQuery(this).closest('.section');
	let newImg = jQuery(this).find('.checkbox__block-image img').attr('src');
	jQuery('.checkbox__block._active').removeClass('_active').find('.radio__input').prop("checked", false);
	jQuery(this).addClass('_active').find('.radio__input').prop("checked", true);
	if(jQuery('body').innerWidth() >= 1200) {
		let slide = parent.find('.bg-content img')
		slide.fadeOut(300);
		setTimeout(function () {
			slide.attr('src', newImg).fadeIn(300);
		}, 300)
	}
	else {
		parent.css('background-image', 'url(' + newImg + ')');
	}
});

// Выбор других блоков и смена слайда
jQuery('.tourList__item').click(function() {
	let parent = jQuery(this).closest('.section');
	let newImg = jQuery(this).attr('data-img');
	parent.find('.tourList__item._active').removeClass('_active').find('.radio__input').prop("checked", false);
	jQuery(this).addClass('_active').find('.radio__input').prop("checked", true);
	if(jQuery('body').innerWidth() >= 1200) {
		let slide = parent.find('.bg-content img');
		slide.fadeOut(300);
		setTimeout(function () {
			slide.attr('src', newImg).fadeIn(300);
		}, 300)
	}
	else {
		parent.css('background-image', 'url(' + newImg + ')');
	}
});

// Выбор способа оплаты
jQuery('.payment__btn').click(function () {
	jQuery('.payment__btn').removeClass('_active');
	jQuery(this).addClass('_active');
})

// Навигация при клиrе на меню сбоку и кнопки назад/далее
jQuery(document).ready(function ($) {
	let section = $('.slide');
	section.each(function () {
		let sectionImg = $(this).find('.bg-content img').attr('src');
		$(this).css('background-image', 'url(' + sectionImg + ')');
	})
	
	$(window).stellar();
	
	let links = $('.navigation').find('li');
	let slide = $('.slide');
	let button = $('.btn');
	let mywindow = $(window);
	let htmlbody = $('html,body');
	let logo = $('.header__logo');
	
	slide.waypoint(function (event, direction) {
		let dataslide = $(this).attr('data-slide');
		
		if (direction === 'down') {
			$('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
		}
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
	
	mywindow.scroll(function () {
		if (mywindow.scrollTop() === 0) {
			$('.navigation li[data-slide="0"]').addClass('active');
			$('.navigation li[data-slide="1"]').removeClass('active');
		}
		if ($('.navigation li[data-slide="1"],.navigation li[data-slide="2"],.navigation li[data-slide="3"],.navigation li[data-slide="4"],.navigation li[data-slide="5"],.navigation li[data-slide="6"],.navigation li[data-slide="7"]').hasClass('active')) {
			$('.navigation li, .header, .footer').removeClass('light-menu').addClass('dark-menu');
		}  else if ($('.navigation li[data-slide="0"]').hasClass('active')) {
			$('.navigation li, .header, .footer').removeClass('dark-menu').addClass('light-menu');
		}
	});
	
	function goToByScroll(dataslide) {
		htmlbody.animate({
			scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
		}, 2000, 'easeInOutQuint');
	}
	
	logo.click(function (e) {
		e.preventDefault();
		let dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
	})
	
	links.click(function (e) {
		e.preventDefault();
		let dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
	});
	
	button.click(function (e) {
		e.preventDefault();
		let dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
	});
	
});

// Нахождение напровления прокрутки мыши
let isScroll;
let lastScroll;
let scrollDir;

function checkScrolling () {
	let headerHeight = 100
	if (typeof window !== 'undefined') {
		headerHeight = document.getElementById('header')?.getBoundingClientRect().height
	}
	scrollDir = lastScroll > window.scrollY ? 'top' : 'bottom'
	lastScroll = window.scrollY
	isScroll = window.scrollY > headerHeight
}