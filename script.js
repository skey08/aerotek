$( document ).ready(function() {

  $("#one").click(function() {
    $(this).find('span').toggleClass("glyphicon-chevron-up");
    $(this).find('span').toggleClass("glyphicon-chevron-down");
    $("#pone").toggle();
  })

  $("#two").click(function() {
    $(this).find('span').toggleClass("glyphicon-chevron-up");
    $(this).find('span').toggleClass("glyphicon-chevron-down");
    $("#ptwo").toggle();
  })

  $("#three").click(function() {
    $(this).find('span').toggleClass("glyphicon-chevron-up");
    $(this).find('span').toggleClass("glyphicon-chevron-down");
    $("#pthree").toggle();
  })

});
