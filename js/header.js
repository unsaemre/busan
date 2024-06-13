//  sub 1
$(".sub_wrap").hide();

$(".header .gnb li:first").mouseenter(function () {
  $("#sub1").stop().slideDown();
});
$(".header .gnb li").mouseleave(function () {
  $("#sub1").stop().slideUp();
});

//  sub 2
$(".sub_wrap").hide();

$(".header .gnb li:nth-child(2)").mouseenter(function () {
  $("#sub2").stop().slideDown();
});
$(".header .gnb li").mouseleave(function () {
  $("#sub2").stop().slideUp();
});

//  sub 3
$(".sub_wrap").hide();

$(".header .gnb li:nth-child(3)").mouseenter(function () {
  $("#sub3").stop().slideDown();
});
$(".header .gnb li").mouseleave(function () {
  $("#sub3").stop().slideUp();
});

//  sub 4
$(".sub_wrap").hide();

$(".header .gnb li:nth-child(4)").mouseenter(function () {
  $("#sub4").stop().slideDown();
});
$(".header .gnb li").mouseleave(function () {
  $("#sub4").stop().slideUp();
});

// search
$(".search_drop_down").hide();

$(".search").on("click", function () {
  $(".search_drop_down").stop().slideToggle();
});
