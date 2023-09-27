// $('.section-five_page').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     dots: true,
//     infinite: false,
//     speed: 300,
//     prevArrow: `<button type='button' class='slick-prev pull-left'><img src="../image/arrow-left.png"/></button>`,
//     nextArrow: `<button type='button' class='slick-next pull-right'><img src="../image/arrow-right.png"/></button>`,
// });
$('.section-six__page').slick({
    centerMode: true,
slidesToScroll: 1,
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ],
    prevArrow: `<button type='button' class='slick-prev pull-left'><img src="../image/arrow-left.png"/></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><img src="../image/arrow-left.png"/></button>`,
});