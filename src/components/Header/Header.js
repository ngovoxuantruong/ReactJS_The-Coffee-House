import './Header.scss';
import phone from '../../assets/img/icons/phone.webp';
import location from '../../assets/img/icons/location.webp';
import delivery from '../../assets/img/icons/delivery.webp';
import logo from '../../assets/img/logo.png';

import { AiFillCaretDown } from 'react-icons/ai';

const Header = () => {
    return (
        <>
            <div className="top-bar">
                <div className="container">
                    <div className="top-bar-item">
                        <a href="#!">
                            <img src={location} alt="location" />
                            <span>154 Cửa hàng khắp cả nước</span>
                        </a>
                    </div>
                    <div className="top-bar-item">
                        <a href="#!">
                            <img src={phone} alt="phone" />
                            <span>Đặt hàng: 034.344.1421</span>
                        </a>
                    </div>
                    <div className="top-bar-item">
                        <a href="#!">
                            <img src={delivery} alt="delivery" />
                            <span>Freeship từ 50.000vnd</span>
                        </a>
                    </div>
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
                                <li className="nav-menu-item-lv1">
                                    <a href="#!">Menu</a>
                                    <AiFillCaretDown />
                                </li>
                                <li className="nav-menu-item-lv1">
                                    <a href="#!">Chuyện Nhà</a>
                                    <AiFillCaretDown />
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
