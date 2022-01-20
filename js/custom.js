$(function(){
  // lodding
    $(window).on('load', function(){
      $('.log').delay(2000).fadeOut(500);

    });
  // lodding
    // topto button eadite
    $('.topto').click(function(){
        $('html, body').animate({scrollTop:0}, 2000);
    });
    // scrolling effect in top to button
    $(window).scroll(function(){
    var scrollIng = $(this).scrollTop();
    if(scrollIng > 500){
        $('.topto').fadeIn(2000);
    }
    else{
        $('.topto').fadeOut(500);
    }
    if(scrollIng > 100){
      $('#navbar').addClass('menu-fixed')
    }
    else{
      $('#navbar').removeClass('menu-fixed')
    }
    });
    // smooth scroll
    
$('#navbar a[href*="#"]')

.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
 
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
   
    if (target.length) {
      
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top -50
      }, 1000, function() {
        
        
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { 
          return false;
        } else {
          $target.attr('tabindex','-1'); 
          $target.focus(); 
        };
      });
    }
  }
});
});
