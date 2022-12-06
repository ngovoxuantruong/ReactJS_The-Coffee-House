import './HomeSCSS/MenuHome.scss';

import bannerMenu from '../../assets/img/menuListHome/menu-banner.webp';
import menuItem1 from '../../assets/img/menuListHome/menu-item1.webp';
import menuItem2 from '../../assets/img/menuListHome/menu-item2.webp';
import menuItem3 from '../../assets/img/menuListHome/menu-item3.webp';
import menuItem4 from '../../assets/img/menuListHome/menu-item4.webp';
import menuItem5 from '../../assets/img/menuListHome/menu-item5.webp';
import menuItem6 from '../../assets/img/menuListHome/menu-item6.webp';

const MenuHome = () => {
    const menuListItems = [
        { src: menuItem1, menuName: 'CloudFee Hạnh Nhân Nướng', price: '49.000 đ' },
        { src: menuItem2, menuName: 'The Coffee House Sữa Đá', price: '39.000 đ' },
        { src: menuItem3, menuName: 'Hi-Tea Vải', price: '49.000 đ' },
        { src: menuItem4, menuName: 'Cà Phê Sữa Đá', price: '29.000 đ' },
        { src: menuItem5, menuName: 'Bánh Mì VN Thịt Nguội', price: '35.000 đ' },
        { src: menuItem6, menuName: 'Mochi Kem Chocolate', price: '19.000 đ' },
    ];

    return (
        <div className="home-menu">
            <div className="container">
                <div className="menu-list-home">
                    <div className="menu-banner">
                        <a href="#!">
                            <img src={bannerMenu} alt="" />
                        </a>
                    </div>

                    {menuListItems.map((menuItem, index) => {
                        return (
                            <div key={index} className="menu-item">
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
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MenuHome;
