$(document).ready(function () {
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
