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

import './Banner.scss';

const Banner = () => {
    const bannerList = [banner1, banner2, banner3, banner4, banner5];

    return (
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
                                            <img className="banner-picture" src={bannerItem} alt="banner" />
                                        </picture>
                                    </a>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;
