$(document).ready(function() {
  $(".before-after-slider").owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  $(".footer-links a").click(function() {
    $(".popup").toggleClass("none");
    $(".popup").addClass("animated fadeIn");
  });

  $(".ser-link").click(function() {
    $(".popup").toggleClass("none");
    $(".popup").addClass("animated fadeIn");
  });

  $(".popup").click(function(e) {
    if ($(e.target).closest(".popup-body form").length === 0) {
      $(".popup").addClass("none");
    }
  });
});
