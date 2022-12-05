import './HomeCloudTea.scss';

import cloudteaMenu from '../../assets/img/Cloudtea/cloudteaMenu.webp';
import cloudteaTitle from '../../assets/img/Cloudtea/cloudteaTitle.webp';

const HomeCloudTea = () => {
    return (
        <div className="home-cloudtea">
            <div className="container">
                <div className="cloudtea-container">
                    <div className="cloudtea-right">
                        <img src={cloudteaMenu} alt="CloudteaMenu" />
                    </div>

                    <div className="cloudtea-left">
                        <div className="cloudtea-title">
                            <img src={cloudteaTitle} alt="CloudTeaTitle" />
                        </div>

                        <div className="cloudtea-desc">
                            Vừa êm mượt dịu dàng, vừa bùng nổ nồng nàn, BST Trà Sữa CloudTea Hương Vị Nụ Hôn Đầu mang
                            đến trải nghiệm đầy mới mẻ. Chạm môi là foam béo mịn bồng bềnh, càng thêm đậm đà nhờ topping
                            vụn bánh quy phô mai hoặc bột ca cao thơm lừng. Kế tiếp là tầng trà sữa sóng sánh, đậm
                            hương, rõ vị. Và tầng thạch nguyên chất, dai giòn giúp giữ trọn vị trà sữa đến ngụm cuối
                            cùng. 3 tầng hòa quyện, nhấp một ngụm là ghiền, nhớ mãi không thôi.
                        </div>

                        <a href="#!" className="cloudtea-btn">
                            <span>Thử ngay</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCloudTea;
