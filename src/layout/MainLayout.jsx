
import About from '../pages/About';
import Banner from '../pages/Banner';
import Contact from '../pages/Contact';
import Footer from '../pages/Footer';
import Team from '../pages/Team';
import Navber from './Navber';

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Team></Team>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;