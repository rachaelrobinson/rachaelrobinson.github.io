$(document).ready(function(){
	$("#home").click(function(){
		console.log("HELLO");
		window.location.href='./index.html';
	});
	$("#about").click(function(){
		console.log("clicked");
		$('html,body').animate({
        	scrollTop: $("#restOfPage").offset().top},
        	'slow');
	});
	$("#github").click(function(){
		window.location.href='https://github.com/rachaelrobinson';
	});
	$("#resume").click(function(){
		window.location.href='./resume.html';
	});
	$("#photos").click(function(){
		window.location.href='./photography.html';
	});
	$("#img-arrow").click(function(){
		$('html,body').animate({
        	scrollTop: $("#github-link").offset().top},
        	'slow');
		// autoScrollTo("github-link");
	});
	$("#github-link").click(function(){
		window.location.href='https://github.com/rachaelrobinson';
	});
	$("#resume-link").click(function(){
		window.location.href='./resume.html';
	});
	$("#photography-link").click(function(){
		window.location.href='./photography.html';
	});


});

// $("button").click(function() {
//     $('html,body').animate({
//         scrollTop: $(".second").offset().top},
//         $(window).scrollTop($('').offset().top);

//         'slow');
// });
// 	window.onload = function() {
// 		setTimeout (function () {
// 			scrollTo(0,0);
// 		}, 100); //100ms for example
// 	}
// 	var scrollY = 0;
// 	var distance = 1;
// 	var dist = 10;
// 	var speed = 4;


// window.onload = function() {
// 	setTimeout (function () {
// 		scrollTo(0,0);
// 	}, 100); //100ms for example
// }
// 	function autoScrollTo(el) {
// 		console.log(el);
// 		var currentY = window.pageYOffset;
// 		var targetY = document.getElementById(el).offsetHeight;
// 		console.log(targetY);
// 		var bodyHeight = document.body.offsetHeight;
// 		var yPos = currentY + window.innerHeight;
// 		var animator = setTimeout('autoScrollTo(\'' + el + '\')', 24);
// 		console.log(yPos, bodyHeight);
// 		if (yPos > bodyHeight) {
// 			clearTimeout(animator);
// 		} 
// 		else {
// 		    if (currentY < targetY - distance) {
// 		    	currentY = currentY + 183;
// 		    	scrollY = currentY + dist;
// 		    	window.scroll(0, scrollY);
// 		    } 
// 		    else {
// 		      	clearTimeout(animator);
// 		    }
// 		}
// 	}

// 	function resetScroller(el) {
// 		var currentY = window.pageYOffset;
// 		var targetY = document.getElementById(el).offsetTop;
// 		var animator = setTimeout('resetScroller(\'' + el + '\')', speed);
// 		if (currentY > targetY) {
// 		    scrollY = currentY - distance;
// 		    window.scroll(0, scrollY);
// 		}
// 		else {
// 			clearTimeout(animator);
// 		}
// 	}

// // });
