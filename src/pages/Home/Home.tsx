import Banner from "./Banner/Banner";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Footer from "./Footer/Footer";
import Testimonilal from "./Testimonial/Testimonilal";


const Home = () => {
    return (
        <div>
            <Banner/>
            <FeaturedProducts/>
            <Testimonilal/>
            <Footer/>
        </div>
    );
};

export default Home;