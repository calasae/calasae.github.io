$(document).ready(

	function(){

		var hdrHeight = 0.5*$(window).height();

		var docHeight = $(document).height();
		var vpHeight = $(window).height();

		$(window).scroll(
			function(){
				if( $("body").scrollTop() > hdrHeight ){
					$("#follownav").slideDown();
				}
				else{
					$("#follownav").slideUp();

				}

				var scrollFactor = $("body").scrollTop() / hdrHeight;
				var opacityVal = 0.5*scrollFactor + 0.5;
				$("#filter").css("opacity", opacityVal);
			}

		)

	})

$("#logo").hover(
	function(){
		$(this).css("background-color", "rgb(255, 210, 0)");
	},
	function(){
		$(this).css("background-color", "rgb(0, 25, 65)");
	});

$("#scrolltotop").click(
	function(){
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	})

$("#scrolltotop").hover(
	function(){
		$(this).css("cursor", "pointer");
	})
