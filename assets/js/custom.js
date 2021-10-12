
 $(window).bind("scroll", function () {
    if ($(window).scrollTop() > 128) {
        $("header ").addClass("fixed");
    } else {
        $("header").removeClass("fixed");
    }
});

$(document).on("click", function (e) {
    if ($(e.target).closest(".searchdrop img").length) {
        $("#searchbox").slideToggle("fast");
    } else if (!$(e.target).closest(".searchbox").length) {
        $(".searchbox").slideUp("fast");
    }
});
// $(document).on("click", '.btn-close', function (e) {
//     $(".searchbox").slideUp("fast");
// });

$(document).on("click", '.btn-close', function () {
    $(".searchbox").slideUp("fast");
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.backtotop').fadeIn();
    } else {
        $('.backtotop').fadeOut();
    }
});
$(document).on('click', '.backtotop', function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

var owl = $('.banner-carousal');
owl.owlCarousel({
    loop: true
    , margin: 0
    , navRewind: false
    , nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: true
    , responsive: {
        0: {
            items: 1
        }
    }

});

$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [5000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
});

// Counter Js
$(window).on("load resize", function () {

    var counters = $(".counter-number");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function (start, value, id) {
        var localStart = start;
        setInterval(function () {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
        }, 4);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
});


// Photo carousel
$('.photo-carousel').owlCarousel({
    items: 1,
    loop: true,
    // lazyLoad: true,
    // center: true,
});


$('.category-carousal').owlCarousel({
    loop: true
    , margin: 30
    , navRewind: false
    , nav: true
    ,autoplay: true
    ,autoplayTimeout: 1000
    , responsive: {
        0: {
            items: 1
        }
        , 320: {
            items: 1
        }
        , 480: {
            items: 1
        }
        , 767: {
            items: 3
        }
        , 1366: {
            items: 4
        }
    }
});

$('.featured-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true
});


$(document).ready(function(e){
    $('.table-accordian').hide();
});

$(document).on('click', '.view-enquiries-modal', function(e){
    $(this).closest('.ad-details').find('.table-accordian').slideToggle();
})