/**
 * @file
 * Accessibility Modifications
 */

(function ($, Drupal) {
  $(function() {

    // If Details Summary is focusable then don't allow focus of the polyfilled anchor child
    $('details summary').focus(function() {
      $(this).find('a').attr('tabIndex', '-1');
    });
  });

})(jQuery, Drupal);
