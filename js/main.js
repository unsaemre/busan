//  main slide
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

new Swiper(".text-slide", {
  direction: "vertical",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
});

//

// $(function () {
//   var ticker = function () {
//     setTimeout(function () {
//       $("#ticker li:first").animate({ marginTop: "-20px" }, 500, function () {
//         $(this).detach().appendTo("ul#ticker").removeAttr("style");
//       });
//       ticker();
//     }, 3100);
//   };
//   ticker();
// });

// $("#play01").on("click", function () {
//   $(this).hide();
//   $("#pause01").show();
//   main.autoplay.start();
// });

// section 1
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

//    section 2
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

//    popup
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
