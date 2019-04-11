$(document).ready(function(){

  $(document).scroll(function(){
    //console.log($(window).scrollTop())
    if ($(window).scrollTop() > 0) {
      $(".nav").addClass("floating");
    } else {
      $(".nav").removeClass("floating");
    }
  });

  $(".nav__link").click(function(e) {
    e.preventDefault();
    var link = $(this).attr("href");
    console.log(link);
    $('html, body').animate({
       scrollTop: $(link).offset().top - 79
    }, 1000);
  });

  $(".header__button").click(function(){
    $('html, body').animate({
       scrollTop: $("#portfolio").offset().top - 80
    }, 1000);
  })

});
