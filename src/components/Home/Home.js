import Banner from './Banner';
import MenuHome from './MenuHome';
import HomeCloudTea from './HomeCloudTea';
import HomeStore from './HomeStore';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="home">
            <Banner />

            <MenuHome />

            <HomeCloudTea />

            <HomeStore />

            <Footer />
        </div>
    );
};

export default Home;
