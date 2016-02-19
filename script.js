
// window.onload = function() {
// 	setTimeout (function () {
// 		scrollTo(0,0);
// 	}, 100); //100ms for example
// }
function hover(element) {
    element.setAttribute('src', './images/GitHub-Mark-Light-120px-plus_blue.png');
}
function unhover(element) {
    element.setAttribute('src', './images/GitHub-Mark-Light-120px-plus.png');
}
function Linkhover(element) {
    element.setAttribute('src', './images/linked_blue.png');
}
function Linkunhover(element) {
    element.setAttribute('src', './images/linked.png');
}
function Camerahover(element) {
    element.setAttribute('src', './images/camera_blue.png');
}
function Cameraunhover(element) {
    element.setAttribute('src', './images/camera_white.png');
}
var jump = function(){
	('html,body').animate({
        	scrollTop: $("#restOfPage").offset().top - 60},
        	'slow');
}
$(document).ready(function(){
	$("#frontWelcome").fadeIn(2000);
	$('.toggle-nav').click(function(e) {
        $(this).toggleClass('active');
        $('.menu ul').toggleClass('active');
 
        e.preventDefault();
    });
	$("#home").click(function(){
		window.location.href='./index.html';
	});
	$("#about").click(function(){
		$('html,body').animate({
        	scrollTop: $("#restOfPage").offset().top - 60},
        	'slow');
	});
	$("#photography-img-arrow").click(function(){
		// console.log("clicked");
		$('html,body').animate({
        	scrollTop: $("#photoInterest").offset().top},
        	600);
	});
	$("#mailto").click(function(){
		window.location.href = "mailto:rachael.robinson@tufts.edu";
    });
    $("#contact_mail").click(function(){
 		window.location.href = "mailto:rachael.robinson@tufts.edu";
    });
	// $("#github").click(function(){
	// 	window.location.href='https://github.com/rachaelrobinson';
	// });
	// $("#resume").click(function(){
	// 	window.location.href='./resume.html';
	// });
	// $("#photos").click(function(){
	// 	window.location.href='./photography.html';
	// });
	$("#img-arrow").click(function(){
		$('html,body').animate({
			scrollTop: $(".threeLinks").offset().top - 450},
        	'slow');
        	// scrollTop: $("#github-link").offset().top - 200},
        	// 'slow');
		// autoScrollTo("github-link");
	});
	$("#github-link").click(function(){
		window.location.href='https://github.com/rachaelrobinson';
	});
	$("#githubref").click(function(){
		window.location.href='https://github.com/rachaelrobinson';
	})
	$("#resume-link").click(function(){
		window.location.href='./resume.html';
	});
	$("#photography-link").click(function(){
		window.location.href='./photography.html';
	});
	
	$("#about_other").click(function(){
		window.location.href= "./index.html";

	});
	$("#flickrLogo").click(function(){
		window.location.href= "https://www.flickr.com/photos/rrobinson95/";

	});


		// window.location.href= "./index.html#restOfPage";
		// $(window).load(function(){
		// 	$('html,body').animate({scrollTop: $("#restOfPage").offset().top - 60},'slow');
		// });
		
		

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
// $(function(){
	// 	$("#about_other").on('click', function(e){
	// 		e.preventDefault;
	// 		// $('html, body').animate({
 //   //                      scrollTop: $($(this).attr('href')).offset().top + 'px'
 //   //                  }, 1000, 'swing');
	// 		$('html,body').animate({
	//         	scrollTop: $($("#restOfPage").attr(href="./index.html")).offset().top - 60},
	//         	'slow');
	// 	});
	// 	if (window.location.hash) {
	//                     // smooth scroll to the anchor id
	//                     $('html,body').animate({
	//         	scrollTop: $("#restOfPage").offset().top - 60},
	//         	'slow');
	//     }
	// });
