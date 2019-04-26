$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        dots: false,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            580: {
                items: 2
            },
            800: {
                items: 3
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    $('#fullpage').fullpage({});
})  