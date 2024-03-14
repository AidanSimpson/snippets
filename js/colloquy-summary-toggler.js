/**
 * @file
 * colloquy summary toggle control
 */

(function ($, Drupal) {

  Drupal.behaviors.colloquySummaryToggleBehavior = {
    attach: function (context, settings) {
      const colloquySummary = $('.node--type-colloquy div.node--view-mode-hero');
      const toggle = $('#colloquy__summary__expand');
      const extraContent = $('#colloquy__summary__extra');
      colloquySummary.addClass('js-active');
      toggle.unbind('click');
      toggle.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        colloquySummary.toggleClass('expanded');
        extraContent.attr('aria-hidden') == 'true' ? extraContent.attr('aria-hidden', 'false') : extraContent.attr('aria-hidden', 'true'); 
        $(this).text() == "More" ? $(this).text("Less") : $(this).text("More");
        });
    }
  }

})(jQuery, Drupal);
