$(document).ready(function() {
    
    /*-------------------STICKY NAVIGATION-----------------------*/
 $('.js-section-features').waypoint(function(direction){
    if(direction == "down"){
        $('nav').addClass('sticky');
        
    }else{
        $('nav').removeClass('sticky');
    }
            }, { offset: '70px;'

});
    
    /*-------------------- BUTTON-NAVIGATION --------------------------*/
    $('.js-button-hun').click(function(){
        $('html,body').animate({scrollTop: $('.js-section-plans').offset().top},1000);
    });
    $('.js-button-more').click(function(){
        $('html,body').animate({scrollTop: $('.js-section-features').offset().top},1000);
    });
    $('.logo-black').click(function(){
        $('body,html').animate({scrollTop: $('body').offset().top},1000);
    });
   

/*--------------------------NAVIGATION -SCROLLLING----------*/
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });

/*--------------------------Animations------------------------------------------*/
    $('.js-animate-features').waypoint(function(direction){
        $('.js-animate-features').addClass('animated fadeIn');
    },{
        offset: '50%;'
    })
     $('.js-animate-popup').waypoint(function(direction){
        $('.js-animate-popup').addClass('animated fadeInLeft');
    },{
        offset: '50%;'
    })
    $('.js-animate-tada').waypoint(function(direction){
        $('.js-animate-popup').addClass('animated tada');
    },{
        offset: '50%;'
    })
      $('.js-animate-pulse').waypoint(function(direction){
        $('.js-animate-pulse').addClass('animated pulse');
    },{
        offset: '50%;'
    })
    $('.js-animate-flipInX').waypoint(function(direction){
        $('.js-animate-flipInX').addClass('animated flipInX');
    },{
        offset: '50%;'
    })
   
   
});