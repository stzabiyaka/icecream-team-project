$(document).ready(function(){
 
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.home-button').fadeIn();
} else {
$('.home-button').fadeOut();
}
});
 
$('.home-button').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});
 
});
