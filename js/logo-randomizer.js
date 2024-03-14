/**
 * @file
 * Randomize Logo colour on page load.
 */

(function ($, Drupal) {

  $(function() {
    const options = ['logo-purple', 'logo-red', 'logo-green', 'logo-lime', 'logo-blue'];
    const randomColour = options[(Math.floor(Math.random() * options.length))];
    $('#logo').find('.logo-bg').addClass(randomColour);
  });

})(jQuery, Drupal);
