$(document).ready(function () {
    $('.header__sliders').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
});

var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

$('.owl-carousel').owlCarousel({
    items: 3,
    nav: true,
    dot: true,
    margin: 30,
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 4000,
    loop: true,
    navText: ["<img src='assets/img/contact/left.png'>", "<img src='assets/img/contact/right.png'>"],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        480: {
            items: 2,
            nav: false,
            margin: 15,
        },
        1080: {
            items: 3,
            nav: true,
            dot: true,
            margin: 30,
            dotsEach: true,
            autoplay: true,
            autoplayTimeout: 4000,
            loop: true,
        }
    }
})


form.submit();

function initMap() {
    // The location of Uluru
    var uluru = { lat: 40.680027, lng: -73.904429 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 13.2, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}