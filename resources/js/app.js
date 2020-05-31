$(document).ready(function () {
  //Navbar Toggler
  $(".navbar-toggler").click(function () {
    $(".navbar-toggler").toggleClass("change");
  });

  //Navbar Position Sticky
  $(window).scroll(function () {
    let position = $(this).scrollTop();

    if (position >= 718) {
      $(".navbar").addClass("navbar-background");
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("navbar-background");
      $(".navbar").removeClass("fixed-top");
    }
  });

  //Ripples by Water effect in Homepage
  $("#header, #homepage_top").ripples({
    dropRadius: 05,
    perturbance: 0.02,
  });

  //Magnific Popup by Menu Item img gallery show
  $(".parent-container").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
