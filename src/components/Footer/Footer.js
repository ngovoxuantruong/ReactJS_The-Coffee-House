import './Footer.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                    <Row>
                        <Col
                            className="footer-item-gt"
                            lg={3}
                            md={6}
                            sm={6}
                            xs={6}
                        >
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
                        </Col>

                        <Col
                            className="footer-item-dk"
                            lg={3}
                            md={6}
                            sm={6}
                            xs={6}
                        >
                            <h3 className="footer_title">Điều khoản</h3>

                            <ul className="footer_linklists">
                                <li>
                                    <a href="#!">Điều khoản bảo mật</a>
                                </li>
                                <li>
                                    <a href="#!">
                                        Chỉnh sách bảo mật thông tin
                                    </a>
                                </li>
                            </ul>
                        </Col>

                        <Col
                            className="footer-item-hl"
                            lg={3}
                            md={6}
                            sm={12}
                            xs={12}
                        >
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
                        </Col>

                        <Col
                            className="footer-item-img"
                            lg={3}
                            md={6}
                            sm={6}
                            xs={12}
                        >
                            <div className="footer_img">
                                <img src={socialImg} alt="Social img" />
                            </div>

                            <ul className="footer_social_link">
                                <li>
                                    <a href="#!">
                                        <AiOutlineFacebook
                                            style={{
                                                color: 'white',
                                                fontSize: '25px',
                                            }}
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <AiOutlineInstagram
                                            style={{
                                                color: 'white',
                                                fontSize: '25px',
                                            }}
                                        />
                                    </a>
                                </li>
                            </ul>
                        </Col>

                        <Col lg={12} md={12} sm={12} xs={12}>
                            <hr />
                        </Col>

                        <Col lg={9} md={9} sm={9} xs={12}>
                            <ul className="footer_itemlist">
                                <li>
                                    Công ty cổ phần thương mại dịch vụ Trà Cà
                                    Phê VN
                                </li>
                                <li>
                                    Mã số DN: 0312867172 do sở kế hoạch và đầu
                                    tư tp. HCM cấp ngày 23/07/2014. Người đại
                                    diện: NGÔ NGUYÊN KHA
                                </li>
                                <li>
                                    Địa chỉ: 86-88 Cao Thắng, phường 04, quận 3,
                                    tp Hồ Chí Minh Điện thoại: (028) 7107 8079
                                    Email: hi@thecoffeehouse.vn
                                </li>
                                <li>
                                    © 2014-2022 Công ty cổ phần thương mại dịch
                                    vụ Trà Cà Phê VN mọi quyền bảo lưu
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Footer;
