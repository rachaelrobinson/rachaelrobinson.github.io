$(document).ready(function(){
	$("#home").click(function(){
		console.log("HELLO");
		window.location.href='./index.html';
	});
	$("#about").click(function(){
		console.log("clicked");
		autoScrollTo('restOfPage');
		// restOfPage
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
		autoScrollTo("github-link");
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
	window.onload = function() {
		setTimeout (function () {
			scrollTo(0,0);
		}, 100); //100ms for example
	}
	var scrollY = 0;
	var distance = 1;
	var dist = 30;
	var speed = 30;


window.onload = function() {
	setTimeout (function () {
		scrollTo(0,0);
	}, 100); //100ms for example
}
	function autoScrollTo(el) {
		console.log(el);
		var currentY = window.pageYOffset;
		var targetY = document.getElementById(el).offsetHeight;
		console.log(targetY);
		var bodyHeight = document.body.offsetHeight;
		var yPos = currentY + window.innerHeight;
		var animator = setTimeout('autoScrollTo(\'' + el + '\')', 24);
		console.log(yPos, bodyHeight);
		if (yPos > bodyHeight) {
			clearTimeout(animator);
		} 
		else {
		    if (currentY < targetY - distance) {
		    	scrollY = currentY + dist;
		    	window.scroll(0, scrollY);
		    } 
		    else {
		      	clearTimeout(animator);
		    }
		}
	}

	function resetScroller(el) {
		var currentY = window.pageYOffset;
		var targetY = document.getElementById(el).offsetTop;
		var animator = setTimeout('resetScroller(\'' + el + '\')', speed);
		if (currentY > targetY) {
		    scrollY = currentY - distance;
		    window.scroll(0, scrollY);
		}
		else {
			clearTimeout(animator);
		}
	}

// });
