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

  if ($("#contact-section").length) {
    var waypoint = new Waypoint({
      element: document.getElementById("contact-section"),
      handler: function() {
        $(".video-1").attr("src", $(".video-src1").attr("src"));
        $(".video-2").attr("src", $(".video-src2").attr("src"));
        $(".video-3").attr("src", $(".video-src3").attr("src"));
        $(".video-4").attr("src", $(".video-src4").attr("src"));
        $(".video-5").attr("src", $(".video-src5").attr("src"));
        $(".video-6").attr("src", $(".video-src6").attr("src"));

        var imgEl = document.getElementsByTagName("img");
        for (var i = 0; i < imgEl.length; i++) {
          if (imgEl[i].getAttribute("data-src")) {
            imgEl[i].setAttribute("src", imgEl[i].getAttribute("data-src"));
            imgEl[i].removeAttribute("data-src"); //use only if you need to remove data-src attribute after setting src
          }
        }
      },
      offset: "70%"
    });
  }
});
