(function ($, Drupal) {

  Drupal.behaviors.eventsSlickConfig = {
    attach: function (context, settings) {
      // Parent element for slider.
      const slicksliders = $('.view-events.view-display-id-block_events_recent');
      // Apply sliders once.
      slicksliders.once('eventsSlickBlock').each(function(i, v) {
        // Element that contains slide elements.
        const slickslider = $(this).find('.view-content');
        // Slick slider config.
        const config = {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          infinite: false,
          speed: 700,
          autoplay: false,
          responsive: [
            {
              breakpoint: 999,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        };
        // Enable slick slider.
        slickslider.slick(config);
      });
    }
  };

} (jQuery, Drupal));
