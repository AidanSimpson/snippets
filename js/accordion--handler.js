/**
 * @file
 * Handle the accodion components
 */

(function ($, Drupal) {
  $(document).ready(function() {
    // Resource library
    const toggle = $('.path-node-3 .block-views-exposed-filter-block--resources-resource-library > h2');

    if (!toggle.length) {
     toggle = $('.path-taxonomy .block-views-exposed-filter-block--resources-resource-library > h2');
    }

    toggle.addClass('accordion-closed');
    toggle.parent().find('form').addClass('accordion-closed');
    toggle.parent().prepend('<h2 class="desktop-header">Filters</h2>');
    toggle.on('click', function(e) {
      toggleAccordion($(e.target));
    });

    if (!toggle.is('button')) {
      toggle.on('keypress', function(e) {
        if (e.which == 13 || e.which == 32) {
          toggleAccordion(e.target);
        }
      });
    }

    // Search page
    const sidebar = $('.path-node-1 .layout-sidebar-second');
    sidebar.find('.region--sidebar-second').addClass('accordion-closed');
    sidebar.prepend('<h2 class="desktop-header">Filters</h2>');
    sidebar.prepend('<h2 class="accordion-toggle">Show Filters</h2>');

    const sidebar_toggle = $('.accordion-toggle');
    sidebar_toggle.addClass('accordion-closed');
    sidebar_toggle.on('click', function(e) {
      toggleAccordion($(e.target));
    });

    if (!sidebar_toggle.is('button')) {
      sidebar_toggle.on('keypress', function(e) {
        if (e.which == 13 || e.which == 32) {
          toggleAccordion(e.target);
        }
      });
    }

    function toggleAccordion(e) {
      e.toggleClass('accordion-closed accordion-open');
      const form = e.parent().find('form').toggleClass('accordion-closed accordion-open');

      if (!form.length) {
        e.parent().find('.region--sidebar-second').toggleClass('accordion-closed accordion-open');
      }

      e.attr('aria-label', function(index, attr) {
        return attr == 'Click to show the content' ? 'Click to hide the content' : 'Click to show the content';
      });

      e.attr('aria-expanded', function(index, attr) {
        return attr == 'false' ? 'true' : 'false';
      });

      if (e.hasClass('accordion-open')) {
        e.text('Hide Filters');
      }
      else {
        e.text('Show Filters');
      }
    }
  })

})(jQuery, Drupal);
