 $(document).ready(function() {
	 
//FADING IN THE WHOLE WEBSITE-------------------	 
	 $('html').hide();	
	 $('#logo').transition({perspective: '300px',rotateX: '270deg',delay:0});
	 $('nav').hide();
	 $(document).ready(function(){
	 $('html').show();
	 $('nav').fadeIn(500);
	 $('#logo').transition({perspective: '300px',rotateX: '360deg',delay:0});
   });
   
   
   
$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});



	// scroll body to 0px on click
		$('#click1, #home').click(function () {
			$('body,html').animate({scrollTop: 0 }, 500);
				return false;
		});
	});
	
	
		// scroll body to 0px on click
		$('#click2').click(function () {
			$('body,html').animate({scrollTop: 400 }, 500);
				return false;
		});
		
		
		
		
		// scroll body to 0px on click
		$('#click3').click(function () {
			$('body,html').animate({scrollTop: 900 }, 500);
				return false;
		});
	});
	
	
	// scroll body to 0px on click
		$('#click4').click(function () {
			$('body,html').animate({scrollTop: 1200 }, 500);
				return false;
		});
	
	
	



 //end of functions--------------------------------------- 
 });
 
 
 