import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import ReviewsStatistics from "./ReviewsStatistics.tsx";
import HomePageCarousel from "./HomePageCarousel.tsx";
import "../../styles/HomePageStyles/HomePage.css";
import ReviewsCarousel from "./ReviewsCarousel.tsx";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <div id="home-page-content">
          <HomePageCarousel />
          <ReviewsStatistics />
          <ReviewsCarousel />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
