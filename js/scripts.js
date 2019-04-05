$(document).ready(function(){

  $(document).scroll(function(){
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 0) {
      $(".nav").addClass("floating");
    } else {
      $(".nav").removeClass("floating");
    }
  });

});
