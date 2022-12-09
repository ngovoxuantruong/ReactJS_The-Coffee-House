import './CoffeeAtHome.scss';
import { CoffeeAtHomeData } from '../../utils/CollectionData';

const CoffeeAtHome = () => {
    return (
        <div className="coffeeAtHome">
            <div className="container">
                <div className="block_item_menu">
                    <div className="block_item_menu_title">
                        <h3>Cà Phê Tại Nhà</h3>
                        <div className="menu_list_collection">
                            {CoffeeAtHomeData.map((item, index) => {
                                return (
                                    <div key={index} className="menu_item">
                                        <div className="menu_img">
                                            <a href="#!">
                                                <img src={item.img} alt="" />
                                            </a>
                                        </div>
                                        <div className="menu_info">
                                            <h3>{item.title}</h3>
                                            <p>{item.price}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeAtHome;
