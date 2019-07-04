$(function() {

    console.log('sdsdsd')
    //start smooth scroll
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    $("input:file").change(function() {
        var fileName = $(this).val().replace(/C:\\fakepath\\/i, '');
        $(".file-text").text(fileName);
        $('.resume').css({
          'color': 'black',
          'border-bottom': '1px solid black'
        });
        $('.box').css('border', '1px solid black');
    });

    $("#mainform").submit(function() {

        var form = new FormData(document.getElementById('mainform'));
        //append files
        var file = document.getElementById('resume').files[0];
        if (file) {
            form.append('resume', file);
        }
        if ($('#resume').get(0).files.length === 0) {
            $('.resume').css({
              'color': 'red',
              'border-bottom': '1px solid red'
            });
            $('.box').css('border', '1px solid red');
            return false;
        }
        $.ajax({
            url: '/wp-content/themes/beeworking/mail.php',
            type: "POST",
            contentType: false,
            cache: false,
            processData: false,
            data: form,
            success:function(response) {
                if(response != 'bad_file') {
                    $("#mainform").html("<h1 style='text-align:center;color:green;'>Thank you. We will contact with you soon.</h1>");
                } else {
                    $("#mainform").html("<h1 style='text-align:center;color:red;'>Oh nooo.. Bad file type, please try again</h1>");
                }

            }
        });
        return false;
    });
    $( document ).ajaxStart(function() {
      $('#send_button').hide();
      $('.spinner').show();
    });

    //Animations
    setTimeout(function() {
        $('.slide__topline1, .slide__topline2, .slide__right-line, .slide__left-line, .slide__botline1, .slide__botline2, .slide__title').addClass('active');
    }, 100);

    //mobile open close functionality
    $('#buter').click(function() {
        $(this).toggleClass('open');
        $('.mobile-container').toggleClass('open');
    });

    function randomFromTo(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }

    function moveRandom(obj) {
        /* get container position and size
         * -- access method : cPos.top and cPos.left */
        var cPos = $('.slide').offset();
        var cHeight = $('.slide').height();
        var cWidth = $('.slide').width();

        // get box padding (assume all padding have same value)
        // get movable box size
        var bHeight = obj.height();
        var bWidth = obj.width();

        // set maximum position
        maxY = cPos.top + cHeight - bHeight;
        maxX = cPos.left + cWidth - bWidth;

        // set minimum position
        minY = cPos.top;
        minX = cPos.left;

        // set new position
        newY = randomFromTo(minY, maxY);
        newX = randomFromTo(minX, maxX);

        obj.animate({
            top: newY,
            left: newX
        }, 5000, "linear", function() {
            moveRandom(obj);
        });
    }

    function startAnim(e) {
        $('.slide__ball1').each(function() {
            $(this).addClass('active');
            moveRandom($(this));
        });
    }

    startAnim();

    //scroll animation
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

    //parallax
    $(window).on('scroll', function() {
        window.requestAnimationFrame(function() {
            //var bgParallaxPos = $(window).scrollTop();
            if ($('.little-ball').length && $('.big-ball').length) {
                offset1 = $('.little-ball').offset();
                offset2 = $('.big-ball').offset();
                viewPosition1 = offset1.top - $(window).scrollTop();
                viewPosition2 = offset2.top - $(window).scrollTop();
                //viewPosition3 = offset3.top - $(window).scrollTop();

                $('.little-ball').css({
                    'transform': 'translate3d(0,' + viewPosition1 * 0.2 + 'px, 0)'
                });
                $('.big-ball').css({
                    'transform': 'translate3d(0,' + viewPosition2 * 0.3 + 'px, 0)'
                });
            }
        });
    });
});
