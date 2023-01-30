import Sidebar from '../../Sidebar/Sidebar';
import './Menu.scss';

const Menu = () => {
    return (
        <div className="menu">
            <div className="container">
                <div className="menu_container">
                    <div className="sticky_sidebar">
                        <Sidebar />
                    </div>

                    <div className="block_menu_right">
                        Mình là block menu right
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
