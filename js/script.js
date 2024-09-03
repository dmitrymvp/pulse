// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         speed: 1200,
//         adaptiveHeight: true,
//         // autoplay: true,
//         // autoplaySpeed: 2000,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/chevron_left_solid.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/chevron_right_solid.png"></button>'
//     });
// });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});