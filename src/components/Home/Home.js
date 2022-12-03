// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import './Home.scss';

import banner1 from '../../assets/img/banners/banner1.webp';
import banner2 from '../../assets/img/banners/banner2.webp';
import banner3 from '../../assets/img/banners/banner3.webp';
import banner4 from '../../assets/img/banners/banner4.webp';
import banner5 from '../../assets/img/banners/banner5.webp';

import bannerMenu from '../../assets/img/menuListHome/menu-banner.webp';
import menuItem1 from '../../assets/img/menuListHome/menu-item1.webp';
import menuItem2 from '../../assets/img/menuListHome/menu-item2.webp';
import menuItem3 from '../../assets/img/menuListHome/menu-item3.webp';
import menuItem4 from '../../assets/img/menuListHome/menu-item4.webp';
import menuItem5 from '../../assets/img/menuListHome/menu-item5.webp';
import menuItem6 from '../../assets/img/menuListHome/menu-item6.webp';

const Home = () => {
    const bannerList = [banner1, banner2, banner3, banner4, banner5];

    const menuListItems = [
        { src: menuItem1, menuName: 'CloudFee Hạnh Nhân Nướng', price: '49.000 đ' },
        { src: menuItem2, menuName: 'The Coffee House Sữa Đá', price: '39.000 đ' },
        { src: menuItem3, menuName: 'Hi-Tea Vải', price: '49.000 đ' },
        { src: menuItem4, menuName: 'Cà Phê Sữa Đá', price: '29.000 đ' },
        { src: menuItem5, menuName: 'Bánh Mì VN Thịt Nguội', price: '35.000 đ' },
        { src: menuItem6, menuName: 'Mochi Kem Chocolate', price: '19.000 đ' },
    ];

    return (
        <div className="home">
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
                        {bannerList.map((bannerItem) => {
                            return (
                                <SwiperSlide>
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

            <div className="home-menu">
                <div className="container">
                    <div className="menu-list-home">
                        <div className="menu-banner">
                            <a href="#!">
                                <img src={bannerMenu} alt="" />
                            </a>
                        </div>

                        {menuListItems.map((menuItem) => {
                            return (
                                <>
                                    <div className="menu-item">
                                        <div className="menu-item-img">
                                            <a href="#!">
                                                <img src={menuItem.src} alt="Menu" />
                                            </a>
                                        </div>
                                        <div className="menu-item-info">
                                            <h3>
                                                <a href="#!">{menuItem.menuName}</a>
                                            </h3>
                                            <div className="price-product-item">{menuItem.price}</div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
