import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Media from 'react-media';
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
                    <Media
                        queries={{
                            medium: '(max-width: 1024px)',
                            large: '(min-width: 1025px)',
                        }}
                    >
                        {(matches) => (
                            <Fragment>
                                {matches.medium && (
                                    <>
                                        <Swiper
                                            className="mySwiper"
                                            breakpoints={{
                                                // when window width is >= 640px
                                                300: {
                                                    width: 300,
                                                    slidesPerView: 0,
                                                },
                                                640: {
                                                    width: 640,
                                                    slidesPerView: 1,
                                                },
                                                // when window width is >= 768px
                                                768: {
                                                    width: 768,
                                                    slidesPerView: 2,
                                                },
                                            }}
                                        >
                                            {topBarInfo.map((item, index) => {
                                                return (
                                                    <SwiperSlide key={index}>
                                                        <div className="top-bar-item">
                                                            <a href="">
                                                                <img
                                                                    src={
                                                                        item.img
                                                                    }
                                                                    alt="location"
                                                                />
                                                                <span>
                                                                    {item.text}
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </SwiperSlide>
                                                );
                                            })}
                                        </Swiper>
                                    </>
                                )}
                                {matches.large && (
                                    <>
                                        {topBarInfo.map((item, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="top-bar-item"
                                                >
                                                    <a href="">
                                                        <img
                                                            src={item.img}
                                                            alt="location"
                                                        />
                                                        <span>{item.text}</span>
                                                    </a>
                                                </div>
                                            );
                                        })}
                                    </>
                                )}
                            </Fragment>
                        )}
                    </Media>
                </div>
            </div>

            <div className="header">
                <div className="container">
                    <div className="header-nav">
                        <div className="sidebar">
                            <img
                                style={{ width: '28px' }}
                                src="https://icons.veryicon.com/png/o/miscellaneous/we/sidebar-2.png"
                                alt="vector sidebar"
                            />
                        </div>
                        <div className="nav-logo">
                            <Link to={'/'}>
                                <img className="logo" src={logo} alt="logo" />
                            </Link>
                        </div>

                        <div className="nav-menu">
                            <ul className="nav-menu-lv1">
                                <li className="nav-menu-item-lv1">
                                    <NavLink to={'/collections/ca-phe-tai-nha'}>
                                        Cà Phê
                                    </NavLink>
                                </li>

                                <li className="nav-menu-item-lv1">
                                    <NavLink to={'/collections/tra-tai-nha'}>
                                        Trà
                                    </NavLink>
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
