import "./index.sass"
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default function Product() {

    const sliderContMini = $('.block-right__slider-min');
    const sliderCont = $('.block-right__slider');
    const slideNext = $('.slider__next');
    const slidePrev = $('.slider__prev');

    const sliderMin = new Swiper(sliderContMini,
        {
            spaceBetween: 5,
            slidesPerView: 4,
            loop: true,
            freeMode: true,
            loopedSlides: 5,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
    });

    const slider = new Swiper(sliderCont,
        {
            spaceBetween: 5,
            loop:true,
            loopedSlides: 5,
            navigation: {
                nextEl: slideNext,
                prevEl: slidePrev,
            },
            thumbs: {
                swiper: sliderMin,
            },
    });

}