$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 500) {
    $(".header_container, .icon, .btn1, .btn2").addClass("active");
  } else {
    $(".header_container, .icon, .btn1, .btn2").removeClass("active");
  }
});

// gnb

$(".gnb>li").mouseenter(function () {
  $(this).children(".sub_wrap").stop().slideDown("fast");
  // $(".gnb_wrap").addClass("active");
});
$(".gnb>li").mouseleave(function () {
  $(this).children(".sub_wrap").stop().slideUp("fast");
  // $(".gnb_wrap").removeClass("active");
});

// service
$(".service").mouseenter(function () {
  $(this).children(".sub_wrap").stop().slideDown("fast");
  // $(".gnb_wrap").addClass("active2");
});
$(".service").mouseleave(function () {
  $(this).children(".sub_wrap").stop().slideUp("fast");
  // $(".gnb_wrap").removeClass("active2");
});

// languages
$("#up1, #lang").hide();

$(".lang_text, #down1").on("click", function () {
  $("#down1, .lang_text").hide();
  $("#up1, #lang").show();
});
$("#lang, #up1").on("click", function () {
  $("#up1, #lang").hide();
  $("#down1, .lang_text").show();
});

$(".lang_slide").hide();

$(".lang_text, #down1").click(function () {
  $(".lang_slide").stop().slideDown("fast");
});

$(".lang_slide").find("p:first").addClass("active");

$(".lang_slide p").click(function () {
  if ($(this).hasClass("active")) {
    $(".lang_slide p").removeClass("active");
  } else {
    $(".lang_slide p").removeClass("active");

    $(this).addClass("active");
  }
});

$(document).mouseup(function (e) {
  if ($(".lang_slide").has(e.target).length === 0) {
    $(".lang_slide").slideUp("fast");
    $("#up1").hide();
    $("#down1").show();
    $("#lang").hide();
    $(".lang_text").show();
  }
});

// contact

$("#up2, #contact").hide();

$(".c_text, #down2").on("click", function () {
  $("#down2, .c_text").hide();
  $("#up2, #contact").show();
});
$("#contact, #up2").on("click", function () {
  $("#up2, #contact").hide();
  $("#down2, .c_text").show();
});

$(".contact").hide();

$(".c_text, #down2").click(function () {
  $(".contact").slideToggle("fast");
});

$(".contact").find("li:first").addClass("active");

$(".contact li").click(function () {
  if ($(this).hasClass("active")) {
    $(".contact li").removeClass("active");
  } else {
    $(".contact li").removeClass("active");

    $(this).addClass("active");
  }
});

$(document).mouseup(function (e) {
  if ($(".contact").has(e.target).length === 0) {
    $(".contact").slideUp("fast");
    $("#up2").hide();
    $("#down2").show();
    $("#contact").hide();
    $(".c_text").show();
  }
});

// search

$(".search").hide();

$("#search").on("click", function () {
  $(".search").show();
});

$("#close").on("click", function () {
  $(".search").hide();
});
