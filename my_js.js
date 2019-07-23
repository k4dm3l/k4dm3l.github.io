function goToSection(section){
	const scroll = section.id+"-section";
	document.getElementById(scroll).scrollIntoView(true);
}

function openMenu() {
  const menu = document.getElementById('menu-options')
  menu.classList.toggle('is-active')
}

AOS.init();

/*********************************
 *  JQUERY - GO TOP ARROW SCRIPT *
 *********************************/
$(window).scroll(function() {
  if($(this).scrollTop() >= 50){
    $('.go-top').fadeIn(200);
  } else {
    $('.go-top').fadeOut(200);
  }
});
$('.go-top').click(function() {
  $('body,html').animate({
    scrollTop : 0
  }, 500);
});

