window.onscroll = function () {
  scrollFunction()
};

$(window).scroll(function () {
  if ($(document).scrollTop() > 300) {
    $(".back-to-top").css({
      display: 'block'
    });
  } else {
    $(".back-to-top").css({
      display: 'none'
    });
  }
});