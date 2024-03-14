/**
 * @file
 * Sticky header menu.
 */

(function ($, Drupal) {

  $(window).on('scroll', function() {
    if (window.scrollY > 74) {
      $('.region--sticky').addClass('fixed-top');
    } else {
      $('.region--sticky').removeClass('fixed-top');
    }
  });

})(jQuery, Drupal);
