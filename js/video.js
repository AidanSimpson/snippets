/**
 * @file
 * Video script functionality.
 */

(function ($, Drupal) {

  $(function() {
    const play_btn = $('.path-frontpage .play-btn');
    const pause_btn = $('.path-frontpage .pause-btn');
    const toggleVideo = function() {
      let player = document.querySelector('.path-frontpage .field--name-field-media-oembed-video iframe');
      player = new Vimeo.Player(player);
      player.getPaused().then(function(paused) {
        if (paused) {
          player.play();  
        }
        else {
          player.pause();
        }
      });
      pause_btn.toggleClass('visually-hidden');
      play_btn.toggleClass('visually-hidden');
    }

    play_btn.on('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      play_btn.removeClass('pulse');
      toggleVideo();
    });

    pause_btn.on('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      toggleVideo();
    });

    setTimeout(function(){  
      if (!$('body').hasClass('reduce-motion')) {
        play_btn.addClass('pulse');  
      }
    }, 3000);  
  });

})(jQuery, Drupal);
