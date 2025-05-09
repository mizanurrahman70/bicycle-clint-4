import ChoseUs from "../../components/choose/ChoseUs";
import ReviewMarquee from "../revews/ReviewMarquee";
import { reviews } from "../revews/reviews";
import Banner from "./Banner/Banner";
import FAQSection from "./Faq/FaqSection";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Footer from "./Footer/Footer";
import UpcomingProduct from "./UpcomingProduct/UpcomingProduct";


const Home = () => {
  return (
    <div>
      <Banner
        title="Ride Into Adventure"
        subtitle="Discover our premium collection of bicycles designed for every terrain and lifestyle"
        ctaText="Explore Collection"
      />
      
      <FeaturedProducts />
      <section className="mb-12 mx-auto container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">What Our Customers Say</h2>
          {/* <span className="text-blue-600 font-medium">All Reviews</span> */}
        </div>
  
        <div className="container mx-auto rounded-lg overflow-hidden shadow-md">
          <ReviewMarquee reviews={reviews} autoScroll={true} />
        </div>
      </section>
      <ChoseUs></ChoseUs>
      <UpcomingProduct></UpcomingProduct>
      <FAQSection />
     
      <Footer />
    </div>
  );
};

export default Home;