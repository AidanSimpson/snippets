/**
 * @file
 * Toggle between grid and list display on calendar events view.  
 */

(function ($, Drupal) {

  $(function() {
      // Toggle between the view displays.
      // We are setting the data attribute on the container element, since ajax refreshes the view element itself on filter change.
      $(".display-toggle--grid-view").click(function() {
        $(this).addClass('active');
        $(".display-toggle--list-view").removeClass('active');
        $(this).parents('.views-element-container').attr('data-view-display-list', 'false');
      });
      $(".display-toggle--list-view").click(function() {
        $(this).addClass('active');
        $(".display-toggle--grid-view").removeClass('active');
        $(this).parents('.views-element-container').attr('data-view-display-list', 'true');
      });
  });

})(jQuery, Drupal);
