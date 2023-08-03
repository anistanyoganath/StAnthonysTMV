//add header for all pages
{document.getElementById('header-all').innerHTML+=
`<div class="container">
<div class="row">
    <div class="col-12">
        <nav class="navbar navbar-expand-lg">
            <!-- Logo -->
            <a class="navbar-brand" href="index.html"><img src="datas/core-img/logo.png" alt="Logo"></a>
            <!-- Navbar Toggler -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#worldNav" aria-controls="worldNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <!-- Navbar -->
            <!-- Navbar -->
            <div class="collapse navbar-collapse" id="worldNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href='index.html'>Home </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href='blog-page.html'>Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href='gallery-page.html'>Galleries</a>
                    </li>
                
                    <li class="nav-item">
                        <a class="nav-link" href="about-page.html">About</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">e-Learning</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="https://www.e-thaksalawa.moe.gov.lk/web/ta/" target='_blank'>e-thaksalawa</a>
                            <a class="dropdown-item" href="https://www.youtube.com/c/ChannelNIE/videos" target='_blank'>Channel NIE</a>
                            <a class="dropdown-item" href="http://nie.lk/seletguide3" target='_blank'>Teacher Guide</a>
            
                        </div>
                    </li>
        
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
                <!-- Search Form  -->
                <div id="search-wrapper">
                    <form action="#">
                        <input type="text" id="search" placeholder="Search something...">
                        <div id="close-icon"></div>
                        <input class="d-none" type="submit" value="">
                    </form>
                </div>
            </div>
        </nav>
    </div>
</div>
</div>`}
{
    document.getElementById('footer-all').innerHTML+=
    `<div class="container">
    <div class="row">
        <div class="col-12 col-md-4">
            <div class="footer-single-widget">
                <a href="#"><img src="datas/core-img/logo.png" alt=""></a>
                <a target="_blank" href="https://www.facebook.com/CSt-Anthonys-Tamil-Maha-Vidyalayam-Col-14-102566854626267/?sfnsn=mo"><i class="fa fa-facebook"></i></a>
                    <a target="_blank" href="https://twitter.com/st_anthonys_tmv?lang=en"><i class="fa fa-twitter"></i></a>
                    <a target="_blank" href="https://www.instagram.com/st_anthonys_tmv_col14/"><i class="fa fa-instagram"></i></a>
                    <a href="mailto: stathonystmvcol14@gmail.com"><i class="fa fa-google"></i></a>
                <div class="copywrite-text mt-30">
                    <p><li><a href="about-page.html#history">WP/C/St.Anthony's Tamil Maha Vidyalayam.</a></li>
                        <li><a href="contact.html">Mahawatta, Colombo-14, Sri Lanka</a></li>
                        <li><a href="tel:0112529081"> 0112529081</a></li>
<p>St.Anthony's T.M.V&copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</p> <p>| This website is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://www.facebook.com/iamanistanyoganath?sfnsn=mo" target="_blank">AY Studios</a> |</p>
</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="footer-single-widget">
                <ul class="footer-menu d-flex justify-content-between">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="blog-page.html">Blog</a></li>
                    <li><a href="gallery-page.html">Gallery</a></li>
                    <li><a href="about-page.html">About</a></li>
                    <li><a href="Download.html">Downloads</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>                    
        </div>                             
        <div class="col-12 col-md-4"> 
            <div class="footer-single-widget">
                <h5>Subscribe</h5>
                <form action="#" method="post">
                    <input type="email" name="email" id="email" placeholder="Enter your mail">
                    <button type="button"><i class="fa fa-arrow-right"></i></button>
                </form>
            </div>                   
        </div>
    </div>
</div>
    `
}

(function ($) {
    'use strict';

    var $window = $(window);

    // :: Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: Fullscreen Active Code
    $window.on('resizeEnd', function () {
        $(".full_height").height($window.height());
    });

    $window.on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // :: Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 20) {
            $('.header-area').addClass('sticky');
        } else {
            $('.header-area').removeClass('sticky');
        }
    });

    // :: Tooltip Active Code
    $('[data-toggle="tooltip"]').tooltip();

    // :: Owl Carousel Active Code
    if ($.fn.owlCarousel) {

        var welcomeSlide = $('.hero-slides');

        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000, // Autoplay Timeout 1s = 1000ms
            smartSpeed: 2000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        $('.hero-post-slide').owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3500, // Autoplay Timeout 1s = 1000ms
            smartSpeed: 1000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });

        $('.world-catagory-slider, .world-catagory-slider2').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3500, // Autoplay Timeout 1s = 1000ms
            smartSpeed: 2000,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });
    }

    // :: Gallery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // :: Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.sonar-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.sonar-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    // :: Magnific Popup Active Code
    if ($.fn.magnificPopup) {
        $('.gallery-img').magnificPopup({
            type: 'image'
        });
        $('.video-btn').magnificPopup({
            type: 'iframe'
        });
    }

    // :: MatchHeight Active Code
    if ($.fn.matchHeight) {
        $('.equalize').matchHeight({
            byRow: true,
            property: 'height'
        });
    }

    // :: CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
        });
    }

    // :: PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    /* Search Area */
    var search = document.getElementById('search'),
        searchWrapper = document.getElementById('search-wrapper'),
        closeIcon = document.getElementById('close-icon');
    search.onfocus = function () {
        searchWrapper.classList.add('search-expanded');
        this.addEventListener('transitionend', function () {
            closeIcon.style.display = 'block';
        });
    }
    search.onblur = function () {
        searchWrapper.classList.remove('search-expanded');
        closeIcon.classList.add('closing');
        this.addEventListener('transitionend', function () {
            closeIcon.classList.remove('closing');
            closeIcon.style.display = 'none';
        });
    }
    closeIcon.onclick = function () {
        this.classList.add('closing');
        document.activeElement.blur();
        setTimeout(function () {
            closeIcon.classList.remove('closing');
        }, 1000);
    }
    

})(jQuery);


