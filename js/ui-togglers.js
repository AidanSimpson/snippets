/**
 * @file
 * UI toggler elements control
 */

(function ($, Drupal) {

  $(function() {
    // Add menu control to the custom close button in the mobile navigation panel
    $('.mm-navbar').append('<a href="#" class="close-menu">Close Menu</a>');
    // Set the api variable and acess the mm-menu API
    const api = $('#off-canvas').data('mmenu');
    $('.close-menu').click(function() {
      $(this).preventDefault;
      // ===== Trigger the mm-menu close function
      api.close();
    });
  });

})(jQuery, Drupal);
