function scrollToId(id) {
  var elmnt = document.getElementById(id);
  elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

$(document).scroll(function () {
  headerClass();
});

function headerClass() {
  var scrolled = $(document).scrollTop();
  if (scrolled >= ($('#logo').offset().top)) {

    $('.header').addClass('visible');
    $('#headerlogo').addClass('visible');
    $('#logo').removeClass('visible');
    $('.logo-triangles').addClass('visible');
  } else {
    $('#headerlogo').removeClass('visible');
    $('#logo').addClass('visible');
    $('.header').removeClass('visible');
    $('.logo-triangles').removeClass('visible');
  }
  if (scrolled >= ($('.features').offset().top) - 80) {
    $('#menu-button').addClass('action');
  } else {
    $('#menu-button').removeClass('action');
  }
}