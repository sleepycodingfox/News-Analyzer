import '../blocks/about.css';
import '../images/group.ico';
import '../../node_modules/swiper/js/swiper.min.js';

import Swiper from 'swiper';
import '../../node_modules/swiper/css/swiper.css';

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3.4,
    spaceBetween: 16,
    centeredSlides: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.next-link',
        prevEl: '.prev-link',
    },

});

