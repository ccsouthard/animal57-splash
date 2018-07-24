function setupCarousel($carousel) {
    var $slides = $carousel.querySelectorAll('.carousel-slide'),
        $selectors = $carousel.querySelectorAll('.carousel-select a'),
        $descriptions = $carousel.querySelectorAll('.carousel-desc > p'),
        $btnNext = $carousel.querySelector('.carousel-next'),
        $btnPrev = $carousel.querySelector('.carousel-prev');

    var hasSelectors = $selectors.length == $slides.length,
        hasDescriptions = $descriptions.length == $slides.length,
        currentSlideIndex = 0;

    var toggleCurrentSlide = function(enabled) {
        $slides[currentSlideIndex].classList.toggle('carousel-current', enabled);
        if (hasSelectors)
            $selectors[currentSlideIndex].classList.toggle('carousel-current', enabled);
        if (hasDescriptions)
            $descriptions[currentSlideIndex].classList.toggle('carousel-current', enabled);
    }

    var changeSlide = function(delta, isIdx) {
        toggleCurrentSlide(false);

        if (isIdx) currentSlideIndex = delta;
        else currentSlideIndex += delta;

        if (currentSlideIndex < 0) {
            currentSlideIndex = $slides.length-1;
        } else if (currentSlideIndex >= $slides.length) {
            currentSlideIndex = 0;
        }

        toggleCurrentSlide(true);
    }
    
    toggleCurrentSlide(true);

    if (hasSelectors) {
        for (var i = 0; i < $selectors.length; i++) {
            var createListener = function(i) {
                return function(e) {
                    e.preventDefault();
                    changeSlide(i, true);
                }
            }
            $selectors[i].addEventListener('click', createListener(i));
        }
    }

    if ($btnNext) $btnNext.addEventListener('click', function(e) {
        e.preventDefault();
        changeSlide(+1);
    });
    if ($btnPrev) $btnPrev.addEventListener('click', function(e) {
        e.preventDefault();
        changeSlide(-1);
    });

    if ($carousel.dataset.interval) {
        var mouseIn = false;

        window.setInterval(function() {
            if (!mouseIn) changeSlide(+1);
        }, $carousel.dataset.interval);

        $carousel.addEventListener('mouseover', function() {
            mouseIn = true;
        });
        $carousel.addEventListener('mouseout', function() {
            mouseIn = false;
        });
    }
}

var $carousels = document.querySelectorAll('.carousel');
for (var i = 0; i < $carousels.length; i++) {
    setupCarousel($carousels[i]);
}