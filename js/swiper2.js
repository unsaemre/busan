var swiper2 = new Swiper(".second", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: "#count3",
    type: "fraction",
  },
  navigation: {
    nextEl: "#next03",
    prevEl: "#prev03",
  },
});

$("#play03").hide();

$("#pause03").on("click", function () {
  $(this).hide();
  $("#play03").show();
  swiper2.autoplay.stop();
});

$("#play03").on("click", function () {
  $(this).hide();
  $("#pause03").show();
  swiper2.autoplay.start();
});
