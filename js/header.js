// gnb
$(".gnb>li").mouseenter(function () {
  $(this).children(".sub_wrap").stop().slideDown("fast");
});
$(".gnb>li").mouseleave(function () {
  $(this).children(".sub_wrap").stop().slideUp("fast");
});

// search
$(".search_drop_down").hide();

$(".search").on("click", function () {
  $(".search_drop_down").stop().slideToggle();
});
