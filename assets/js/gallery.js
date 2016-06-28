$(".galleryimg").click(
	function(){
			var enlarge = $(this).attr("value");
			$(enlarge).fadeIn("slow");
			$("#filter-bg").fadeIn("slow");
			$("div.bigimg").not(enlarge).fadeOut("slow");
		}
	);

$(".bigimg").click(
	function(){
			$(".bigimg").fadeOut("slow");
			$("#filter-bg").fadeOut("slow");
		}
	);

$("#filter-bg").click(
	function(){
			$(".bigimg").fadeOut("slow");
			$("#filter-bg").fadeOut("slow");
		}
	);