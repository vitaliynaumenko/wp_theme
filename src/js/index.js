import $ from 'jquery';
import jQuery from "jquery";

window.$ = window.jQuery = jQuery;

window.addEventListener('DOMContentLoaded', function () {

    let swiperSliderModule = document.querySelectorAll('.swiper-slider')
    if (swiperSliderModule.length) {



        import(
            /* webpackChunkName: "swiperSliderModule" */
            /* webpackPrefetch: true */

            '../js/components/swiper'
            )
            .then((module) => {
                module.default(swiperSliderModule)
            })
    }
//
})






