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

var isScroll;
var lastScroll;
var scrollDir;

$(window).scroll(function(e) {
	
	e.preventDefault();
	
	var $body = $('body');
	var $fullHeight = window.innerHeight;
	var $lastScroll = window.scrollY
	
	checkScrolling()
	
	if(scrollDir === 'bottom') {
		window.scroll(1000,1000)
	} else {
		window.scroll(0,0)
	}
	
	// if(scrollDir === 'bottom') {
	// 	console.log('bottom ' + Number($lastScroll) + 1000)
	// } else {
	// 	console.log(Number($lastScroll) + 1)
	// }
	
	
	$("#slide1").each(function(){
		var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
		
		if((bottom_of_screen > window.innerHeight)){
			$body.addClass('_active')
		}
		else {
			$body.removeClass('_active')
		}
	});
});

function checkScrolling () {
	let headerHeight = 100
	if (typeof window !== 'undefined') {
		headerHeight = document.getElementById('header')?.getBoundingClientRect().height
	}
	scrollDir = lastScroll > window.scrollY ? 'top' : 'bottom'
	lastScroll = window.scrollY
	isScroll = window.scrollY > headerHeight
}