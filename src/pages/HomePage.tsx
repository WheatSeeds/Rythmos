import Header from "../components/UI/Header.tsx";
import Footer from "../components/UI/Footer.tsx";
import ReviewsStatistics from "../components/HomePageComponents/ReviewsStatistics.tsx";

const HomePage = () => {
    return (
        <>
            <Header/>
            <main>
                <div className="home-page-content">
                    <ReviewsStatistics/>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default HomePage;