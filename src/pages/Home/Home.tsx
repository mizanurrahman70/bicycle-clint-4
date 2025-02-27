import ReviewMarquee from "../revews/ReviewMarquee";
import { reviews } from "../revews/reviews";
import Banner from "./Banner/Banner";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Footer from "./Footer/Footer";


const Home = () => {
    return (
        <div>
            <Banner/>
            <FeaturedProducts/>
            <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">What Our Customers Say</h2>
            <span className="text-blue-600 font-medium">All Reviews</span>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <ReviewMarquee reviews={reviews} autoScroll={true} />
          </div>
        </section>
            <Footer/>
        </div>
    );
};

export default Home;