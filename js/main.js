/*-----------------------------------------------------------------------------------

    Theme Name: Chargey - Electric Vehicle Charging Station
    Description: Electric Vehicle Charging Station
    Author: Chitrakoot Web
    Version: 1.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. Sticky Header
        03. Scroll To Top
        04. Parallax
        05. Video
        06. Resize function
        07. FullScreenHeight function
        08. ScreenFixedHeight function
        09. Copy to clipboard
        10. FullScreenHeight and screenHeight with resize function
        11. Sliders
        12. Tabs
        13. CountUp
        14. Countdown
        15. Current Year
        16. Gallery
        
    ---------------------------------- */


function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
include("js/custom.js");

(function($) {

    "use strict";

    var $window = $(window);

        /*------------------------------------
            01. Preloader
        --------------------------------------*/

        $('#preloader').fadeOut('normall', function() {
            $(this).remove();
        });

        /*------------------------------------
            02. Sticky Header
        --------------------------------------*/

        $window.on('scroll', function() {
            var scroll = $window.scrollTop();
            var logochange = $(".navbar-brand img");
            var logodefault = $(".navbar-brand.logodefault img");
            if (scroll <= 50) {
                $("header").removeClass("scrollHeader").addClass("fixedHeader");
                logochange.attr('src', 'img/logos/Mobi-Vista-White.png');
                logodefault.attr('src', 'img/logos/Mobi-Vista.png');
            } 
            else {
                $("header").removeClass("fixedHeader").addClass("scrollHeader");
                logochange.attr('src', 'img/logos/Mobi-Vista.png');
                logodefault.attr('src', 'img/logos/Mobi-Vista.png');
            }
        });


        /*------------------------------------
            03. Scroll To Top
        --------------------------------------*/

        $window.on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $(".scroll-to-top").fadeIn(400);

            } else {
                $(".scroll-to-top").fadeOut(400);
            }
        });

        $(".scroll-to-top").on('click', function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 600);
        });

        /*------------------------------------
            04. Parallax
        --------------------------------------*/

        // sections background image from data background
        var pageSection = $(".parallax,.bg-img");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });

        /*------------------------------------
            05. Video
        --------------------------------------*/

        // It is for local video
        $('.story-video').magnificPopup({
            delegate: '.video',
            type: 'iframe'
        });

        $('.source-modal').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            removalDelay: 160
        });

        $('.video-link-popup').magnificPopup({
            type: 'iframe',
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    }
                }
            }
        });

        /*------------------------------------
            06. Resize function
        --------------------------------------*/

        $window.resize(function(event) {
            setTimeout(function() {
                SetResizeContent();
            }, 500);
            event.preventDefault();
        });

        /*------------------------------------
            07. FullScreenHeight function
        --------------------------------------*/

        function fullScreenHeight() {
            var element = $(".full-screen");
            var $minheight = $window.height();
            element.css('min-height', $minheight);
        }

        /*------------------------------------
            08. ScreenFixedHeight function
        --------------------------------------*/

        function ScreenFixedHeight() {
            var $headerHeight = $("header").height();
            var element = $(".screen-height");
            var $screenheight = $window.height() - $headerHeight;
            element.css('height', $screenheight);
        }

        /*------------------------------------
            09. Copy to clipboard
        --------------------------------------*/

        if ($(".copy-clipboard").length !== 0) {
            new ClipboardJS('.copy-clipboard');
            $('.copy-clipboard').on('click', function() {
                var $this = $(this);
                var originalText = $this.text();
                $this.text('Copied');
                setTimeout(function() {
                    $this.text('Copy')
                    }, 2000);
            });
        };

        /*------------------------------------
            10. FullScreenHeight and screenHeight with resize function
        --------------------------------------*/        

        function SetResizeContent() {
            fullScreenHeight();
            ScreenFixedHeight();
        }

        SetResizeContent();

    // === when document ready === //
    $(document).ready(function(){

        /*------------------------------------
            11. Sliders
        --------------------------------------*/

        // testmonial-carousel3
        $('.testimonial-carousel3').owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: false,
            dots: false,
            margin: 0,
            center: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });

        // portfolio-carousel
        $('.portfolio-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            center: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            margin: 40,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                },
                1201: {
                    items: 4
                }
            }
        });

        // portfolio-detail-carousel
        $('.portfolio-detail-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            center: false,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            margin: 40,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                },
                1201: {
                    items: 3                            
                }
            }
        });

        // history-carousel
        $('.history-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: false,
            center: true,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

        // Sliderfade
        $('.slider-fade2').owlCarousel({
            items: 1,
            loop:true,
            dots: true,
            margin: 0,
            nav: false,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            autoplay: true,
            smartSpeed:1500,
            mouseDrag:false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                992: {
                nav: true,
                dots: false
                }
            }
            
        }); 
        
        // Default owlCarousel
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            dots: false,
            margin: 0,
            autoplay:true,
            smartSpeed:500
        });   

        // Slider text animation
        var owlTwo = $('.slider-fade2');
        owlTwo.on('changed.owl.carousel', function(event) {
            var item = event.item.index - 2;     // Position of the current item
            $('.title-style1 span').removeClass('animated fadeInUp');
            $('h1').removeClass('animated fadeInUp');
            $('p').removeClass('animated fadeInUp');
            $('a').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.title-style1 span').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('a').addClass('animated fadeInUp');
        });

        /*------------------------------------
            12. Tabs
        --------------------------------------*/

        //Horizontal Tab
        if ($(".horizontaltab").length !== 0) {
            $('.horizontaltab').easyResponsiveTabs({
                type: 'default', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function(event) { // Callback function if tab is switched
                    var $tab = $(this);
                    var $info = $('#nested-tabInfo');
                    var $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        }

        /*------------------------------------
            13. CountUp
        --------------------------------------*/

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });

        /*------------------------------------
            14. Countdown
        --------------------------------------*/

        // CountDown for coming soon page
        $(".countdown").countdown({
            date: "01 Mar 2026 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
            format: "on"
        });

        /*------------------------------------
            15. Current Year
        --------------------------------------*/

        $('.current-year').text(new Date().getFullYear());
      
    });

    // === when window loading === //
    $window.on("load", function() {

        /*------------------------------------
            16. Gallery
        --------------------------------------*/

        $('.portfolio-gallery').lightGallery();

        $('.portfolio-link').on('click', (e) => {
            e.stopPropagation();
        });

    });

    /*------------------------------------
                17. API Form Contact Us Page
            --------------------------------------*/
    $('.contact.quform.contact-form-page').submit(function(event) {
        event.preventDefault();

        var hookURL = 'https://mattermost.denovolab.com/hooks/fx3oo6dqsfn3mef8fekd89fb9e';
        var mattermost = new Mattermost(hookURL, {});

        var count_error = 0;
        $('.contact-form-page .quform-element').each(function() {

            var $input = $(this).find('input, textarea');
            var value = $input.val();

            if (typeof value !== 'undefined') {
                value = value.trim();
            }

            var isMessageField = $input.attr('name') === 'message';
            var isEmailField = $input.attr('name') === 'email';

            if ( (typeof value === 'undefined' || value === '') ) {
                var errorMessage = 'This field is required';

                if ($(this).find('.quform-error-message').length === 0) {
                    var $errorMessage = $('<div class="quform-error-message"/>').text(errorMessage);
                    $(this).append($errorMessage);
                    count_error++;
                }
            } else if (isEmailField && value !== '') {
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(value)) {
                    var errorMessage = 'Please enter a valid email address';

                    if ($(this).find('.quform-error-message').length === 0) {
                        var $errorMessage = $('<div class="quform-error-message"/>').text(errorMessage);
                        $(this).append($errorMessage);
                        count_error++;
                    }
                }
            } else {
                $(this).find('.quform-error-message').remove();
            }
        });

        if (count_error > 0) {
            return;
        }

        var site_name = 'Site: MobiVista';
        var form_name = 'Form: Contact Us';
        if($(this).attr('data-page') === 'home'){
            form_name = 'Form: Main Page';
        }

        var name = $('.form-control.field-name').val();
        var phone = $('.form-control.field-phone').val();
        var email = $('.form-control.field-email').val();
        var subject = $('.form-control.field-subject').val();
        var message = $('.form-control.field-message').val();


        var sms = '';
        sms += site_name + ' \n';
        sms += form_name + ' \n';
        sms += 'Email: ' + email + '\n';
        sms += 'Name: ' + name + '\n';
        sms += 'Phone: ' + phone + '\n';
        sms += 'Subject: ' + subject + '\n';
        sms += 'Message: ' + message;

        // console.log(sms);


        var channel = '#website-contact-form';
        var username = 'subscriber';

        mattermost.send(
            {
                text: sms,
                channel: channel,
                username: username,
            },
            function (err, body) {
                if (err) {
                    console.error(err);
                } else {
                    //console.log('Message sent successfully');
                    setTimeout(function (){
                        $('.contact-form-page .quform-error-message').addClass('quform-success-message');
                        $('.contact-form-page .quform-success-message').removeClass('quform-error-message');
                        $('.contact-form-page .quform-success-message').html(`<div class="quform-title">Successfully!</div>` + 'Thank you for your feedback. We will response to you asap');

                        $('.contact-form-page .quform-element').find('input, textarea').val('');
                    }, 1000);
                }
            }
        );
    });


    $('.contact.quform.rma-page-form').submit(function(event) {
        event.preventDefault();

        var hookURL = 'https://mattermost.denovolab.com/hooks/fx3oo6dqsfn3mef8fekd89fb9e';
        var mattermost = new Mattermost(hookURL, {});

        var count_error = 0;
        $('.rma-page-form .quform-element').each(function() {

            var $input = $(this).find('input, textarea');
            var value = $input.val();

            if (typeof value !== 'undefined') {
                value = value.trim();
            }

            var isMessageField = $input.attr('name') === 'message';
            var isEmailField = $input.attr('name') === 'email';

            if (!isMessageField && (typeof value === 'undefined' || value === '')) {
                var errorMessage = 'This field is required';

                if ($(this).find('.quform-error-message').length === 0) {
                    var $errorMessage = $('<div class="quform-error-message"/>').text(errorMessage);
                    $(this).append($errorMessage);
                    count_error++;
                }
            } else if (isEmailField && value !== '') {
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(value)) {
                    var errorMessage = 'Please enter a valid email address';

                    if ($(this).find('.quform-error-message').length === 0) {
                        var $errorMessage = $('<div class="quform-error-message"/>').text(errorMessage);
                        $(this).append($errorMessage);
                        count_error++;
                    }
                }
            } else {
                $(this).find('.quform-error-message').remove();
            }
        });

        if (count_error > 0) {
            return;
        }

        var site_name = 'Site: MobiVista';
        var form_name = 'Form: RMA';

        var name = $('.form-control.field-name').val();
        var phone = $('.form-control.field-phone').val();
        var email = $('.form-control.field-email').val();
        var model_number = $('.form-control.field-model_number').val();
        var message = $('.form-control.field-message').val();

        var sms = '';
        sms += site_name + ' \n';
        sms += form_name + ' \n';
        sms += 'Email: ' + email + '\n';
        sms += 'Name: ' + name + '\n';
        sms += 'Phone: ' + phone + '\n';
        sms += 'Model Number: ' + model_number + '\n';
        sms += 'Message: ' + message;

        //console.log(sms);

        var channel = '#website-contact-form';
        var username = 'subscriber';

        mattermost.send(
            {
                text: sms,
                channel: channel,
                username: username,
            },
            function (err, body) {
                if (err) {
                    console.error(err);
                } else {
                    //console.log('Message sent successfully');
                    setTimeout(function (){
                        $('.quform-error-message').addClass('quform-success-message');
                        $('.quform-success-message').removeClass('quform-error-message');
                        $('.quform-success-message').html(`<div class="quform-title">Successfully!</div>` + 'Thank you for your feedback. We will response to you asap');

                        $('.quform-element').find('input, textarea').val('');
                    }, 1000);
                }
            }
        );
    });



    $('.quform.form-footer-block').submit(function(event) {
        event.preventDefault();

        var hookURL = 'https://mattermost.denovolab.com/hooks/fx3oo6dqsfn3mef8fekd89fb9e';
        var mattermost = new Mattermost(hookURL, {});

        var count_error = 0;
        $('.form-footer-block .quform-element').each(function() {

            var $input = $(this).find('input');
            var value = $input.val();

            if (typeof value !== 'undefined') {
                value = value.trim();
            }

            var isEmailField = $input.attr('name') === 'email_address';

            if ( (typeof value === 'undefined' || value === '') ) {
                var errorMessage = 'This field is required';

                if ($(this).find('.quform-error-message').length === 0) {
                    var $errorMessage = $('<div class="quform-error-message"/>').text(errorMessage);
                    $(this).append($errorMessage);
                    count_error++;
                }
            } else if (isEmailField && value !== '') {
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(value)) {
                    var errorMessage = 'Please enter a valid email address';

                    if ($(this).find('.quform-error-message').length === 0) {
                        var $errorMessage = $('<div class="quform-error-message"/>').text(errorMessage);
                        $(this).append($errorMessage);
                        count_error++;
                    }
                }
            } else {
                $(this).find('.quform-error-message').remove();
            }
        });

        if (count_error > 0) {
            return;
        }

        var site_name = 'Site: MobiVista';
        var form_name = 'Form: Footer';

        var email = $('.form-footer-block .form-control.field-email_address').val();

        var sms = '';
        sms += site_name + ' \n';
        sms += form_name + ' \n';
        sms += 'Email: ' + email + '\n';

        //console.log(sms);

        var channel = '#website-contact-form';
        var username = 'subscriber';

        mattermost.send(
            {
                text: sms,
                channel: channel,
                username: username,
            },
            function (err, body) {
                if (err) {
                    console.error(err);
                } else {
                    //console.log('Message sent successfully');
                    setTimeout(function (){
                        $('.form-footer-block .quform-error-message').addClass('quform-success-message');
                        $('.form-footer-block .quform-success-message').removeClass('quform-error-message');
                        $('.form-footer-block .quform-success-message').html(`<div class="quform-title">Successfully!</div>` + 'Your email is added to our notification list.');

                        $('.form-footer-block .quform-element').find('input').val('');
                    }, 1000);
                }
            }
        );
    });

})(jQuery);