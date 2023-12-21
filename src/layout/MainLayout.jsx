
import Banner from '../pages/Banner';
import Footer from '../pages/Footer';
import Navber from './Navber';

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;