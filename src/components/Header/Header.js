import './Header.scss';
import phone from '../../assets/img/icons/phone.webp';
import location from '../../assets/img/icons/location.webp';
import delivery from '../../assets/img/icons/delivery.webp';
import logo from '../../assets/img/logo.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { AiFillCaretDown } from 'react-icons/ai';

const Header = () => {
    const topBarInfo = [
        { img: location, text: '154 Cửa hàng khắp cả nước' },
        { img: phone, text: 'Đặt hàng: 034.344.1421' },
        { img: delivery, text: 'Freeship từ 50.000vnd' },
    ];

    return (
        <>
            <div className="top-bar">
                <div className="container">
                    <Swiper
                        className="mySwiper"
                        breakpoints={{
                            // when window width is >= 640px

                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 2,
                            },
                            1024: {
                                width: 1024,
                                slidesPerView: 2,
                                allowTouchMove: true,
                            },
                            1440: {
                                width: 768,
                                slidesPerView: 2,
                                allowTouchMove: false,
                            },
                        }}
                    >
                        {topBarInfo.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="top-bar-item">
                                        <a href="#!">
                                            <img
                                                src={item.img}
                                                alt="location"
                                            />
                                            <span>{item.text}</span>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>

            <div className="header">
                <div className="container">
                    <div className="header-nav">
                        <div className="nav-logo">
                            <a href="#!">
                                <img className="logo" src={logo} alt="logo" />
                            </a>
                        </div>

                        <div className="nav-menu">
                            <ul className="nav-menu-lv1">
                                <li className="nav-menu-item-lv1">
                                    <a href="#!">Cà Phê</a>
                                </li>

                                <li className="nav-menu-item-lv1">
                                    <a href="#!">Trà</a>
                                </li>

                                <li className="nav-menu-item-lv1 has-child">
                                    <a href="#!">
                                        Menu <AiFillCaretDown />
                                    </a>

                                    <ul className="nav-menu-lv2">
                                        <li className="lv2-title">
                                            <a href="#!">Tất Cả</a>
                                        </li>

                                        <li className="lv2-title">
                                            <a href="#!">Cà Phê</a>
                                            <ul className="menu-child-lv3">
                                                <li className="lv3-title">
                                                    <a href="#!">
                                                        Cà Phê Việt Nam
                                                    </a>
                                                </li>
                                                <li className="lv3-title">
                                                    <a href="#!">Cà Phê Máy</a>
                                                </li>
                                                <li className="lv3-title">
                                                    <a href="#!">Cold Brew</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="lv2-title">
                                            <a href="#!">CloudFee</a>
                                            <ul className="menu-child-lv3">
                                                <li className="lv3-title">
                                                    <a href="#!">CloudFee</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="lv2-title">
                                            <a href="#!">CloudTea</a>
                                            <ul className="menu-child-lv3">
                                                <li className="lv3-title">
                                                    <a href="#!">CloudTea</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="lv2-title">
                                            <a href="#!">Trà</a>
                                            <ul className="menu-child-lv3">
                                                <li className="lv3-title">
                                                    <a href="#!">
                                                        Trà Trái Cây
                                                    </a>
                                                </li>
                                                <li className="lv3-title">
                                                    <a href="#!">
                                                        Trà Sữa Macchiato
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="lv2-title">
                                            <a href="#!">Hi-Tea Healthy</a>
                                            <ul className="menu-child-lv3">
                                                <li className="lv3-title">
                                                    <a href="#!">Hi-Tea Trà</a>
                                                </li>
                                                <li className="lv3-title">
                                                    <a href="#!">
                                                        Hi-Tea Đá Tuyết
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="lv2-title">
                                            <a href="#!">Bánh & Snack</a>
                                            <ul className="menu-child-lv3">
                                                <li className="lv3-title">
                                                    <a href="#!">Bánh Mặn</a>
                                                </li>
                                                <li className="lv3-title">
                                                    <a href="#!">Bánh Ngọt</a>
                                                </li>
                                                <li className="lv3-title">
                                                    <a href="#!">Snack</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="lv2-title">
                                            <a href="#!">Tại Nhà</a>
                                            <ul className="menu-child-lv3">
                                                <li className="lv3-title">
                                                    <a href="#!">
                                                        Cà Phê Tại Nhà
                                                    </a>
                                                </li>
                                                <li className="lv3-title">
                                                    <a href="#!">Trà Tại Nhà</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="lv2-title">
                                            <a href="#!">Thức Uống Khác</a>
                                            <ul className="menu-child-lv3">
                                                <li className="lv3-title">
                                                    <a href="#!">Chocolate</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-menu-item-lv1">
                                    <a href="#!">
                                        Chuyện Nhà <AiFillCaretDown />
                                    </a>

                                    <ul className="nav-menu-lv2">
                                        <li className="lv2-title">
                                            <a href="#!">Coffeeholic</a>
                                            <ul className="menu-child-lv3">
                                                <li className="lv3-title">
                                                    <a href="#!">
                                                        #chuyencaphe
                                                    </a>
                                                </li>
                                                <li className="lv3-title">
                                                    <a href="#!">#phacaphe</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="lv2-title">
                                            <a href="#!">Teaholic</a>
                                            <ul className="menu-child-lv3">
                                                <li className="lv3-title">
                                                    <a href="#!">#phatra</a>
                                                </li>
                                                <li className="lv3-title">
                                                    <a href="#!">
                                                        #cauchuyenvetra
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="lv2-title">
                                            <a href="#!">Blog</a>
                                            <ul className="menu-child-lv3">
                                                <li className="lv3-title">
                                                    <a href="#!">#inthemood</a>
                                                </li>

                                                <li className="lv3-title">
                                                    <a href="#!">#Review</a>
                                                </li>

                                                <li className="lv3-title">
                                                    <a href="#!">#HumanofTCH</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-menu-item-lv1">
                                    <a href="#!">Cảm Hứng CloudFee</a>
                                </li>

                                <li className="nav-menu-item-lv1">
                                    <a href="#!">Cửa Hàng</a>
                                </li>

                                <li className="nav-menu-item-lv1">
                                    <a href="#!">Tuyển dụng</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
