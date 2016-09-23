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

  $('.go-park').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('park');
    $('.sidebar-wrapper').toggleClass('toggled');
  });
  $('.go-services').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('services');
    $('.sidebar-wrapper').toggleClass('toggled');
  });
  $('.go-infrastructure').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('infrastructure');
    $('.sidebar-wrapper').toggleClass('toggled');
  });
  $('.go-comunity').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('comunity');
    $('.sidebar-wrapper').toggleClass('toggled');
  });
  $('.go-location').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('location');
    $('.sidebar-wrapper').toggleClass('toggled');
  });
  $('.go-contact').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('contact');
    $('.sidebar-wrapper').toggleClass('toggled');
  });

  // Go to LG

  $('.godown').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('services');
  });
  $('.gotop').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('top');
  });

  // $('.home').click(function(){
  //   $('body').stop().animate({scrollTop:0}, '500', 'swing');
  // });

  $('.park').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('park');
    event.preventDefault();
  });
  $('.services').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('services');
    event.preventDefault();
  });
  $('.infrastructure').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('infrastructure');
    event.preventDefault();
  });
  $('.comunity').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('comunity');
    event.preventDefault();
  });
  $('.location').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('location');
    event.preventDefault();
  });
  $('.contact').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('contact');
    event.preventDefault();
  });

  $('[data-toggle="tooltip"]').tooltip()


  // NAVBAR ACTIVE scroll

  $(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) { 
        $('section').each(function(i) {
            if ($(this).position().top <= windscroll - 100) {
                $('.navbar-nav li.active').removeClass('active');
                $('.navbar-nav li').eq(i).addClass('active');
            }
        });
    } else { 
        $('nav a.active').removeClass('active');
        $('nav a:first').addClass('active'); 
    }
    // FIX LAST SECTION
    if ($('body').height() <= ($(window).height() + windscroll)) {
      $('.navbar-nav li.active').removeClass('active');
      $(".navbar-nav li").last().addClass('active'); 
    }
});


});

