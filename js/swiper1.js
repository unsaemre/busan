var swiper = new Swiper(".first", {
  slidesPerView: 4,
  slidesPerGroup: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: "#count02",
    type: "fraction",
  },
  navigation: {
    nextEl: "#next02",
    prevEl: "#prev02",
  },
});

$("#play02").hide();

$("#pause02").on("click", function () {
  $(this).hide();
  $("#play02").show();
  swiper.autoplay.stop();
});

$("#play02").on("click", function () {
  $(this).hide();
  $("#pause02").show();
  swiper.autoplay.start();
});
