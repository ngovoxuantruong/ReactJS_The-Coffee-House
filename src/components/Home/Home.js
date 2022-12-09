import Banner from './Banner';
import MenuHome from './MenuHome';
import HomeCloudTea from './HomeCloudTea';
import HomeStore from './HomeStore';
import HomeStory from './HomeStory';

const Home = () => {
    return (
        <div className="home">
            <Banner />

            <MenuHome />

            <HomeCloudTea />

            <HomeStore />

            <HomeStory />
        </div>
    );
};

export default Home;
