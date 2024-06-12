var main = new Swiper(".main", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: "#count01",
    type: "fraction",
  },
  navigation: {
    nextEl: "#next01",
    prevEl: "#prev01",
  },
});

$("#play01").hide();

$("#pause01").on("click", function () {
  $(this).hide();
  $("#play01").show();
  main.autoplay.stop();
});

$("#play01").on("click", function () {
  $(this).hide();
  $("#pause01").show();
  main.autoplay.start();
});
