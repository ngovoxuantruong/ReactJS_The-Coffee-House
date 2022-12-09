import { Outlet } from 'react-bootstrap-icons';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Collections = () => {
    return (
        <div className="collections">
            <Outlet />
        </div>
    );
};

export default Collections;
