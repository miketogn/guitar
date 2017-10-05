/* Init doc and show menu function */

$(document).ready(function() {
	$(".close").hide();
	$(".menu").hide();
	$(".hamburger").click(function() {
		$(".menu").slideToggle(function() {
			$(".hamburger").hide();
			$(".close").show();
		});
	});

/* Close Menu */

	$(".close").click(function() {
		$(".menu").slideToggle(function() {
			$(".close").hide();
			$(".hamburger").show();
		});
	});
});