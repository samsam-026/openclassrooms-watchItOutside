$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class      
      if($(this).scrollTop() > 300) { 
          $('.navbar').addClass('solid').addClass('shadow');
      } else {
          $('.navbar').removeClass('solid').removeClass('shadow');
      }
    });
});