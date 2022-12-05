import './Footer.scss';
import phone from '../../assets/img/icons/phone.webp';
import location from '../../assets/img/icons/location.webp';
import socialImg from '../../assets/img/footerSocialImage.jpg';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-lg-push-6 col-md-push-6 footer_col">
                            <div className="hotline_footer">
                                <p>
                                    <img src={phone} alt="phone" />
                                    Đặt hàng: 034 344 1421
                                </p>
                                <p>
                                    <img src={location} alt="location" />
                                    Liên hệ
                                </p>
                            </div>

                            <div className="address_footer">
                                <p>
                                    Tầng 3-4 Hub Building
                                    <br />
                                    195/10E Điện Biên Phủ, P.15 ,
                                    <br />
                                    Q.Bình Thạnh, TP.Hồ Chí Minh
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-lg-push-6 col-md-push-6 footer_col footer_right">
                            <div className="footer_img">
                                <img src={socialImg} alt="Social img" />
                            </div>

                            <ul className="footer_social_link">
                                <li>
                                    <a href="#!">
                                        <AiOutlineFacebook style={{ color: 'white', fontSize: '25px' }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <AiOutlineInstagram style={{ color: 'white', fontSize: '25px' }} />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-lg-pull-6 col-md-pull-6 footer_col">
                            <h3 className="footer_title">Giới thiệu</h3>

                            <ul className="footer_linklists">
                                <li>
                                    <a href="#!">Về chúng tôi</a>
                                </li>
                                <li>
                                    <a href="#!">Sản Phẩm</a>
                                </li>
                                <li>
                                    <a href="#!">Khuyến Mãi</a>
                                </li>
                                <li>
                                    <a href="#!">Chuyện Cà Phê</a>
                                </li>
                                <li>
                                    <a href="#!">Cửa Hàng</a>
                                </li>
                                <li>
                                    <a href="#!">Tuyển dụng</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-lg-pull-6 col-md-pull-6 footer_col">
                            <h3 className="footer_title">Điều khoản</h3>

                            <ul className="footer_linklists">
                                <li>
                                    <a href="#!">Điều khoản bảo mật</a>
                                </li>
                                <li>
                                    <a href="#!">Chỉnh sách bảo mật thông tin</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
