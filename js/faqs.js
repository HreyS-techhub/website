var togSrc = ["image/icons/plus-solid.svg", "image/icons/minus-solid.svg"];

$(".question").on('click', function() {
    this.src = togSrc[this.src.match('plus') ? 1 : 0 ];
    $(this).attr("cursor")
    $(this).next("div").next("div").slideToggle();

  });
  
$(document).ready(function() {
    $(".answer").hide();
})