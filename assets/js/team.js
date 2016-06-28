$(".sublink").click(
	function(){
			var link = $(this).attr("value");
			$(link).slideDown("slow");
			$("div.teamroster").not(link).slideUp("slow");

		}
	);

$(".imglink").click(
	function(){
			var link = $(this).attr("value");
			$(link).fadeIn();
			$("div.bio").not(link).fadeOut();
			$("#filter-bg").fadeIn();
			$(link).scrollTop(0);
		}
	);

$(".close-bio").click(
	function(){
			$("div.bio").fadeOut();
			$("#filter-bg").fadeOut();

		}
	);