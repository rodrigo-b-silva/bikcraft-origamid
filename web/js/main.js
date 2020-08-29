$(document).ready(function() {
  $(".rslides").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  });
  
  
  Visibility.onVisible(function () {
    setTimeout(function() {
      $(".introducao h1").addClass("animate__animated animate__fadeInDown")
    }, 300);
    setTimeout(function() {
      $(".introducao blockquote").addClass("animate__animated animate__fadeInDown")
    }, 600);
    setTimeout(function() {
      $(".introducao .btn").addClass("animate__animated animate__fadeInDown")
    }, 900);
    setTimeout(function() {
      $(".animar").addClass("animate__animated animate__fadeInDown")
    }, 1200);

    setTimeout(function() {
      $(".introducao-interna h1").addClass("animate__animated animate__fadeInDown")
    }, 300);
    setTimeout(function() {
      $(".introducao-interna p").addClass("animate__animated animate__fadeInDown")
    }, 600);
    setTimeout(function() {
      $(".animar-interno").addClass("animate__animated animate__fadeInDown")
    }, 900);
  });
})