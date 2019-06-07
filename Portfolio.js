  $(document).ready(function () {
    $(window).scroll(function(){
      $("#welcome-section").css("opacity", 1 - $(window).scrollTop() / 450);
    });
});
