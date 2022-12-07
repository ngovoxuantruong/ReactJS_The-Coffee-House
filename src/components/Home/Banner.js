import React, { Fragment } from 'react';
import Media from 'react-media';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import banner1 from '../../assets/img/banners/banner1.webp';
import banner2 from '../../assets/img/banners/banner2.webp';
import banner3 from '../../assets/img/banners/banner3.webp';
import banner4 from '../../assets/img/banners/banner4.webp';
import banner5 from '../../assets/img/banners/banner5.webp';

import bannerResponsive1 from '../../assets/img/banners/bannerResponsive1.webp';
import bannerResponsive2 from '../../assets/img/banners/bannerResponsive2.webp';
import bannerResponsive3 from '../../assets/img/banners/bannerResponsive3.webp';
import bannerResponsive4 from '../../assets/img/banners/bannerResponsive4.webp';
import bannerResponsive5 from '../../assets/img/banners/bannerResponsive5.webp';

import './HomeSCSS/Banner.scss';

const Banner = () => {
    const bannerList = [banner1, banner2, banner3, banner4, banner5];

    const bannerListResponsive = [
        bannerResponsive1,
        bannerResponsive2,
        bannerResponsive3,
        bannerResponsive4,
        bannerResponsive5,
    ];

    return (
        <Media
            queries={{
                medium: '(max-width: 600px)',
                large: '(min-width: 601px)',
            }}
        >
            {(matches) => (
                <Fragment>
                    {matches.medium && (
                        <div className="home-banner">
                            <div className="home-banner-swiper">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    {bannerListResponsive.map(
                                        (bannerItem, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <div className="home-banner-item">
                                                        <a href="#!">
                                                            <picture>
                                                                <img
                                                                    className="banner-picture"
                                                                    src={
                                                                        bannerItem
                                                                    }
                                                                    alt="banner"
                                                                />
                                                            </picture>
                                                        </a>
                                                    </div>
                                                </SwiperSlide>
                                            );
                                        },
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    )}
                    {matches.large && (
                        <div className="home-banner">
                            <div className="home-banner-swiper">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    {bannerList.map((bannerItem, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="home-banner-item">
                                                    <a href="#!">
                                                        <picture>
                                                            <img
                                                                className="banner-picture"
                                                                src={bannerItem}
                                                                alt="banner"
                                                            />
                                                        </picture>
                                                    </a>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    )}
                </Fragment>
            )}
        </Media>
    );
};

export default Banner;
