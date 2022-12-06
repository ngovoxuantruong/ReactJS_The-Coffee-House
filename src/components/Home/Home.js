import Banner from './Banner';
import MenuHome from './MenuHome';
import HomeCloudTea from './HomeCloudTea';
import HomeStore from './HomeStore';
import Footer from '../Footer/Footer';
import HomeStory from './HomeStory';

const Home = () => {
    return (
        <div className="home">
            <Banner />

            <MenuHome />

            <HomeCloudTea />

            <HomeStore />

            <HomeStory />

            <Footer />
        </div>
    );
};

export default Home;
