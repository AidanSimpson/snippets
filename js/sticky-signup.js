/**
 * @file
 * Sticky newsletter signup block
 */

(function ($, Drupal) {

  $(window).on('scroll', function() {
    if($(window).scrollTop() + $(window).height() >= $(document).height()) {
      $('.node--type-blog .block-mailchimp-signup form').addClass('reach-bottom');
    } else {
      $('.node--type-blog .block-mailchimp-signup form').removeClass('reach-bottom');
    }
  });

})(jQuery, Drupal);