document.addEventListener('DOMContentLoaded', function() {
    var carouselElement = document.querySelector('#carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000, // Change slide every 3 seconds
        ride: 'carousel'
    });

    // Optional: Additional control functions
    document.querySelector('.carousel-control-prev').addEventListener('click', function() {
        carousel.prev();
    });

    document.querySelector('.carousel-control-next').addEventListener('click', function() {
        carousel.next();
    });

    // Optional: Pause and cycle functions
    carouselElement.addEventListener('mouseenter', function() {
        carousel.pause();
    });

    carouselElement.addEventListener('mouseleave', function() {
        carousel.cycle();
    });
});
