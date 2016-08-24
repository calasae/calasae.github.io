$(document).ready(
  function(){
    $(location).attr('href', 'https://www.ocf.berkeley.edu/~asae/index.html');

  }
);

$("#splash-button").hover(
	function(){
		$("#splash-button h3").css("color", "rgb(255, 210, 0)");
	},
	function(){
		$("#splash-button h3").css("color", "rgb(0, 25, 65)");
	});
