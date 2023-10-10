import React from 'react';
import { EffectFade, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Counter from '../../common/counter';

const HeroSlider = () => {
    return (
        <div className="bd-banner__right p-relative z-index-1 mb-60">
            <div className="bd-banner__active  swiper-container">
                <div className="swiper-wrappers">
                    <Swiper
                        modules={[EffectFade, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={30}
                        effect={"fade"}
                        slidesPerView={1}
                        autoplaydisableoninteraction={"false"}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true
                        }}
                        pagination={{
                            clickable: true,
                            el: '.bd-banner-pagination',
                        }}
                    >
                        <SwiperSlide>
                            <div className="swiper-slides">
                                <div className="bd-banner__image-2">
                                    <img src="/assets/img/banner/FARMER.jpg" alt="banner-img" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slides">
                                <div className="bd-banner__image-2">
                                    <img src="/assets/img/banner/FARMER2.jpg" alt="banner-img" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slides">
                                <div className="bd-banner__image-2">
                                    <img src="/assets/img/banner/FARMER3.jpg" alt="banner-img" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slides">
                                <div className="bd-banner__image-2">
                                    <img src="/assets/img/banner/FARMER4.jpg" alt="banner-img" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
           
            <div className="bd-banner-pagination banner-pagination-1"></div>
        </div>
    );
};

export default HeroSlider;