$(document).ready(function() {
    $('#main-menu-toggle').click(function() {
        $('#main-menu').toggle();
    });

    var updateHeaderPlaceholder = function () {
        var hdr_h = $('#main-header').outerHeight();
        $('#header-placeholder').height(hdr_h);
    };
    var $window = $(window);
    $window.resize(function () {
        updateHeaderPlaceholder();
    });

    //bxSlider
    $('.slider').bxSlider({
        controls: false,
        auto: true,
        pause: 6000,
        stopAutoOnClick: false,
        infiniteLoop: true,
        keyboardEnabled: true,
        mode: 'horizontal',
        speed: 3000,
        slideMargin: 20
    });



    var $projects = $('.projects');
    $projects.isotope({
       itemSelector: '.project-item',
        percentPosition: true,
        masonry: {
           columnWidth: '.grid-sizer'
        }
    });

    $('.projects-filter ul li a').click(function(e) {
        e.preventDefault();
        var filterType = $(this).data('filter');
        if(filterType === 'all'){
            $projects.isotope({filter: '*'});
            return false;
        }
        $projects.isotope({filter: '.' + filterType})
    });


});
