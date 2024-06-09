$(document).ready(function() {
    var $carousel = $('#carouselExampleIndicators');

    $carousel.on('touchstart', function(event) {
      var xClick = event.originalEvent.touches[0].pageX;
      $(this).one('touchmove', function(event) {
        var xMove = event.originalEvent.touches[0].pageX;
        if(Math.floor(xClick - xMove) > 5) {
          $(this).carousel('next');
        }
        else if(Math.floor(xClick - xMove) < -5) {
          $(this).carousel('prev');
        }
      });
      $carousel.on('touchend', function() {
        $(this).off('touchmove');
      });
    });

    var isDragging = false,
        startClientX = 0;

    $carousel.on('mousedown', function(event) {
      isDragging = true;
      startClientX = event.clientX;
    });

    $(document).on('mousemove', function(event) {
      if(isDragging) {
        var xMove = event.clientX;
        if(Math.floor(startClientX - xMove) > 5) {
          $carousel.carousel('next');
          isDragging = false;
        }
        else if(Math.floor(startClientX - xMove) < -5) {
          $carousel.carousel('prev');
          isDragging = false;
        }
      }
    });

    $(document).on('mouseup', function() {
      isDragging = false;
    });
  });
