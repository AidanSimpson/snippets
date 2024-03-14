/**
 * @file
 * Search toggle control
 */

(function ($, Drupal) {

  Drupal.behaviors.searchToggleBehavior = {
    attach: function (context, settings) {
      const searchForm = $('.tfi-search-desktop-header');
      const searchButton = $('.tfi-search-desktop-search');
      const searchFormInput = $('#edit-search-content');
      const toggle = $('.region--masthead-prefix #search-toggle');
      toggle.unbind('click');
      toggle.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        searchForm.toggleClass('active');
        searchButton.toggleClass('active');
      });

      toggle.on('keydown', function(e) {
        if(e.which === 13 || e.which === 32) { // fire event when enter or Space is clicked
          e.preventDefault();
          e.stopPropagation();
          searchForm.toggleClass('active');
          searchButton.toggleClass('active');
          searchFormInput.focus(); // move focus indicator to form input
        }
      })
    }
  }

})(jQuery, Drupal);
