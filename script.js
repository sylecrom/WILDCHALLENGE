/* Animation On Scroll */
new WOW().init();


/* control de l'audio en Background */

var audio = document.getElementById('background_audio');

document.getElementById('mute').addEventListener('click', function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);

/*  effet Parallax
*/
$.fn.parallax = function(strength) {
    var scroll_top = $(window).scrollTop();
    var move_value = Math.round(scroll_top * strength);
    this.css('background-position', '0 -'+ move_value +'px');
};

$(window).on('scroll', function() {
    $('header').parallax(0.3);
    $('.bandeau_1').parallax(0.1);
		$('.bandeau_2').parallax(0.1);
		$('.bandeau_3').parallax(0.1);
		$('.bandeau_4').parallax(0.1);
    $('.three').parallax(0.2);
});



/*  Effet StickyNAV*/

function sticky_relocate() {
      var window_top = $(window).scrollTop();
      var div_top = $('#content-anchor').offset().top;
      if (window_top > div_top) {
        $('#sticky').addClass('stick');
        $('#sticky-phantom').show();
      } else {
        $('#sticky').removeClass('stick');
        $('#sticky-phantom').hide();
      }
    }

    $(function () {
      $(window).scroll(sticky_relocate);
      sticky_relocate();
    });
		
/* smooth scroll */

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



