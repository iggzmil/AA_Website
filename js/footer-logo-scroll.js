/**
 * Footer Logo Back to Top Functionality
 * This script adds back-to-top functionality to the footer logo
 */

(function($) {
  "use strict";
  
  $(document).ready(function() {
    // Add cursor pointer and hover effect to the footer logo
    $('#logo-footer').css({
      'cursor': 'pointer',
      'transition': 'transform 0.3s ease'
    });
    
    // Add hover effect
    $('#logo-footer').hover(
      function() {
        $(this).css('transform', 'translateY(-5px)');
      },
      function() {
        $(this).css('transform', 'translateY(0)');
      }
    );
    
    // Add click event to scroll to top
    $('#logo-footer').on('click', function() {
      // Scroll to top with animation
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      
      // Optional: Add a small bounce animation to the logo when clicked
      $(this).css('transform', 'translateY(-10px)');
      setTimeout(function() {
        $('#logo-footer').css('transform', 'translateY(0)');
      }, 300);
      
      return false;
    });
  });
  
})(jQuery);
