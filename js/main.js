$(document).ready(function() {
  $(".before-after-slider").owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    nav: true,
    dots: false,
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

  $(".box-slider").owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    dots: false,
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

  $(".internal-service-box a").click(function() {
    $(".popup").toggleClass("none");
    $(".popup").addClass("animated fadeIn");
  });

  $(".popup").click(function(e) {
    if ($(e.target).closest(".popup-body form").length === 0) {
      $(".popup").addClass("none");
    }
  });

  var rellax = new Rellax(".rellax", {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
});
