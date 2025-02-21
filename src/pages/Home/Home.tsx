import Banner from "./Banner/Banner";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Footer from "./Footer/Footer";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner/>
            <FeaturedProducts/>
            <Testimonial/>
            <Footer/>
        </div>
    );
};

export default Home;