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

    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        lockAnchors:true,
        afterLoad:function(anchorLink,direction){
            history.pushState(null, null, "index.html");
        }
    });

    $('a[href^="#"]').on('click', function(event) {
        var target = $( $(this).attr('href') );
        $.modal.close();
        // console.log(target);
        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 600);
           
        }
    });
})  