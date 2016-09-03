$(document).foundation();

$(document).ready(function() {
	$('.toggle').click(function() {
		$('.menu-mobile').slideToggle('fast');
	});
});

$("#shareRoundIcons").jsSocials({
    showLabel: false,
    showCount: false,
    shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "whatsapp"]
});