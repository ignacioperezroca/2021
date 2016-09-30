// -------------------------
// ANIMATIONS
// -------------------------

$(document).ready(function(){

  // Wrapper TOGGLE
  $(".navbar-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("sidebar-toggle");
  });
  $("#sidebar-closebox").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("sidebar-toggle");
  });

  // Go to SIDEBAR
  function scrollToAnchor(aid){
     var aTag = $("#"+ aid);
     $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }
  // Go to LG
  $('.godown').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('services');
  });
  $('.gotop').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('wrapper');
  });

  $('[data-toggle="tooltip"]').tooltip()

  $('img').not('.img-hover').load(function() {
    
    $(this).animate({opacity: 1},
      {duration: 300});
  });

});

