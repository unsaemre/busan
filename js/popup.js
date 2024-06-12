var popup = new Swiper(".third", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: "#count04",
    type: "fraction",
  },
  navigation: {
    nextEl: "#next04",
    prevEl: "#prev04",
  },
});

$("#play04").hide();

$("#pause04").on("click", function () {
  $(this).hide();
  $("#play04").show();
  popup.autoplay.stop();
});

$("#play04").on("click", function () {
  $(this).hide();
  $("#pause04").show();
  popup.autoplay.start();
});
